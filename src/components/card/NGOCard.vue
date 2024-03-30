<template>

<div class="d-flex flex-column h-100 bg-light rounded-2 shadow-sm">
    <div class="w-100 d-flex justify-content-center py-5">
        <div class="card-img rounded-circle shadow-sm overflow-hidden">
            <img class="object-fit-cover h-100" :src="org.image" :alt="org.title">
        </div>
    </div>
    <h5 class="text-center text-highlight mb-5">
    <b>{{ org.title }}</b>
    </h5>
    <div class="flex-grow-1 px-5 pb-5">
        <div class="h-100 d-flex flex-column justify-content-between">
            <p class="flex-grow-1 text-justify lh-lg mb-5">{{ org.description }}</p>
            <a class="btn-primary btn-slider" target="_blank" :href="org.link">
            <i class="bi bi-box-arrow-up-right me-2"></i>
            認識他們</a>
        </div>
    </div>
</div>

</template>

<script>

export default { props: ['org'] };

</script>

<style lang="scss" scoped>

@import '@/assets/_variables.scss';

.btn-slider {

  &::after { background-color: $secondary };

}

.card-img { width: 100px; height: 100px; }

</style>
