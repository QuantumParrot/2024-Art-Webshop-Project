export default {

    data() {

        return {

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
                    question: '是否能夠退貨和換貨？',
                    answer: '<b>可以！</b><br>我們的商品皆享有<b>七天鑑賞期</b>的保障。<br>自簽收日起開始計算的七天內，只要商品未經人為刻意毀損，我們無條件接受您的換貨及退貨請求。',
                },
                {
                    id: 5,
                    type: '訂單問題',
                    question: '忘記訂單編號該怎麼辦？',
                    answer: '請聯繫我們：collectorstudio@mail.com。<br>並提供訂單的相關細節，如名字、地址、電話、訂購的商品等等，我們將協助您找回訂單編號，並以信箱或簡訊回覆您結果。',
                },
                {
                    id: 6,
                    type: '其他問題',
                    question: '商品或文章的資訊有錯誤⋯⋯',
                    answer: '天啊 Σ(°Д°; <br>如果您願意，請聯繫我們的網站管理員：ataraxia528491@gmail.com。<br>我們將立刻與您確認細節，非常謝謝您的細心與建議！',
                },
            ],

        };

    },

    computed: {

        // 在 SubscriptionSection 元件裡只呈現前六筆

        featuredQuestions() { return this.questions.filter((q, idx) => idx < 6); },

    },

};