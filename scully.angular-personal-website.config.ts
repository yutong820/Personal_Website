import { ScullyConfig } from '@scullyio/scully';


const blogTopics = [
    '/blogs/stories/',
    '/blogs/education/',
    '/blogs/gaming/',
    '/blogs/music/',
    '/blogs/sport/',
    '/blogs/programming/'
];

const blogPostTitles = [
    '/blog/education/university-or-not/',
    '/blog/stories/this-is-my-story/',
    '/blog/stories/italy-is-not-for-young-people/',
    '/blog/programming/why-i-love-angular/',
    '/blog/sport/italian-basketball-team-journey/',
    '/blog/gaming/why-boom-beach-is-better-than-clash-of-clans/'
];

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'angular-personal-website',
  distFolder: './dist/angular-personal-website', // output directory of your Angular build artifacts
  outDir: './docs', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {
    '/projects/': {
      type: 'contentFolder',
      postRenderers: ['seoHrefOptimize'],
    },
    '/blogs/': {
      type: 'contentFolder',
      postRenderers: ['seoHrefOptimize'],
    }
  },
  extraRoutes: [
    '/',
    '/blogs/',
    '/projects/',
    ...blogTopics,
    ...blogPostTitles
  ],
};

