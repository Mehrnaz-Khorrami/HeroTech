<template>
  <div class="product-card-container">
    <v-img :src="product.image" width="247" height="170" class="ma-2" />
    <div class="px-4">
      <div class="fs-14 font-weight-700 dark-blue my-4 product-title">
        {{ product.title }}
      </div>
      <v-btn
        variant="outlined"
        class="border-16"
        color="#E9EDF5"
        border="sm"
        block
        height="40"
        :to="`/products/${product.id}`"
      >
        <span class="fs-14 font-weight-700 dark-pink ml-2">مشاهده جزئیات</span>
        <v-img src="/icons/chevronLeftIconPink.svg" width="16" height="16" />
      </v-btn>
    </div>
  </div>
</template>
<script setup>
defineProps({
  product: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="css">
.product-card-container {
  border-radius: 24px;
  border: 1px solid #e9edf5;
  background-color: #ffffff;
  width: 263px;
  height: 286px;
}

.product-title {
  max-height: 24px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-height: 24px;
  word-wrap: break-word;
}
</style>
