<template>

<div class="modal modal-lg fade" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
        <loading-overlay :is-loading="uploadState" :is-full="false" />
        <div class="modal-content">
            <div class="modal-header justify-content-end">
                <button type="button"
                        class="btn border-0 p-0 fs-4"
                        @click="hideModal">
                <i class="bi bi-x-circle-fill"></i>
                </button>
            </div>
            <v-form v-slot="{ meta }" @submit="confirmUpdate">
            <div class="modal-body">
                <ul class="nav nav-pills bg-light rounded-2 mb-3">
                    <li class="nav-item flex-grow-1">
                    <button type="button" @click="tab = 'setting'"
                            class="w-100 nav-link" :class="{ 'active': tab === 'setting' }">
                    文章設定</button>
                    </li>
                    <li class="nav-item flex-grow-1">
                    <button type="button" @click="tab = 'category'"
                            class="w-100 nav-link" :class="{ 'active': tab === 'category' }">
                    文章分類</button>
                    </li>
                    <li class="nav-item flex-grow-1">
                    <button type="button" @click="tab = 'image'"
                            class="w-100 nav-link" :class="{ 'active': tab === 'image' }">
                    文章圖片</button>
                    </li>
                </ul>
                <div v-show="tab === 'setting'">
                    <div class="mb-3">
                        <label class="form-label is-required" for="title">文章標題</label>
                        <v-field
                            id="title" type="text"
                            class="form-control" v-model.trim="article.title"
                            name="title" rules="required"></v-field>
                    </div>
                    <div class="mb-3">
                        <label class="form-label is-required" for="description">文章摘要</label>
                        <v-field
                            id="title" rows="3" class="form-control"
                            v-model.trim="article.description"
                            name="description" as="textarea"></v-field>
                    </div>
                    <div class="mb-3">
                        <div class="row row-cols-2">
                            <div class="col">
                                <label class="form-label is-required" for="author">文章作者</label>
                                <v-field
                                    id="author" type="text"
                                    class="form-control" v-model.trim="article.author"
                                    name="author" rules="required"></v-field>
                            </div>
                            <div class="col">
                                <div class="mb-3">
                                    <label class="form-label is-required" for="create_at">
                                    <span>發表日期</span></label>
                                    <v-field
                                        id="create_at" type="date"
                                        class="form-control" v-model="createAt"
                                        name="create_at" rules="required"></v-field>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="tab === 'category'">
                    <div class="mb-3">
                        <label class="form-label is-required" for="category">
                        <span>文章分類</span></label>
                        <v-field
                            id="category" type="text" class="form-control"
                            v-model.trim="category"
                            name="category" rules="required"></v-field>
                    </div>
                    <div class="mb-3">
                        <p>標籤</p>
                        <div class="row g-3 mb-3">
                            <div class="col-md-3 position-relative"
                                 v-for="(tag, index) in article.tag" :key="tag">
                            <input type="text"
                                   class="form-control"
                                   v-model="article.tag[index]">
                            <button type="button" class="btn btn-origin btn-inline"
                                    @click="article.tag.splice(index, 1)">
                            <i class="bi bi-x-lg"></i></button>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary"
                                @click="article.tag.push('')">
                        新增標籤</button>
                    </div>
                </div>
                <div v-show="tab === 'image'">
                    <div class="mb-3">
                        <label class="form-label is-required" for="image">文章圖片</label>
                        <v-field
                            id="image" type="text"
                            class="form-control" v-model.trim="article.image"
                            name="image" rules="required|url"></v-field>
                        <img class="mt-3"
                             :src="article.image" :alt="article.title" v-if="article.image">
                    </div>
                    <hr>
                    <upload-form
                        :use-clipboard="false" :upload-state="uploadState" :disabled="article.image"
                        @add-new-image="addNewImage"
                        @update-upload-state="updateUploadState" />
                </div>
                <hr>
                <p class="is-required">文章內容</p>
                <ckeditor :editor="editor" :config="editorConfig" v-model="article.content" />
            </div>
            <div class="modal-footer justify-content-between align-items-center">
                <div class="form-check">
                <input id="isPublic" type="checkbox" class="form-check-input"
                        v-model="article.isPublic">
                <label class="form-label" for="isPublic">
                是否公開</label>
                </div>
                <div>
                <button type="submit" class="btn btn-primary me-2"
                        :disabled="!meta.valid">確認更新</button>
                <button type="button" class="btn btn-outline-secondary"
                        @click="hideModal">取消</button>
                </div>
            </div>
            </v-form>
        </div>
    </div>
</div>

</template>

<style lang="scss" scoped>

.btn-inline {

    top: .45rem; right: 1.25rem;

}

</style>

<script>

import ckeditor from '@ckeditor/ckeditor5-vue';

import modalMixins from '@/mixins/modal';

import ckeditorMixins from '@/mixins/ckeditor';

import calculatorMixins from '@/mixins/calculator';

//

import { mapActions } from 'pinia';

import adminArticleStore from '@/stores/adminArticle';

//

import UploadForm from '../UploadForm.vue';

//

export default {

    mixins: [modalMixins, ckeditorMixins, calculatorMixins],

    components: { ckeditor: ckeditor.component, UploadForm },

    props: ['tempArticle'],

    data() {

        return {

            tab: 'setting',

            article: { },

            category: '',

            uploadState: false,

        };

    },

    computed: {

        createAt: {

            get() { return this.formatDate(this.article.create_at * 1000); },

            set(date) {

                this.article.create_at = new Date(date).getTime() / 1000;

            },

        },

    },

    methods: {

        ...mapActions(adminArticleStore, ['createArticle', 'updateArticle']),

        updateData() {

            this.article = this.tempArticle;

            if (Array.isArray(this.tempArticle.tag)) {

                const [category, ...tags] = this.tempArticle.tag;
                this.category = category;
                this.article.tag = tags;

            } else {

                this.category = '';
                this.article.tag = [];

            }

        },

        confirmUpdate() {

            this.article.tag = this.article.tag.filter((i) => i);

            this.article.tag.unshift(this.category);

            // console.log(this.article.tag);

            if (this.article.id) {

                this.updateArticle(this.article, this.hideModal);

            } else { this.createArticle(this.article, this.hideModal); }

        },

        addNewImage(url) { this.article.image = url; },

        updateUploadState(state) { this.uploadState = state; },

    },

    watch: {

        tempArticle() { this.updateData(); },

    },

    mounted() { this.updateData(); },

};

</script>
