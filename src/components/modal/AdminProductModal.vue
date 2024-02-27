<template>

<div class="modal modal-lg fade" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
        <loading-overlay :is-loading="uploadState" :is-full="false" />
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="mb-0">{{ title ? title : '新增商品' }}</h4>
                <button type="button"
                        class="btn border-0 p-0 fs-4"
                        @click="hideModal">
                <i class="bi bi-x-circle-fill"></i>
                </button>
            </div>
            <v-form v-slot="{ meta }" @submit="confirmUpdate" ref="form">
            <div class="modal-body">
                <div class="alert bg-light">
                    <p>欄位完成度（ <span class="text-danger">*</span> 為必填欄位 ）</p>
                    <div class="row fw-bold">
                        <div class="col">
                            <i class="bi me-2" :class="product.title ?
                               'bi-check-square text-success' : 'bi-square'"></i>
                            <span>名稱</span>
                        </div>
                        <div class="col">
                            <i class="bi me-2" :class="product.subtitle ?
                               'bi-check-square text-success' : 'bi-square'"></i>
                            <span>別名</span>
                        </div>
                        <div class="col">
                            <i class="bi me-2" :class="product.content ?
                               'bi-check-square text-success' : 'bi-square'"></i>
                            <span>規格</span>
                        </div>
                        <div class="col">
                            <i class="bi me-2" :class="product.category ?
                               'bi-check-square text-success' : 'bi-square'"></i>
                            <span>分類</span>
                        </div>
                        <div class="col">
                            <i class="bi me-2" :class="product.unit ?
                               'bi-check-square text-success' : 'bi-square'"></i>
                            <span>單位</span>
                        </div>
                        <div class="col">
                            <i class="bi me-2" :class="product.description ?
                               'bi-check-square text-success' : 'bi-square'"></i>
                            <span>介紹</span>
                        </div>
                        <div class="col">
                            <i class="bi me-2" :class="product.origin_price ?
                               'bi-check-square text-success' : 'bi-square'"></i>
                            <span>原價</span>
                        </div>
                        <div class="col">
                            <i class="bi me-2" :class="product.price ?
                               'bi-check-square text-success' : 'bi-square'"></i>
                            <span>售價</span>
                        </div>
                        <div class="col">
                            <i class="bi me-2" :class="product.imageUrl ?
                               'bi-check-square text-success' : 'bi-square'"></i>
                            <span>主圖</span>
                        </div>
                    </div>
                </div>
                <ul class="nav nav-pills
                           flex-nowrap text-nowrap overflow-x-scroll bg-light rounded-2 mb-3">
                    <li class="nav-item flex-grow-1">
                    <button type="button" @click="tab = 'content'"
                            class="w-100 nav-link" :class="{ 'active': tab === 'content' }">
                    商品內容</button>
                    </li>
                    <li class="nav-item flex-grow-1">
                    <button type="button" @click="tab = 'description'"
                            class="w-100 nav-link" :class="{ 'active': tab === 'description' }">
                    商品介紹</button>
                    </li>
                    <li class="nav-item flex-grow-1">
                    <button type="button" @click="tab = 'price'"
                            class="w-100 nav-link" :class="{ 'active': tab === 'price' }">
                    商品售價</button>
                    </li>
                    <li class="nav-item flex-grow-1">
                    <button type="button" @click="tab = 'tags'"
                            class="w-100 nav-link" :class="{ 'active': tab === 'tags' }">
                    商品標籤</button>
                    </li>
                    <li class="nav-item flex-grow-1">
                    <button type="button" @click="tab = 'image'"
                            class="w-100 nav-link" :class="{ 'active': tab === 'image' }">
                    商品圖片</button>
                    </li>
                </ul>
                <div class="alert border rounded-2">
                    <div v-show="tab === 'content'">
                        <div class="mb-3">
                        <label class="form-label is-required" for="title">商品名稱</label>
                        <v-field
                            type="text" id="title"
                            class="form-control" v-model.trim="product.title"
                            name="title" rules="required"></v-field>
                        </div>
                        <div class="mb-3">
                        <label class="form-label is-required" for="subtitle">商品別名</label>
                        <v-field
                            type="text" id="subtitle"
                            class="form-control" v-model.trim="product.subtitle"
                            name="subtitle" rules="required"></v-field>
                        </div>
                        <div class="mb-3">
                        <label class="form-label is-required" for="content">商品規格</label>
                        <v-field
                            type="text" id="content"
                            class="form-control" v-model.trim="product.content"
                            name="content" rules="required"></v-field>
                        </div>
                        <div class="row row-cols-2">
                            <div class="col">
                                <label class="form-label is-required" for="category">商品分類</label>
                                <v-field
                                    type="text" id="category"
                                    class="form-control" v-model.trim="product.category"
                                    name="category" rules="required"></v-field>
                            </div>
                            <div class="col">
                                <label class="form-label is-required" for="unit">商品單位</label>
                                <v-field
                                    type="text" id="unit"
                                    class="form-control" v-model.trim="product.unit"
                                    name="unit" rules="required"></v-field>
                            </div>
                        </div>
                    </div>
                    <div v-show="tab === 'description'">
                        <div>
                        <label class="form-label is-required" for="description">商品介紹</label>
                        <v-field
                            id="description" rows="10" class="form-control text-justify"
                            v-model.trim="product.description"
                            name="description" rules="required" as="textarea"></v-field>
                        </div>
                    </div>
                    <div v-show="tab === 'price'">
                        <div class="mb-3">
                            <div class="flex-classic mb-2">
                                <label class="is-required" for="origin_price">商品原價</label>
                                <span class="fs-7 text-danger">
                                必須是大於零的整數</span>
                            </div>
                            <v-field
                                id="origin_price" type="number" min="1" class="form-control"
                                v-model.number="product.origin_price"
                                name="origin_price" rules="required|integer|min_value:1"></v-field>
                        </div>
                        <div class="mb-3">
                            <div class="flex-classic mb-2">
                                <label class="is-required" for="price">商品售價</label>
                                <span class="fs-7 text-danger">
                                必須是大於零的整數</span>
                            </div>
                            <v-field
                                id="price" type="number" min="1" class="form-control"
                                v-model.number="product.price"
                                name="price" rules="required|integer|min_value:1"></v-field>
                        </div>
                    </div>
                    <div v-show="tab === 'tags'">
                        <div>
                        <p>商品標籤</p>
                        <div class="d-flex gap-2 flex-wrap mb-3">
                            <button type="button" v-for="tag in tagsList" :key="tag"
                                    class="btn btn-origin" @click="product.tags.push(tag)">
                            <span class="badge p-2 bg-subtle text-primary fs-6">{{ tag }}</span>
                            </button>
                        </div>
                        <div class="row g-3 mb-3">
                            <div class="col-md-3 position-relative"
                                 v-for="(tag, index) in product.tags" :key="tag">
                            <input type="text"
                                   class="form-control"
                                   v-model="product.tags[index]">
                            <button type="button" class="btn btn-origin btn-inline"
                                    @click="product.tags.splice(index, 1)">
                            <i class="bi bi-x-lg"></i></button>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary"
                                @click="product.tags.push('')">
                        新增標籤</button>
                        </div>
                    </div>
                    <div v-show="tab === 'image'">
                        <div class="mb-3">
                        <h5 class="fw-bold mb-3">圖片設定</h5>
                        <label class="form-label is-required" for="imageUrl">主圖網址</label>
                        <v-field
                            id="imageUrl" type="text" class="form-control mb-3"
                            v-model.trim="product.imageUrl"
                            name="imageUrl" rules="required|url"></v-field>
                        <img :src="product.imageUrl" :alt="product.title" v-if="product.imageUrl">
                        </div>
                        <div class="mb-3" v-if="product.imagesUrl.length">
                            <p>副圖網址</p>
                            <div class="row g-3">
                            <template v-for="(img, idx) in product.imagesUrl" :key="img">
                                <div class="col-md-6 position-relative">
                                    <input type="text" class="form-control pe-5"
                                           v-model.trim="product.imagesUrl[idx]">
                                    <button type="button" class="btn btn-origin btn-inline"
                                            @click="product.imagesUrl.splice(idx, 1)">
                                    <i class="bi bi-x-lg"></i>
                                    </button>
                                    <img class="mt-3" :src="img" :alt="product.title" v-if="img">
                                </div>
                            </template>
                            </div>
                        </div>
                        <button type="button"
                                class="btn btn-primary"
                                @click="product.imagesUrl.push('')"
                                :disabled="product.imagesUrl.length > 4">
                        新增圖片</button>
                    </div>
                </div>
                <div class="p-3 border rounded-2 mt-3" v-show="tab === 'image'">
                    <h5 class="fw-bold mb-3">上傳圖片</h5>
                    <upload-form
                        v-if="product.imagesUrl.length < 5"
                        :use-clipboard="false" :upload-state="uploadState"
                        @add-new-image="addNewImage" @update-upload-state="updateState" />
                </div>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-primary" :disabled="!meta.valid">確認更新</button>
                <button type="button" class="btn btn-outline-secondary"
                        @click="hideModal">取消</button>
            </div>
            </v-form>
        </div>
    </div>
</div>

</template>

<style lang="scss" scoped>

.btn-inline { top: .45rem; right: 1.25rem; }

</style>

<script>

import modalMixns from '@/mixins/modal';

//

import { mapState, mapActions } from 'pinia';

import adminProductStore from '@/stores/adminProduct';

import alertStore from '@/stores/alert';

//

import UploadForm from '../UploadForm.vue';

//

export default {

    components: { UploadForm },

    mixins: [modalMixns],

    props: ['tempProduct'],

    data() {

        return {
            modal: '',
            title: '',
            tab: 'content',
            product: { imagesUrl: [], tags: [] }, // 為了避免跳錯而事先定義 ( 也可以用可選串連 )
            uploadState: false,
        };

    },

    computed: { ...mapState(adminProductStore, ['tagsList']) },

    watch: { tempProduct() { this.updateData(); } },

    methods: {

        ...mapActions(adminProductStore, ['createProduct', 'updateProduct']),

        ...mapActions(alertStore, ['toastAlert']),

        updateData() {

            this.product = this.tempProduct;
            this.title = this.tempProduct.title;

            const { imagesUrl, tags } = this.tempProduct;
            this.product.imagesUrl = Array.isArray(imagesUrl) ? [...imagesUrl] : [];
            this.product.tags = Array.isArray(tags) ? [...tags] : [];

            this.tab = 'content';

        },

        addNewImage(url) {

            // 圖片上傳完成之後，表單元件會立刻觸發 emit 事件，這是用來接收 emit 事件的函式

            // 如果主圖沒有網址，圖片就推到主圖上，反之就推到副圖上

            if (this.product.imageUrl) {

                this.product.imagesUrl.push(url);

            } else {

                this.product.imageUrl = url;

            }

        },

        confirmUpdate() {

            // 刪除 imagesUrl / tags 陣列中的空值

            this.product.imagesUrl = this.product.imagesUrl.filter((i) => i);
            this.product.tags = this.product.tags.filter((i) => i);

            if (this.product.id) {

                this.updateProduct(this.product, this.hideModal);

            } else {

                this.createProduct(this.product, this.hideModal);

            }

        },

        updateState(state) { this.uploadState = state; },

    },

    mounted() { this.updateData(); },

};

</script>
