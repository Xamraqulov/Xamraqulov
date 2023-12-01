---
layout: page
title: Companies
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

import companies from './companies.json'
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Companies
    </template>
    <template #lead>
      Companies that worked and founded.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="companies"
  />
</VPTeamPage>