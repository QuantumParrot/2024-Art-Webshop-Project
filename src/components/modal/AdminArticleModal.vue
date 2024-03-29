<template>

<div class="modal modal-lg fade" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
        <loading-overlay :is-loading="uploadState" :is-full="false" />
        <div class="modal-content">
            <div class="modal-header flex-classic">
                <h4 class="mb-0">{{ type }}</h4>
                <button type="button" class="btn border-0 p-0 fs-4"
                        @click="hideModal">
                <i class="bi bi-x-circle-fill"></i>
                </button>
            </div>
            <v-form v-slot="{ meta }" @submit="confirmUpdate" ref="form">
            <div class="modal-body">
                <ul class="nav nav-pills bg-gray rounded-2 mb-3">
                    <li class="nav-item flex-grow-1">
                    <button type="button" @click="tab = 'setting'"
                            class="w-100 nav-link" :class="{ 'active': tab === 'setting' }">
                    設定</button>
                    </li>
                    <li class="nav-item flex-grow-1">
                    <button type="button" @click="tab = 'category'"
                            class="w-100 nav-link" :class="{ 'active': tab === 'category' }">
                    分類</button>
                    </li>
                    <li class="nav-item flex-grow-1">
                    <button type="button" @click="tab = 'image'"
                            class="w-100 nav-link" :class="{ 'active': tab === 'image' }">
                    圖片</button>
                    </li>
                </ul>
                <div v-show="tab === 'setting'">
                    <div class="mb-5">
                        <label class="form-label is-required" for="title">
                            <span>{{ type === '公益計劃' ? '組織名稱' : '標題' }}</span>
                        </label>
                        <v-field
                            id="title" type="text"
                            class="form-control" v-model.trim="article.title"
                            name="title" rules="required"></v-field>
                    </div>
                    <div class="mb-5">
                        <div class="row row-cols-2">
                            <div class="col">
                                <label class="form-label is-required" for="author">
                                    <span>{{ type === '公益計劃' ? '完整法人名稱' : '作者' }}</span>
                                </label>
                                <v-field
                                    id="author" type="text"
                                    class="form-control" v-model.trim="article.author"
                                    name="author" rules="required"></v-field>
                            </div>
                            <div class="col">
                                <label class="form-label is-required" for="create_at">
                                <span>發表日期</span></label>
                                <v-field
                                    id="create_at" type="date"
                                    class="form-control" v-model="createAt"
                                    name="create_at" rules="required"></v-field>
                            </div>
                        </div>
                    </div>
                    <div class="mb-5" v-if="type === '公益計劃'">
                        <label for="link" class="form-label is-required">網站連結</label>
                        <v-field
                            id="link" type="text" class="form-control"
                            v-model.trim="article.link" name="link" rules="required|url"
                            placeholder="請提供該組織的官方連結，讓使用者可以透過連結拜訪"></v-field>
                    </div>
                    <div class="mb-5" v-if="type !== '網站公告'">
                        <label for="description" class="form-label is-required">摘要</label>
                        <v-field
                            id="title" rows="3" class="form-control"
                            v-model.trim="article.description"
                            name="description" as="textarea"></v-field>
                    </div>
                    <div class="form-check" v-if="type === '專欄文章'">
                        <input type="checkbox" id="recommend" class="form-check-input"
                               v-model="article.recommend">
                        <label for="recommend" class="form-label">是否需要推薦商品</label>
                        <p class="fs-7 text-muted">建議：新聞專欄不需要推薦商品喔！</p>
                    </div>
                </div>
                <div v-show="tab === 'category'">
                    <div :class="{ 'mb-5': type !== '公益計劃' }">
                        <label for="category" class="form-label is-required">
                        <span>分類</span></label>
                        <v-field
                            id="category" class="form-control" list="categories"
                            v-model.trim="article.category" name="category"
                            rules="required"></v-field>
                        <datalist id="categories">
                            <template v-for="category in categories[type]" :key="category">
                            <option :value="category">{{ category }}</option>
                            </template>
                        </datalist>
                    </div>
                    <div class="mb-5" v-show="type === '專欄文章'">
                        <p>標籤</p>
                        <p class="fs-7 text-muted">選擇和商品一致的標籤，就能向客戶推薦相關商品喔！</p>
                        <div class="row gy-3 mb-3">
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
                    <div class="mb-5">
                        <label class="form-label is-required" for="image">圖片</label>
                        <v-field
                            id="image" type="text"
                            class="form-control" v-model.trim="article.image"
                            name="image" rules="required|url"></v-field>
                        <template v-if="article.image">
                        <a target="_blank" :href="article.image">
                        <img class="object-fit-cover mt-3" max-height="250"
                             :src="article.image" :alt="article.title">
                        </a>
                        </template>
                    </div>
                    <hr>
                    <upload-form
                        :use-clipboard="false" :upload-state="uploadState" :disabled="article.image"
                        @add-new-image="addNewImage"
                        @update-upload-state="updateUploadState" />
                </div>
                <template v-if="type !== '公益計劃'">
                <hr>
                <p class="is-required">詳細內容</p>
                <ckeditor :editor="editor" :config="editorConfig" v-model.trim="article.content" />
                </template>
            </div>
            <div class="modal-footer justify-content-between align-items-center">
                <div class="form-check">
                <input id="isPublic" type="checkbox" class="form-check-input"
                       v-model="article.isPublic">
                <label class="form-label mb-0" for="isPublic">
                是否公開</label>
                </div>
                <div>
                <button type="submit"
                        class="btn btn-primary me-2"
                        :disabled="!meta.valid || !article.content">確認更新</button>
                <button type="button" class="btn btn-outline-secondary"
                        @click="hideModal">取消</button>
                </div>
            </div>
            </v-form>
        </div>
    </div>
</div>

</template>

<script>

import ckeditor from '@ckeditor/ckeditor5-vue';

import modalMixins from '@/mixins/modal';

import ckeditorMixins from '@/mixins/ckeditor';

//

import { mapState, mapActions } from 'pinia';

import adminArticleStore from '@/stores/adminArticle';

//

import UploadForm from '../UploadForm.vue';

//

export default {

    mixins: [modalMixins, ckeditorMixins],

    components: { ckeditor: ckeditor.component, UploadForm },

    props: ['type', 'tempArticle'],

    data() {

        return {

            tab: 'setting',

            article: {},

            uploadState: false,

        };

    },

    computed: {

        ...mapState(adminArticleStore, ['categories']),

        createAt: {

            get() { return this.$calc.formatDate(this.article.create_at * 1000); },

            set(date) {

                this.article.create_at = new Date(date).getTime() / 1000;

            },

        },

    },

    methods: {

        ...mapActions(adminArticleStore, ['createArticle', 'updateArticle']),

        updateData() {

            this.article = this.tempArticle;

            this.article.tag = Array.isArray(this.tempArticle.tag) ? this.tempArticle.tag : [];

            if (this.type === '網站公告') { this.article.author = '收藏家工作室'; }

        },

        confirmUpdate() {

            if (this.type === '公益計劃') { this.article.content = '無'; }

            if (this.type === '網站公告') { this.article.description = '無'; }

            this.article.tag = this.article.tag.filter((i) => i);

            this.article.type = this.type;

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
