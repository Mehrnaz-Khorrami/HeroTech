<template>
  <div>
    <v-row v-if="data && data.length" class="ma-0">
      <v-col
        v-for="product in data"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
        class="d-flex justify-center"
      >
        <ProductsProductCard :product="product" />
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
// get Products data
const { data } = await useAsyncData("products", () =>
  $fetch("https://fakestoreapi.com/products")
);
</script>
