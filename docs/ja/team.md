---
date: 2025-11-09 09:16:07
title: team
layout: page
categories:
  - 
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
    title: '開発者',
    links: [
      { icon: 'gmail', link: 'mailto:mkblbjus@gmail.com' },
      { icon: 'wechat', link: 'https://tc-new.z.wiki/autoupload/f/2Lce7mDTH2prz_SmJ39Zf412_FRYNb81z6UPhMWD8iI/20250911/lIA3/1194X1596/IMG_2531.JPG' },
      { icon: 'instagram', link: 'https://www.instagram.com/mkblbj/'} 
    ]
  }
]

// 将来チームメンバーが増えた場合、ここに追加できます
// const contributors = [
//   {
//     avatar: 'https://github.com/contributor1.png',
//     name: 'コントリビューター 1',
//     title: 'コミュニティコントリビューター',
//     links: [
//       { icon: 'github', link: 'https://github.com/contributor1' }
//     ]
//   }
// ]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      私たちのチーム
    </template>
    <template #lead>
      Mods Lockerの開発は情熱的なチームによって推進されており、NBA 2Kプレイヤーに最高のMods管理体験を提供することに専念しています。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
</VPTeamPage>

