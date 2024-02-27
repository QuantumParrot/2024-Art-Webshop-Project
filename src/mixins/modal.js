import Modal from 'bootstrap/js/dist/modal';

export default {

    methods: {

        showModal() { this.modal.show(); },

        // 下面這行參考自同學向助教詢問得到的回覆，謝謝提問的同學 Ann Chou 和回覆的傑利助教！

        hideModal() { this.modal.hide(); this.$refs.form.resetForm(); },

    },

    mounted() { this.modal = new Modal(this.$refs.modal, { backdrop: 'static' }); },

};
