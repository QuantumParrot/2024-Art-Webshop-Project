<template>

<div class="bg h-100 d-flex flex-column justify-content-center align-items-center">
    <p class="h1 mb-7">OOPS ...！沒有這個網址！</p>
    <div class="rembrandt mb-7">
    <img src="https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1709020880637.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RlRKLG%2F06bJtMDwvCxBpB91tS1DE5Gg9%2FLyUu9irrnJGRlK9SlrSgoIs6Oya6JEbIH9sJ0yGJbBL97DODf7ZdQ3VZ5F9iOf%2FGZyq7qvQFQFh6%2F3ut8fF4Cy9w31eMyf5jdZb8oocqwCqjlHDar9NKEUzQ7Jlib%2Bpc2%2Bhvi664V%2BJROJYj0SRdU1hzY0KAaEER8mzg7NHXOygcT2UPFsz0NcRfJvfPWa15gDbrydAUqszV35m0IYGqtqb%2BqFxHYBttT1NbiKvoM946eHhLpsh6X56FTX19P9diAo6G3Up2DUmKzf3O2vy7iy2tKkC2cbAt7JMVWUJMJ1%2FiDnaBDgMzA%3D%3D" alt="Rembrandt's Portrait">
        <div class="img-description d-flex justify-content-center fs-7">
            <div>
            這是林布蘭於 1630 年繪製的自畫像，畫中的他雙眼大張，表情逗趣<br>
            令人欽佩的是，這幅畫的原尺寸只有 5.1 cm × 4.5 cm 左右<br>
            他在比郵票還小的紙張上描繪出如此生動的圖畫
            </div>
        </div>
    </div>
    <p>請稍候，即將跳轉回上一頁，或是您也可以點選<a href="#" class="text-info" @click.prevent="go">連結</a></p>
</div>

</template>

<style lang="scss" scoped>

@import '@/assets/_variables.scss';

.bg {

    max-height: 100%;
    background-color: $primary;
    color: white;

}

.rembrandt { position: relative; };

.img-description {

    width: 100%;
    position: absolute;
    left: 0; bottom: 0;
    z-index: 10;
    padding: 1rem 0;
    &::after {
        content: '';
        width: 100%; height: 100%;
        background-color: $secondary;
        opacity: 0.5;
        position: absolute;
        top: 0; left: 0;
        z-index: -10;
    }

}

</style>

<script>

export default {

    methods: {

        go() { this.$router.go(-1); },

    },

};

</script>
