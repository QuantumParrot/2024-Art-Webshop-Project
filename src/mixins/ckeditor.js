// 給可能會失憶的自己看：如果編輯器掛掉，請改用 @ckeditor/ckeditor5-build-classic 的 classic editor
// 若是如此，以下的插件通通不需要

import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { Link } from '@ckeditor/ckeditor5-link';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Font } from '@ckeditor/ckeditor5-font';

// import {
//     Image,
//     ImageCaption,
//     ImageStyle,
//     ImageToolbar,
//     ImageUpload,
// } from '@ckeditor/ckeditor5-image';

import { headingConfig } from '@/assets/plugin';

//

export default {

    data() {

        return {

            editor: ClassicEditor,
            editorConfig: {

                plugins: [
                    Essentials,
                    Bold,
                    Italic,
                    Link,
                    Heading,
                    Font,
                ],

                toolbar: {

                    items: [
                        'undo', 'redo',
                        '|', 'heading', 'bold', 'italic', 'fontSize', 'fontFamily', 'fontColor',
                        '|', 'link',
                    ],

                },

                heading: headingConfig,

            },

        };

    },

};
