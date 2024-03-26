<template>

<ul class="nav nav-pills bg-gray rounded-2 mb-7">
    <li class="nav-item flex-grow-1">
        <button
            type="button" @click="tab = 'setting'"
            class="w-100 nav-link" :class="{ 'active': tab === 'setting' }">
        設定</button>
    </li>
    <li class="nav-item flex-grow-1">
        <button
            type="button" @click="tab = 'category'"
            class="w-100 nav-link" :class="{ 'active': tab === 'category' }">
        分類</button>
    </li>
    <li class="nav-item flex-grow-1">
        <button
            type="button" @click="tab = 'image'"
            class="w-100 nav-link" :class="{ 'active': tab === 'image' }">
        圖片</button>
    </li>
</ul>

<VForm v-slot="{ meta }" @submit="confirmUpdate" ref="form">
    <div class="d-flex align-items-end gap-2 mb-7">
        <h4 class="mb-0"><b>{{ article.id ? '編輯' : '新增' }}{{ type }}</b></h4>/
        <RouterLink to="/admin/article" class="text-info">回文章管理列表</RouterLink>
    </div>
    <div v-show="tab === 'setting'">
        <div class="mb-5">
            <label class="form-label is-required" for="title">
                <span>{{ type === '公益計劃' ? '組織名稱' : '標題' }}</span>
            </label>
            <VField
                id="title" type="text"
                class="form-control" v-model.trim="article.title"
                name="title" rules="required">
            </VField>
        </div>
        <div class="mb-5">
            <div class="row row-cols-2">
                <div class="col">
                    <label class="form-label is-required" for="author">
                        <span>{{ type === '公益計劃' ? '完整法人名稱' : '作者' }}</span>
                    </label>
                    <VField
                        id="author" type="text"
                        class="form-control" v-model.trim="article.author"
                        name="author" rules="required">
                    </VField>
                </div>
                <div class="col">
                    <label class="form-label is-required" for="create_at">
                    <span>發表日期</span></label>
                    <VField
                        id="create_at" type="date"
                        class="form-control" v-model="createAt"
                        name="create_at" rules="required">
                    </VField>
                </div>
            </div>
        </div>
        <div class="mb-5" v-if="type === '公益計劃'">
            <label for="link" class="form-label is-required">網站連結</label>
            <VField
                id="link" type="text" class="form-control"
                v-model.trim="article.link" name="link" rules="required|url"
                placeholder="請提供該組織的官方連結，讓使用者可以透過連結拜訪">
            </VField>
        </div>
        <div class="mb-5" v-if="type !== '網站公告'">
            <label for="description" class="form-label is-required">摘要</label>
            <VField
                id="title" rows="4" class="form-control"
                v-model.trim="article.description"
                name="description" as="textarea">
            </VField>
        </div>
        <div class="form-check mb-5" v-if="type === '專欄文章'">
            <input
                type="checkbox" id="recommend" class="form-check-input"
                v-model="article.recommend">
            <label for="recommend" class="form-label">是否需要推薦商品</label>
            <p class="fs-7 text-muted">建議：新聞專欄不需要推薦商品喔！</p>
        </div>
    </div>
    <div v-show="tab === 'category'">
        <div class="mb-5">
            <label for="category" class="form-label is-required">
                <span>分類</span>
            </label>
            <VField
                id="category" class="form-control" list="categories"
                v-model.trim="article.category" name="category"
                rules="required">
            </VField>
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
                <div
                    class="col-md-3 position-relative"
                    v-for="(tag, index) in article.tag" :key="tag">
                    <input
                        type="text" class="form-control"
                        v-model="article.tag[index]">
                    <button
                        type="button" class="btn btn-origin btn-inline"
                        @click="article.tag.splice(index, 1)">
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>
            </div>
            <button
                type="button" class="btn btn-primary"
                @click="article.tag.push('')">
            新增標籤</button>
        </div>
    </div>
    <div v-show="tab === 'image'">
        <div class="mb-5">
            <label class="form-label is-required" for="image">圖片</label>
            <VField
                id="image" type="text"
                class="form-control" v-model.trim="article.image"
                name="image" rules="required|url">
            </VField>
            <template v-if="article.image">
            <a target="_blank" :href="article.image">
                <img
                    class="object-fit-cover mt-3" max-height="250"
                    :src="article.image" :alt="article.title">
            </a>
            </template>
        </div>
        <hr>
        <UploadForm
            :use-clipboard="false"
            :upload-state="uploadState"
            :disabled="article.image"
            @add-new-image="addNewImage"
            @update-upload-state="updateUploadState" />
    </div>
    <template v-if="type !== '公益計劃'">
    <hr>
    <p class="is-required">詳細內容</p>
    <ckeditor :editor="editor" :config="editorConfig" v-model.trim="article.content" />
    </template>
    <hr>
    <div class="alert bg-light flex-classic mt-5 mb-0">
        <div class="form-check">
            <input
                id="isPublic" type="checkbox" class="form-check-input"
                v-model="article.isPublic">
            <label class="form-label mb-0" for="isPublic">是否公開</label>
        </div>
        <button
            type="submit" class="btn btn-primary"
            :disabled="!meta.valid">確認更新
        </button>
    </div>
</VForm>

</template>

<script>

import ckeditor from '@ckeditor/ckeditor5-vue';

import ckeditorMixins from '@/mixins/ckeditor';

//

import { mapState, mapActions } from 'pinia';

import adminArticleStore from '@/stores/adminArticle';

import loaderStore from '@/stores/loader';

import alertStore from '@/stores/alert';

//

import UploadForm from '@/components/UploadForm.vue';

//

const { VITE_APP_SITE, VITE_APP_PATH } = import.meta.env;

//

export default {

    mixins: [ckeditorMixins],

    components: { ckeditor: ckeditor.component, UploadForm },

    data() {

        return {

            tab: 'setting',

            article: {},
            type: '',

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

        ...mapActions(loaderStore, ['createLoader', 'removeLoader']),

        ...mapActions(alertStore, ['errorAlert']),

        getArticle(id) {

            this.createLoader('get-single-article');
            this.$http.get(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/admin/article/${id}`)
                .then((res) => {

                    const { article } = res.data;

                    this.article = article;
                    this.type = article.type;

                })
                .catch((error) => this.errorAlert(error))
                .finally(() => this.removeLoader('get-single-article'));

        },

        updateData() {

            this.article.tag = Array.isArray(this.article.tag) ? [...this.article.tag] : [];

            if (this.type === '網站公告') { this.article.author = '收藏家工作室'; }

        },

        confirmUpdate() {

            if (this.type === '公益計劃') { this.article.content = '無'; }

            if (this.type === '網站公告') { this.article.description = '無'; }

            this.article.tag = this.article.tag.filter((i) => i);

            this.article.type = this.type;

            if (this.article.id) {

                this.updateArticle(this.article);

            } else { this.createArticle(this.article); }

        },

        addNewImage(url) { this.article.image = url; },

        updateUploadState(state) { this.uploadState = state; },

    },

    watch: {

        article() { this.updateData(); },

    },

    mounted() {

        this.type = this.$route.params.type;

        if (this.$route.query.id) {

            this.getArticle(this.$route.query.id);

        } else { this.article = { isPublic: false, create_at: this.$calc.now() }; }

    },

};

</script>
