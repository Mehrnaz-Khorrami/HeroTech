<template>
  <v-app>
    <LayoutsMainHeader />
    <v-main :style="mobile ? mainContentStyle : ''" class="pb-0">
      <v-container
        fluid
        class="main-content-desktop"
      >
        <NuxtPage />
      </v-container>
    </v-main>
    <LayoutsMainFooter />
  </v-app>
</template>
<script setup></script>
<style lang="css">
  .main-content-desktop{
    padding: 0 164px;
  }
</style>
