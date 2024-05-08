## [收藏家 - 藝術品販售電商網站](https://quantumparrot.github.io/2024-Art-Webshop-Project/#/)

![2024 side project - art webshop index](https://i.imgur.com/RGfNVSj.png)

此為參與 2023 年底六角學院 Vue 直播班的個人專案作品。

純屬開發練習，不做任何商用。

Personal Side Project for Practice, Not For Any Commercial Use.

當前進度：根據 [PageSpeed Insights](https://pagespeed.web.dev/) 指南進行效能優化、另開分支改寫為 Composition API

***

### 🪶 網站介紹

---

以販售藝術品、工藝品為主的電商平台，亦透過專欄文章推廣及分享相關的藝文知識。

#### 🧑🏻‍💻｜前台使用者

**瀏覽文章**

- [X] 瀏覽最新消息，透過路由控制切換不同分類的消息
- [X] 瀏覽專欄文章，透過路由控制切換不同分類的文章

**購物流程**

- [X] 瀏覽商品列表，透過路由控制切換不同分類的商品
- [X] 搜尋特定商品
- [X] 新增、刪除、編輯、清空購物車
- [X] 填寫收件資訊
- [X] 進行付款結帳

**其他**

- [X] 瀏覽、加入、移除、清空收藏
- [X] 追蹤訂單進度 

#### 🧑🏻‍💻｜後台管理員

**身份驗證**

- [X] 登入
- [X] 登出

**管理商品**

- [X] 瀏覽、新增、編輯、刪除商品
- [X] 切換商品上下架狀態
- [X] 篩選不同分類的商品

**管理訂單**

- [X] 瀏覽、刪除訂單
- [X] 根據出貨情形，切換訂單狀態
- [X] 根據付款狀況、出貨情形，篩選不同進度的訂單

**管理文章**
  
- [X] 瀏覽、新增、編輯、刪除文章
- [X] 切換文章的公開狀態
- [X] 篩選不同分類的文章

**管理優惠券**

- [X] 瀏覽、新增、編輯、刪除優惠券
- [X] 切換優惠券的上下架狀態

**其他**

- [X] 圖片上傳
- [X] 追蹤已付款的未處理訂單

***

### 🪶 開發工具

---

|  主要功能  |  工具  |  適用版本  |
|:-|:-|:-|
|  套件管理  |  **[PNPM](https://github.com/pnpm/pnpm)**  |
|  開發環境  |  **[Vite](https://github.com/vitejs)**  |  ![Static Badge](https://img.shields.io/badge/%5E5.0.1-5.1.3-blue)
|  前端框架  |  **[Vue.js](https://github.com/vuejs/)** -- Options API  |  ![Static Badge](https://img.shields.io/badge/%5E3.4.15-3.4.19-blue)
|  路由控制  |  **[Vue Router](https://github.com/vuejs/router)**  |  ![Static Badge](https://img.shields.io/badge/%5E4.2.5-4.2.5@vue3.4.19-blue)
|  資料管理  |  **[Pinia](https://github.com/vuejs/pinia)**  |  ![Static Badge](https://img.shields.io/badge/%5E2.1.7-2.1.7@vue3.4.19-blue)
|  後端環境  |  六角學院提供給學員的電商 API  |
|  程式碼品質控制  |  **[ESLint](https://eslint.org/)** -- Airbnb  |  ![Static Badge](https://img.shields.io/badge/%5E8.49.0-8.56.0-blue)

***

### 🪶 第三方套件整合

---

+ [AXIOS](https://github.com/axios/axios) | *^ 1.6.7*

  處理所有的 API 串接

+ [Bootstrap 5](https://github.com/twbs) | *^ 5.3.2 ( @popperjs/core @ 2.11.8 )*

  在 BS5 提供的既有模板上，以客製化變數建立自定義的 CSS 樣式

+ [Bootstrap 5 icons](https://icons.getbootstrap.com/) | *^ 1.11.3*

+ [vee-validate](https://github.com/logaretm/vee-validate/) | *^ 4.12.5 ( vue @ 3.4.19 )*

  表單驗證

+ [ckeditor5](https://ckeditor.com/) | *^ 41.1.0*

  使用 CKEditor5 提供的模板及插件，整合 Vite 及 BS5 樣式，客製化符合專案需求的文字編輯器

+ [SweetAlert2](https://github.com/sweetalert2/sweetalert2) | *^ 11.10.5*

  互動視窗

+ [moment.js](https://github.com/moment/moment/) | *^ 2.30.1*

  時間戳記轉換工具

+ [AOS](https://github.com/michalsnik/aos) | *^ 2.3.4*

  視差滾動動畫效果

+ [animate.css](https://github.com/animate-css/animate.css) | *^ 4.1.1*

  動畫效果

+ [Swiper](https://github.com/nolimits4web/swiper) | *^ 11.0.7*

  以 Swiper 提供的 Shadow DOM 製作動態輪播元件，並配合網站整體風格製作客製化樣式

+ [clipboard.js](https://github.com/zenorocha/clipboard.js) | *^ 2.0.11*

  剪貼板

+ [vue-loading-overlay](https://github.com/ankurk91/vue-loading-overlay) | *^ 6.0.4*

  loading 動畫

+ [vue3-lottie](https://github.com/megasanjay/vue3-lottie) | *^ 3.3.0*

  lottie 動畫檔案播放器

***

### 🪶 安裝說明

---

Node.js 建議版本：`18.0.0` 以上

--

1\. 取得專案

``` bash
git clone https://github.com/QuantumParrot/2024-Art-Webshop-Project.git
```

2\. 開啟專案

``` bash
cd /.../2024-Art-Webshop-Project # ... 為您下載位置的路徑
```

3\. 安裝套件（ 使用 npm / pnpm 皆可 ）

``` bash
pnpm i
```

4\. 運行專案（ 使用 npm / pnpm 皆可 ）

``` bash
pnpm run dev
```

***

### 🪶 資料出處

---

網站內的所有圖片及文字皆有明確的來源與參考出處，

目前已經彙整至[文件](https://determined-pram-34a.notion.site/9f522b0de5c2413c8090249c96bd692a?v=5b0f1f1c376f4b468a56aaec87a97c8a&pvs=25)中，如有興趣可以前往了解。

***

### 🪶 靈感來源

---

✨ [SINGULART](https://www.singulart.com/cn/)

✨ [四季複製畫 - 世界名畫複製](https://fine-art-print.tw/)

✨ [故事 STORY STUDIO](https://storystudio.tw/)

另外，一部分的版型設計、切版技巧及程式撰寫亦參考自以下幾位前輩及同學的作品，非常謝謝！🙇

✨ Moreene：[嘿毛寵物旅館](https://moreene.github.io/HayMo-Hotel-JS/)

✨ zasper32171：[GOLDEN RONNY](https://zasper32171.github.io/golden_ronny/)

✨ recall131477：[午分之食](https://recall131477.github.io/doublebrunch/)

✨ hoongyuu：[齊托洋酒](https://hoongyuu.github.io/Cheeto-s-Wine/)

✨ ericacadu & HuskyHsu：[パンヤ](https://ericacadu.github.io/panya/)

✨ verakang：[藝享世界](https://verakang.github.io/artworld/)

✨ AnnChouCode：[WandererLand](https://annchoucode.github.io/WandererLand/)

✨ huan5678、eee317、sp1daTomm、echocarriet：[選集](https://select-wave.vercel.app/#/)

✨ PayRoom：[原生 HTML 標籤的各種應用](https://codepen.io/water38198/pen/abMMKGX)

***

### 🪶 特別感謝

---

謝謝協助審核這份作品的**焦糖**助教、**Jessica Wang** 設計師，

兩位在批改過程中不吝給予各種專業建議，

收穫良多，非常感謝 🙇
