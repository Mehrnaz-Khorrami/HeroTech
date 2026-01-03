<template>
  <v-app>
    <LayoutsMainHeader />
    <v-main :style="mobile ? mainContentStyle : ''" class="pb-0">
      <v-container
        fluid
        :class="mobile ? 'main-content-mobile' : 'main-content-desktop'"
      >
        <NuxtPage />
      </v-container>
    </v-main>
    <LayoutsMainFooter />
  </v-app>
</template>
<script setup></script>
<style lang="css"></style>
