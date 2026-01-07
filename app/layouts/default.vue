<template>
  <v-app>
    <LayoutsMainHeader />
    <v-main class="pb-0 main-content">
      <div class="main-content-desktop">
        <NuxtPage />
      </div>
    </v-main>
    <LayoutsMainFooter />
  </v-app>
</template>
<script setup></script>
<style lang="css">
  .main-content {
    padding-top: 100px !important;
  }
  .main-content-desktop {
    max-width: 1440px;
    margin: 50px auto 0 auto;
    padding: 0 164px !important;
  }

  @media (min-width: 360px) and (max-width: 1028px) {
    .main-content {
      padding-top: 52px !important;
    }
    .main-content-desktop {
      padding: 0 16px !important;
    }
  }

  @media (min-width: 1028px) and (max-width: 1440px) {
    .main-content-desktop {
      padding: 0 80px !important;
    }
  }
</style>
