const classes = ['mb-3'];

export const headingConfig = {

    options: [
        {
            model: 'paragraph',
            view: {
                name: 'p',
                classes: ['fs-6', ...classes],
            },
            title: 'paragraph',
        },
        {
            model: 'heading1',
            view: { 
                name: 'h2',
                classes: ['fs-2', ...classes]
            },
            title: 'bootstrap - H2',
        },
        { 
            model: 'heading2',
            view: {
                name: 'h3',
                classes: ['fs-3', ...classes]
            },
            title: 'bootstrap - H3',
        },
        { 
            model: 'heading3',
            view: {
                name: 'h4',
                classes: ['fs-4', ...classes]
            },
            title: 'bootstrap - H4',
        },
        { 
            model: 'heading4',
            view: {
                name: 'h5',
                classes: ['fs-5', ...classes]
            },
            title: 'bootstrap - H5',
        },
        {
            model: 'text',
            view: {
                name: 'p',
                classes: ['fs-7', ...classes]
            },
            title: 'small text',
        }
    ],

};