import { defineStore } from 'pinia';

//

export default defineStore('loader', {

    state: () => ({ loadingQueue: [], loadingTask: '' }),

    getters: {

        isLoading: ({ loadingQueue }) => !!loadingQueue.length,

    },

    actions: {

        createLoader(task) { this.loadingQueue.push(task); },

        removeLoader(task) { this.loadingQueue.splice(this.loadingQueue.indexOf(task), 1); },

        setLoader(task) { this.loadingTask = task; },

    },

});
