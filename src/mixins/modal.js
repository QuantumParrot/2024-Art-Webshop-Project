import Modal from 'bootstrap/js/dist/modal';

export default {

    methods: {

        showModal() { this.modal.show(); },

        hideModal() {

            this.modal.hide();
            if (this.$refs.form) { this.$refs.form.resetForm(); }

        },

    },

    mounted() { this.modal = new Modal(this.$refs.modal, { backdrop: 'static', focus: false }); },

};
