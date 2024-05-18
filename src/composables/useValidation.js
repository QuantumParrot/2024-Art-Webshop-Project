import { reactive } from 'vue';

export default function useValidation() {

    const transText = reactive({

        username: '帳號',
        password: '密碼',
        name: '姓名',
        address: '地址',
        email: '信箱',

    });

    const localize = (msg, type) => msg.replace(`${type} `, transText[type]);

    const isPhone = (value) => {

        const regex = /^09\d{8}$/;

        if (!regex.test(value)) { return '須填寫國內的手機號碼'; }

        return true;

    };

    return { localize, isPhone };

}
