export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '621368bf093ec3241e920820',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-iibjd52v',
                  apiId: 'b1c72306-c895-40e2-a796-2ee87c5cceb1'
                },
                {
                  buildHookId: '621368c01f53e224532f744c',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-w6zyw7v2',
                  apiId: '82060422-8293-4900-b3cb-f5556ed3cc8e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/facontidavide/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-w6zyw7v2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
