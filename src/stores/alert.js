import Swal from 'sweetalert2';

//

import { defineStore } from 'pinia';

//

export default defineStore('alert', {

    state: () => ({

        refuseColor: '#c62828',
        normalColor: '#aaaaaa',
        okText: '確定',
        noText: '取消',

    }),

    actions: {

        toastAlert(text, icon) {

            Swal.fire({
                icon,
                text,
                toast: true,
                timer: 1500,
                showConfirmButton: false,
            });

        },

        modalAlert(config) {

            const {

                title, text, icon = 'error',
                buttonColor, buttonTxt,

            } = config;

            Swal.fire({
                title,
                icon,
                text: text || '',
                confirmButtonColor: buttonColor || this.refuseColor,
                confirmButtonText: buttonTxt || 'OK',
            });

        },

        errorAlert(error, icon = 'warning') {

            // console.log(error);

            if (error.code === 'ERR_NETWORK') {

                this.modalAlert({ title: '網路連線異常，請重新確認連線狀態後再嘗試', icon: 'error' });

            } else if (error.response) {

                const { message } = error.response.data;
                this.toastAlert(message, icon);

            }

        },

        checkAlert(config, fn, reset) {

            const {

                title, text, icon = 'warning',
                type = 'delete',

            } = config;

            Swal.fire({

                title,
                icon,
                text: text || '',
                showCancelButton: true,
                cancelButtonText: this.noText,
                focusConfirm: false,
                confirmButtonColor: type === 'delete' ? this.refuseColor : '#424242',
                confirmButtonText: this.okText,

            }).then((result) => {

                if (result.isConfirmed) {

                    fn();

                } else if (typeof reset === 'function') { reset(); }

                // console.trace();

            });

        },

        uploadAlert(file) {

            let text = '';
            const typeRegex = /jpg|jpeg|png$/g;

            if (!file.name) {

                text = '欄位不可空白';
                this.toastAlert(text, 'warning');

                return false;

            }

            if (!file.type.startsWith('image/')) {

                text = '須為圖片檔案';
                this.toastAlert(text, 'warning');

                return false;

            }

            if (!typeRegex.test(file.name.split('.')[1])) {

                text = '不支援此格式';
                this.toastAlert(text, 'warning');

                return false;

            }

            if (file.size > 3145728) {

                text = '檔案容量過大';
                this.toastAlert(text, 'warning');

                return false;

            }

            return true;

        },

        multiverseAlert(irreparableFn) {

            const icon = 'warning';
            const iconColor = this.refuseColor;
            const denyButtonColor = this.refuseColor;
            const confirmButtonColor = this.normalColor;
            const denyButtonText = '不要好了';
            const focusDeny = true;

            Swal.fire({

                icon,
                iconColor,
                title: '你確定？',
                text: '刪除全部訂單 ... 不要想不開欸！',
                denyButtonText,
                denyButtonColor,
                confirmButtonColor,
                showDenyButton: true,
                confirmButtonText: '確定',
                focusDeny,

            }).then((result) => {

                if (result.isConfirmed) {

                    Swal.fire({

                        icon,
                        iconColor,
                        title: '你真的確定？',
                        text: '欸 ... 不是，全部訂單欸？',
                        denyButtonText,
                        denyButtonColor,
                        confirmButtonColor,
                        showDenyButton: true,
                        confirmButtonText: '對啦',
                        focusDeny,

                    }).then((result2) => {

                        if (result2.isConfirmed) {

                            Swal.fire({

                                icon,
                                iconColor,
                                title: '你真的真的確定？',
                                text: '這是最後一次詢問，按下就無法回頭了',
                                denyButtonText,
                                denyButtonColor,
                                confirmButtonColor,
                                showDenyButton: true,
                                confirmButtonText: '確定啦，你好囉唆欸',
                                focusDeny,

                            }).then((result3) => {

                                if (result3.isConfirmed) { irreparableFn(); }

                            });

                        }

                    });

                }

            });

        },

    },

});
