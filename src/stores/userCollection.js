import { defineStore } from 'pinia';

import useAlertStore from './alert';

//

const alertStore = useAlertStore();

//

export default defineStore('userCollection', {

    state: () => ({ collection: [] }),

    actions: {

        getCollection() { this.collection = JSON.parse(localStorage.getItem('collection')) || []; },

        toggleCollection(id) {

            const index = this.collection.findIndex((i) => i === id);

            if (index === -1) {

                this.collection.push(id);

                alertStore.toastAlert('已加入收藏', 'success');

            } else {

                this.collection.splice(index, 1);

                alertStore.toastAlert('已移除收藏', 'success');

            }

        },

        updateCollection() {

            if (this.collection.length) {

                localStorage.setItem('collection', JSON.stringify(this.collection));

            } else { localStorage.removeItem('collection'); }

        },

        clearCollection() {

            const config = { title: '確定清空所有收藏嗎？' };

            alertStore.checkAlert(config, () => {

                this.collection.length = 0;
                alertStore.toastAlert('我們懷念它 (´・ω・`)', 'success');

            });

        },

    },

});
