import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mods Locker",
  description: "Mods Locker — a smart, convenient NBA 2K Mods manager",
  lang: 'zh-CN',
  
// 构建输出目录（相对于项目根目录）
  outDir: '../dist',

  head: [
    ['link', { rel: 'icon', href: '/assets/images/icon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js' }],
    ['link', { rel: 'stylesheet', href: '/assets/stylesheets/changelog.css' }],
    ['link', { rel: 'stylesheet', href: '/assets/stylesheets/video.css' }],
    ['link', { rel: 'stylesheet', href: '/assets/stylesheets/header-social.css' }],
    ['script', { src: '/assets/javascripts/header-social.js', defer: '' }]
  ],

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '用户使用教程', link: '/tutorial' },
          { text: '下载', link: '/downloads/' },
          { text: '更新日志', link: '/changelog' },
          { text: '团队', link: '/team' }
        ],
        sidebar: [
          {
            text: '指南',
            items: [
              { text: '首页', link: '/' },
              { text: '用户使用教程', link: '/tutorial' }
            ]
          },
          {
            text: '资源',
            items: [
              { text: '下载', link: '/downloads/' },
              { text: '更新日志', link: '/changelog' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'discord', link: 'https://discord.gg/vw8wAZH6Sn' },
          { icon: 'wechat', link: 'https://tc-new.z.wiki/autoupload/f/2Lce7mDTH2prz_SmJ39Zf412_FRYNb81z6UPhMWD8iI/20250911/lIA3/1194X1596/IMG_2531.JPG' },
          { icon: 'gmail', link: 'mailto:mkblbjus@gmail.com' },
        ],
        logo: '/assets/images/icon.png',
        footer: {
          message: '© 2025 Mods-Locker. All rights reserved.',
          copyright: ''
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Tutorial', link: '/en/tutorial' },
          { text: 'Downloads', link: '/en/downloads/' },
          { text: 'Changelog', link: '/en/changelog' },
          { text: 'Team', link: '/en/team' }
        ],
        sidebar: [
          {
            text: 'Guide',
            items: [
              { text: 'Home', link: '/en/' },
              { text: 'Tutorial', link: '/en/tutorial' }
            ]
          },
          {
            text: 'Resources',
            items: [
              { text: 'Downloads', link: '/en/downloads/' },
              { text: 'Changelog', link: '/en/changelog' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'discord', link: 'https://discord.gg/vw8wAZH6Sn' },
          { icon: 'wechat', link: 'https://tc-new.z.wiki/autoupload/f/2Lce7mDTH2prz_SmJ39Zf412_FRYNb81z6UPhMWD8iI/20250911/lIA3/1194X1596/IMG_2531.JPG' },
          { icon: 'gmail', link: 'mailto:mkblbjus@gmail.com' },
        ],
        logo: '/assets/images/icon.png',
        footer: {
          message: '© 2025 Mods-Locker. All rights reserved.',
          copyright: ''
        }
      }
    }
  },

  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          },
          en: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search documentation'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Reset search',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate',
                  closeText: 'to close'
                }
              }
            }
          }
        }
      }
    },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
