<template>

<template v-if="carts.length">
    <VForm v-slot="{ errors }" @submit="createOrder">
    <div class="alert bg-white p-lg-7 p-5 shadow-sm mb-5">
        <div class="accordion mb-5" aria-expanded="false">
            <div class="accordion-item overflow-hidden">
                <div class="accordion-header">
                    <button
                        type="button" class="bg-gray accordion-button collapsed"
                        aria-expanded="false" data-bs-toggle="collapse" data-bs-target="#accordion">
                        <b>查看訂單明細</b>
                    </button>
                </div>
                <div class="accordion-collapse collapse" aria-expanded="false" id="accordion">
                    <div class="table-responsive px-lg-7 p-5 pb-0" style="max-height: 300px;">
                        <table class="table table-hover text-nowrap mb-0">
                            <thead>
                                <tr>
                                    <th scope="col" width="40%" class="pb-3">項目</th>
                                    <th scope="col" width="30%" class="text-end pb-3">數量</th>
                                    <th scope="col" width="30%" class="text-end pb-3">小計</th>
                                </tr>
                            </thead>
                            <tbody class="align-middle">
                                <tr v-for="item in carts" :key="item.id">
                                    <td class="py-3">{{ item.product.title }}</td>
                                    <td class="text-end">{{ item.qty }}</td>
                                    <td class="text-end">
                                        <span>{{ item.total }}</span>
                                    </td>
                                </tr>
                                <tr v-if="carts[0].coupon">
                                    <td colspan="2" class="py-3">優惠券：{{ carts[0].coupon.code }}</td>
                                    <td class="text-end text-danger">
                                        <span>－ {{ sum.total - sum.finalTotal }}</span>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot class="sticky-bottom">
                                <tr>
                                    <td colspan="3" class="text-end py-5 border-0">
                                        <div class="flex-classic fs-5">
                                            <span><b>總計</b></span>
                                            <span>NT＄ <b>{{ sum.finalTotal }}</b></span>
                                        </div>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-md-7 p-5 border rounded-1">
            <div class="mb-5">
                <label for="name" class="form-label is-required">收件人姓名</label>
                <VField
                    id="name" type="text" class="form-control mb-3"
                    :class="{ 'is-invalid': errors['name'] }"
                    name="name" rules="required">
                </VField>
                <ErrorMessage name="name" v-slot="{ message }">
                    <p class="invalid-feedback">{{ localize(message, 'name') }}</p>
                </ErrorMessage>
            </div>
            <div class="mb-5">
                <label for="tel" class="form-label is-required">收件人手機</label>
                <VField
                    id="tel" type="tel" class="form-control mb-3"
                    :class="{ 'is-invalid': errors['tel'] }"
                    name="tel" :rules="isPhone">
                </VField>
                <ErrorMessage name="tel" v-slot="{ message }">
                    <p class="invalid-feedback">{{ localize(message, 'tel') }}</p>
                </ErrorMessage>
            </div>
            <div class="mb-5">
                <label for="email" class="form-label is-required">收件人信箱</label>
                <VField
                    id="email" type="email" class="form-control mb-3"
                    :class="{ 'is-invalid': errors['email'] }"
                    name="email" rules="required|email">
                </VField>
                <ErrorMessage name="email" v-slot="{ message }">
                    <p class="invalid-feedback">{{ localize(message, 'email') }}</p>
                </ErrorMessage>
            </div>
            <div class="mb-5">
                <label for="address" class="form-label is-required">收件人地址</label>
                <VField
                    id="address" type="text" class="form-control mb-3"
                    :class="{ 'is-invalid': errors['address'] }"
                    name="address" rules="required">
                </VField>
                <ErrorMessage name="address" v-slot="{ message }">
                    <p class="invalid-feedback">{{ localize(message, 'address') }}</p>
                </ErrorMessage>
            </div>
            <div class="mb-5">
                <label for="project" class="form-label">選擇您想贊助的計劃</label>
                <p class="lh-lg fs-7 fw-bold mb-4">
                    <span>我們會將訂單的部分收益用來贊助公益團體，詳請可參考：</span>
                    <RouterLink class="text-info" target="_blank" to="/about">公益計劃介紹</RouterLink>
                    <span>（  新分頁  ）</span>
                    <br>
                    <span>如果選擇不指定，代表您同意由我們自行分配款項</span>
                </p>
                <VField
                    id="project" name="project" as="select"
                    class="form-select">
                    <option value="" selected>不指定</option>
                    <option value="野生動物救援計畫">野生動物救援計畫</option>
                    <option value="海洋保育計畫">海洋保育計畫</option>
                    <option value="社會關懷計畫">社會關懷計畫</option>
                </VField>
            </div>
            <div>
                <label for="message" class="form-label">備註與留言</label>
                <VField
                    id="message" name="message" rows="5"
                    class="form-control"
                    as="textarea">
                </VField>
            </div>
        </div>
    </div>
    <div class="flex-classic">
        <RouterLink to="/checkout/carts" v-slot="{ navigate }">
            <button
                type="button" class="btn btn-outline-primary rounded-1"
                @click="navigate">
                <span><i class="bi bi-caret-left-fill"></i></span>
                上一步</button>
        </RouterLink>
        <button type="submit" class="btn btn-primary rounded-1">確認並送出</button>
    </div>
    </VForm>
</template>

</template>

<script>

import validationMixins from '@/mixins/validation';

//

import { mapState, mapActions } from 'pinia';

import cartStore from '@/stores/userCart';

import userOrderStore from '@/stores/userOrder';

//

export default {

    mixins: [validationMixins],

    computed: {

        ...mapState(cartStore, ['carts', 'sum']),

    },

    methods: {

        ...mapActions(userOrderStore, ['createOrder']),

    },

};

</script>

<style scoped>

.form-control, .form-select { border-radius: 0.25rem; } /* rounded-1 */

</style>
