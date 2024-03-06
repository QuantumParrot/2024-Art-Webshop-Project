export default {

    data() {

        return {

            transText: {

                username: '帳號',
                password: '密碼',
                name: '姓名',
                address: '地址',
                email: '信箱',

            },

        };

    },

    methods: {

        localize(msg, type) {

            return msg.replace(`${type} `, this.transText[type]);

        },

        isPhone(value) {

            const regex = /^09\d{8}$/;

            if (!regex.test(value)) { return '須填寫國內的手機號碼'; }

            return true;

        },

    },

};
