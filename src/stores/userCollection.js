import { defineStore } from 'pinia';

import useAlertStore from './alert';

//

const alertStore = useAlertStore();

//

export default defineStore('userCollection', {

    // 每一次觸發 toggleFavorite 時更新會 favorite 陣列的值

    // 元件內透過 watch 深度監聽 favorite 的變化

    // 每一次變化都會觸發 updateFavorite 進一步修改 localStorage

    // 這裡需要特別注意的是，不可以在 updateFavorite 時重新呼叫 getFavorite

    // 因為這會導致再次觸發深度監聽，然後再次更新，變成一種遞迴 ( 好像可以寫判斷式阻止，不過這部分下次再研究 ... !! )

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
