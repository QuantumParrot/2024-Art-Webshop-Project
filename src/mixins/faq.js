/* eslint-disable max-len */

export default {

    data() {

        return {

            // 排序

            sortOrder: ['付款問題', '取貨問題', '訂單問題', '文章問題', '其他問題'],

            // 預計之後改用文章 api 處理

            questions: [
                {
                    id: 1,
                    type: '付款問題',
                    question: '如何付款？',
                    answer: '我們目前只接受線上按鈕⋯⋯不是，<b>線上刷卡付款</b>哦。將來預計會導入更多元的支付方式，敬請期待！',
                },
                {
                    id: 2,
                    type: '付款問題',
                    question: '付款期限有多久？',
                    answer: '從訂單成立的日子開始計算的<b>七天內</b>。<br>請盡可能在這段時間完成結帳，以免影響您的權益。<br>如果需要延長，也請主動通知我們，謝謝您的配合。',
                },
                {
                    id: 3,
                    type: '取貨問題',
                    question: '如何取貨？',
                    answer: '由於多數的商品體積都較為龐大，我們目前只有<b>宅配到府</b>的服務哦！不便之處，敬請見諒。',
                },
                {
                    id: 4,
                    type: '取貨問題',
                    question: '何時才能取貨？',
                    answer: '視您的訂單內容而定。<br>如果訂購了大型的複製雕塑，可能會需要<b>半個月至一個月</b>左右，訂購數量多的話則需要更久的時間。<br>複製油畫和小型複製雕塑大約三至四天。<br>其他商品則大約兩天。<br>若是等待時間過長，麻煩主動聯繫我們！我們會向您回報當前狀況。',
                },
                {
                    id: 5,
                    type: '取貨問題',
                    question: '是否能夠退貨和換貨？',
                    answer: '<b>可以！</b><br>我們的商品皆享有<b>七天鑑賞期</b>的保障。<br>自簽收日起開始計算的七天內，只要商品未經人為刻意毀損，我們無條件接受您的換貨及退貨請求。',
                },
                {
                    id: 6,
                    type: '其他問題',
                    question: '商品或文章提供的資訊有誤⋯⋯',
                    answer: '天啊 Σ(°Д°; <br>如果您願意，請聯繫我們的網站管理員：ataraxia528491@gmail.com。<br>我們將立刻與您確認細節，非常謝謝您的細心與建議！',
                },
                {
                    id: 7,
                    type: '訂單問題',
                    question: '忘記訂單編號怎麼辦？',
                    answer: '請聯繫我們：collectorstudio@mail.com。<br>並提供訂單的相關細節，如名字、地址、電話、訂購的商品等等，我們將協助您找回訂單編號，並以信箱或簡訊回覆您結果。',
                },
                {
                    id: 8,
                    type: '文章問題',
                    question: '文章多久更新一次？',
                    answer: '目前還不一定。<br>您可以訂閱我們的電子報追蹤進度。<br>我們的寫手常常缺乏靈感，也歡迎您來信給我們一點意見喔喔喔！',
                },
                {
                    id: 9,
                    type: '付款問題',
                    question: '我已經付款了，出貨狀態卻顯示未確認？',
                    answer: '因為所有的金流都是人工確認，如果您已經付款，需要等一些時間，並不表示您的款項有問題哦！<br>如果有問題，我們會主動聯繫您，沒有消息就是好消息！',
                },
            ],

        };

    },

    computed: {

        // 以 props 形式帶入 types 變數，藉以在不同頁面顯示不同的 faq

        featuredQuestions() {

            if (this.types.length) {

                this.sortQuestions();

                return this.questions.filter((q) => this.types.includes(q.type));

            }

            return this.questions.filter((q) => q.id < 7);

        },

    },

    methods: {

        // 讓問題照著 sortOrder 給的順序排序

        sortQuestions() { this.questions.sort((a, b) => this.sortOrder.findIndex((order) => order === a.type) - this.sortOrder.findIndex((order) => order === b.type)); },

    },

};
