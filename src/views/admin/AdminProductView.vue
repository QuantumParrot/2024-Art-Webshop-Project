<template>

<div class="text-end mb-7">
<h3 class="fs-2 mb-2">商品管理</h3>
<p class="fs-6 text-muted">
<span>目前共有 {{ products.length }} 項商品，</span>
<span>{{ products.filter((i) => i.is_enabled).length }} 項上架中</span></p>
</div>

<div class="row justify-content-between gx-3 gy-3 gy-md-0 mb-4">
    <div class="col-md-4">
        <div class="h-100 alert bg-light flex-classic mb-0">
            <button type="button" class="w-100 btn btn-primary me-3" @click="openModal()">
            <i class="bi bi-plus-lg me-1"></i>
            新增商品</button>
            <button type="button" class="w-100 btn btn-primary"
                    @click="$refs.uploadModal.showModal">
            <i class="bi bi-upload me-1"></i>
            上傳圖片</button>
        </div>
    </div>
    <div class="col-md-8">
        <div class="h-100 alert bg-light d-flex justify-content-end mb-0">
            <pagination-component
                :total="totalPages" :current="currentPage"
                @switch-page="switchPage" />
        </div>
    </div>
</div>

<div class="d-flex justify-content-end mb-4">
    <div>
        <select class="form-select" :value="filter" @change="(e) => switchFilter(e.target.value)">
            <template v-for="category in categories" :key="category">
            <option :value="category">{{ category }}</option>
            </template>
        </select>
    </div>
</div>

<div class="table-responsive" v-if="products.length">
    <table class="table table-hover text-nowrap">
        <thead>
            <tr>
            <th scope="col" width="10%" class="d-none d-md-table-cell">分類</th>
            <th scope="col" width="45%">名稱</th>
            <th scope="col" width="10%" class="text-end">原價</th>
            <th scope="col" width="10%" class="text-end">售價</th>
            <th scope="col" width="10%" class="text-center">狀態</th>
            <th scope="col" width="15%" class="text-center">管理</th>
            </tr>
        </thead>
        <tbody class="align-middle">
            <template v-for="product in displaying" :key="product.id">
                <tr>
                    <td class="d-none d-md-table-cell">
                    <span class="badge bg-highlight text-dark py-2">{{ product.category }}</span>
                    </td>
                    <td>{{ product.title }}</td>
                    <td class="text-end">$ {{ product.origin_price }}</td>
                    <td class="text-end">$ {{ product.price }}</td>
                    <td class="text-center">
                        <div class="form-switch">
                            <input type="checkbox" role="switch" class="form-check-input"
                                   :checked="product.is_enabled"
                                   @change="switchProductStatus(product)">
                        </div>
                    </td>
                    <td class="text-center">
                        <div class="d-flex flex-column gap-2">
                            <button type="button" class="btn btn-outline-secondary"
                                    @click="openModal(product, 'update')">
                            編輯</button>
                            <button type="button" class="btn btn-outline-danger"
                                    @click="openModal(product, 'delete')">
                            刪除</button>
                        </div>
                    </td>
                </tr>
            </template>
        </tbody>
    </table>
</div>

<div class="alert bg-light" v-else>還沒有任何商品！趕快建立一個吧！</div>

<upload-modal ref="uploadModal" />

<admin-product-modal ref="productModal" :temp-product="tempProduct" />

<delete-modal ref="deleteModal"
              @delete-target="deleteProduct(tempProduct.id, this.$refs.deleteModal.hideModal)">
    <template #title>確定刪除商品？</template>
    <template #alert>這個操作無法復原喔！你要確定欸！(ﾟдﾟ≡ﾟдﾟ)</template>
    <template #itemDetail>
        <img class="img-zoom-out mb-4" :src="tempProduct.imageUrl" :alt="tempProduct.title">
    </template>
</delete-modal>

</template>

<script>

import { mapState, mapActions } from 'pinia';

import adminProductStore from '@/stores/adminProduct';

//

import PaginationComponent from '@/components/PaginationComponent.vue';

import AdminProductModal from '@/components/modal/AdminProductModal.vue';

import UploadModal from '@/components/modal/UploadModal.vue';

import DeleteModal from '@/components/modal/DeleteModal.vue';

//

export default {

    components: {

        PaginationComponent,
        AdminProductModal,
        UploadModal,
        DeleteModal,

    },

    data() {

        return {

            tempProduct: {},

        };

    },

    computed: {

        ...mapState(adminProductStore, ['products', 'productsList', 'categories', 'filter', 'displaying', 'currentPage', 'totalPages']),

    },

    methods: {

        ...mapActions(adminProductStore, ['switchPage', 'switchFilter', 'getProducts', 'switchProductStatus', 'deleteProduct']),

        openModal(item, type) {

            // 因為我將新增商品的事件觸發寫成 @click="openModal()" 此時 item 為空值，所以做如下判斷

            // 如果是寫成 @click="openModal" 因為不帶入任何參數所以 item 會是 event 物件，就沒辦法做下面這段判斷

            // 雖然判斷條件改成 item.id 似乎也行，但是畢竟 item 是有東西的，感覺很怪 (?)

            this.tempProduct = item ? { ...item } : { is_enabled: false };

            if (type === 'delete') {

                this.$refs.deleteModal.showModal();

            } else { this.$refs.productModal.showModal(); }

        },

    },

    created() { this.getProducts(); },

};

</script>
