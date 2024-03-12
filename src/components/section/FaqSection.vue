<template>

<section class="bg-primary text-white py-7">
    <div class="container">
        <div class="row gy-5">
            <div class="col-md-4">
                <div class="h-100 d-flex align-items-center">
                    <h3 class="fw-bold mb-0">常見問答｜
                        <span class="fs-5 text-light">Q & A</span>
                    </h3>
                </div>
            </div>
            <div class="col-md-8">
                <div class="accordion mb-5" id="faq">
                    <template v-for="q in featuredQuestions" :key="q.id">
                    <div class="accordion-item">
                        <div class="accordion-header">
                            <button type="button" class="bg-light accordion-button collapsed"
                                    data-bs-toggle="collapse" :data-bs-target="`#faq${q.id}`"
                                    aria-expanded="false" :aria-controls="`#faq-${q.id}`">
                            <i class="d-none d-md-block
                                      fs-7 text-highlight bi bi-asterisk me-3"></i>
                            <b>{{ q.question }}</b>
                            </button>
                        </div>
                        <div class="accordion-collapse collapse" :id="`faq${q.id}`"
                             data-bs-parent="#faq" aria-expanded="false">
                        <div class="accordion-body">
                            <p class="mb-0 lh-lg" v-html="q.answer"></p>
                        </div>
                        </div>
                    </div>
                    </template>
                </div>
                <div class="text-end">
                    <router-link class="text-decoration-none"
                                 :to="{ path: '/about', hash: '#faq' }">
                        <span class="arrow-animation">
                            <span class="arrow">
                            <i class="bi bi-caret-right-fill"></i>
                            </span>
                        </span>
                        <span>READ MORE</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</section>

</template>

<script>

import faqMixins from '@/mixins/faq';

//

export default {

    props: {

        types: { default: [] },

    },

    mixins: [faqMixins],

};

</script>
