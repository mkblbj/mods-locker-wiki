---
date: 2025-11-08 14:38:05
title: team
layout: page
categories:
  - 
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [
  {
    avatar: 'https://pic.x-yue.top/i/2025/11/08/m9geak.jpeg',
    name: 'mkblbj',
    title: 'Developer',
    links: [
      { icon: 'gmail', link: 'mailto:mkblbjus@gmail.com' },
      { icon: 'wechat', link: 'https://tc-new.z.wiki/autoupload/f/2Lce7mDTH2prz_SmJ39Zf412_FRYNb81z6UPhMWD8iI/20250911/lIA3/1194X1596/IMG_2531.JPG' },
      { icon: 'instagram', link: 'https://www.instagram.com/mkblbj/'} 
    ]
  }
]

// If you have more team members in the future, add them here
// const contributors = [
//   {
//     avatar: 'https://github.com/contributor1.png',
//     name: 'Contributor 1',
//     title: 'Community Contributor',
//     links: [
//       { icon: 'github', link: 'https://github.com/contributor1' }
//     ]
//   }
// ]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of Mods Locker is driven by a passionate team dedicated to providing the best Mods management experience for NBA 2K players.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
</VPTeamPage>

