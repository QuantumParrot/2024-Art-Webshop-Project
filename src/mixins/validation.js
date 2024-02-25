export default {

    data() {

        return {

            transText: {
                username: '帳號',
                password: '密碼',
            },

        };

    },

    methods: {

        localize(msg, type) {

            return msg.replace(`${type} `, this.transText[type]);

        },

    },

};
