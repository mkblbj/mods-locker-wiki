---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const coreMembers = [
  {
    avatar: 'https://pic.x-yue.top/i/2025/11/08/m9geak.jpeg',
    name: 'mkblbj',
    title: '开发者',
    links: [
      { icon: 'gmail', link: 'mailto:mkblbjus@gmail.com' },
      { icon: 'wechat', link: 'https://tc-new.z.wiki/autoupload/f/2Lce7mDTH2prz_SmJ39Zf412_FRYNb81z6UPhMWD8iI/20250911/lIA3/1194X1596/IMG_2531.JPG' },
      { icon: 'instagram', link: 'https://www.instagram.com/mkblbj/'} 
    ]
  }
]

// 如果未来有更多团队成员，可以添加到这里
// const contributors = [
//   {
//     avatar: 'https://github.com/contributor1.png',
//     name: '贡献者 1',
//     title: '社区贡献者',
//     links: [
//       { icon: 'github', link: 'https://github.com/contributor1' }
//     ]
//   }
// ]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      我们的团队
    </template>
    <template #lead>
      Mods Locker 的开发由一个充满热情的团队推动，我们致力于为 NBA 2K 玩家提供最好的 Mods 管理体验。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
</VPTeamPage>

