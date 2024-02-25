/* eslint-disable indent */

export default {

    data() {

        return {

            images: [
                {
                  url: 'https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1708262533883.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=glA1BRFtEMP6mKn6mX6xTMdyvmTDHqy3iYP7vQFsHx9BTkqe2ApAg%2BAiJXX%2Bebb%2B7yR4zod%2BBjsmFxg5qkrTurU61qnpGqQurjG6GyzG8BQnU5Lohw3RKBSuoOvW%2F7f7ONF4yrBEZu1sk7uXZ9AJod5nZidI%2FeSthjMIxszBkAiSQ9yjqjFW9hoBK%2Bb8Izjm7dqhZt1%2FTdiLPn362K%2B47NZ1exFQf64IKQSf35VNcJZJPXAyDRLNqkJwKDBYbOQXbRLmhgzcGK1xlaVBvLi3EAygv8i7yjkL4STiFPz2O%2ByJoLQ2Nh8UDqKQyBDrjvPHHnz2vzrANFhnsSfqJHamiw%3D%3D',
                  source: 'https://pixabay.com/photos/architecture-escapes-shadows-arches-686750/',
                  description: '西班牙馬德里阿蘭胡埃斯 ( Aranjuez )',
                },
                {
                  url: 'https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1708266054541.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=cT2fa7TbZAYl9E7rsSI4GnV0RnoduagZSaGP1jdvcz3pe9yoGpSnauFbJP2jZrrpEcKawAVwp7Qremu1cbJUzf0emE4E0ta%2BBBUDmKFienofbnuXIATN%2FmTIW9gNtkr94Fcn1f52Aw08Gi66%2Bw3lDFjol4dkAbU0hK1h9HS42Pe%2FU1jFA2F%2F%2FYv9h13ZibsfBYvtI18kP1Gip41a%2Fo2AP3TCWTh1h6kRVLbmoiLVVrOe4DPd8aHxCPGNXd7Fi1Qs3DqyWk9ROy5qaJG266Cx%2BzOP1FMKESRXNfG8H7P4VC8wjJS93g3DKAtH9viMrDgwbY3%2B6fxuZZRxP1sfHisb1w%3D%3D',
                  source: 'https://pixabay.com/photos/natural-history-museum-london-2203648/',
                  description: '英國倫敦自然史博物館',
                },
                {
                  url: 'https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1708283150870.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Ys6Z4HbHNJVe3a2WmhY8ujW6h0ailhc4nfGaCNIyOtOLxITQLk3tuuzfPTQNd8QJrFn69EI15eZijMO2PeVkiup%2FaMEI3nIZc6zZQxIr7vEODccS3H5Nd%2BIOh3IANq4TA8MDZ1ACk%2Fy6iObNecFZ3id15DTUIron8XvkZtXwvXhgluEQ0kIAxvApmRgsz6WWe%2FrUQ08U63H%2Bh9peI3HwnrdNX6HSaNivN32Khstndmr0MS4s9mIsntcMQ6611TG7Si2cOm3KszBk0V3UC8mvX%2B61JbsTl18edGA4lOm%2BTroP4aL6y2a9Bf3ssN8%2B8LQ%2FaCrpu66QXxJAtGe%2FIM2%2BeA%3D%3D',
                  source: 'https://pixabay.com/photos/castle-fontainebleau-perspective-3322089/',
                  description: '法國楓丹白露宮 ( Palace of Fontainebleau )',
                },
                {
                  url: 'https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1708451786583.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=XzdXDrDGeTz1lZnrVASnZN8zIRcSglMhFx29lMRGJ%2BnmRPo5ZKGngHtBCVUITqpAR0cd7jhrAvmj%2BYGrB75%2F6zXiCtf9knDQbrUxdTSUobWVu2Fe0OKaaj2RQdNS6zZeQ9MB7TenYK%2B7M8pcMZJ68TTOTNHKdVv%2FtGGA6NfQHIZWmCixRmDp3%2FjxwhRGi9ZQJRqY%2FuSAF4x%2FJ4jBFTpiiYe3HFU%2ByI2doaZ23BLtD9r0b5vjVB97KXBqKXe%2FtpzMsnr9YtP8YDWwgCUYrVVckNRR%2FtaQ%2F9TcXZAmAYfW0qtzSQNCK28Bx901UP2dgBYSl0ANTjzB%2BSAws1WEVmshAA%3D%3D',
                  source: 'Wikipedia / Mrmarkertw',
                  description: '台南奇美博物館',
                },
            ],

        };

    },

    methods: {

        randomSwitchImg() {

            const index = Math.floor(Math.random() * this.images.length);
            return this.images[index];

        },

    },

};
