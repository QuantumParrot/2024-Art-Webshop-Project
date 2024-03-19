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

import { headingConfig } from '@/methods/plugin';

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

                link: {

                    decorators: {

                        openInNewTab: {

                            mode: 'manual',
                            defaultValue: true,
                            attributes: {

                                target: '_blank',
                                rel: 'noopener noreferrer',

                            },
                            label: '是否另開新視窗',

                        },

                    },

                },

                heading: headingConfig,

            },

        };

    },

};
