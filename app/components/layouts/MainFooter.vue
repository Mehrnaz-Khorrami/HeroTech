<template>
  <div class="main-footer-container">
    <FooterLinks />
    <FooterInfo />
  </div>
</template>
<script setup></script>
<style lang="css">
.main-footer-container {
  height: 416px;
  background-color: white;
  box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.04);
margin-top: 74px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
}

@media (min-width: 360px) and (max-width: 1028px) {
  .main-footer-container {
    width: 100%;
    max-width: 100%;
    margin: 0;
  }
}
</style>
