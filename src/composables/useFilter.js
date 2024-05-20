import { ref } from 'vue';

export default function useFilter() {

    const filter = ref('');

    const currentPage = ref(1);

    function switchFilter(value) { filter.value = value; currentPage.value = 1; }

    function switchPage(num) { currentPage.value = parseInt(num, 10); }

    return {

        filter, currentPage, switchFilter, switchPage,

    };

}
