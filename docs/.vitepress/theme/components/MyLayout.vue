<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <!-- <template #aside-outline-before>
      My custom sidebar top content
    </template> -->
    <!-- <template #doc-top>
      doc-top
    </template> -->
    <template #home-hero-before>
      <img src="../../../src/public/images/bg.jpg" alt="">
    </template>
  </Layout>
</template>