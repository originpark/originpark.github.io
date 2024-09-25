<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import DocBefore from './components/DocBefore.vue';

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <!-- <template #doc-before>
       <DocBefore />
    </template> -->
  </Layout>
</template>