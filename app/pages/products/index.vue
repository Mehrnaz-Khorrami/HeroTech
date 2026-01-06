<template>
 <v-row class="ma-0 mt-6 pa-0" >
  <!-- Filters (right side in RTL) -->
  <v-col cols="12" md="3" class="pa-0 pl-4">
    <div class="filters-wrapper">
      <ProductsFilters />
    </div>
  </v-col>

  <!-- Products (left side in RTL) -->
  <v-col cols="12" md="9" class="pa-0">
    <v-row v-if="pending" class="ma-0">
      <v-col
        v-for="skeleton in 6"
        :key="skeleton"
        cols="12"
        sm="6"
        md="4"
        class="d-flex justify-center"
      >
        <v-skeleton-loader width="263" type="card" />
      </v-col>
    </v-row>

    <v-row v-else-if="data?.length" class="ma-0 pa-0">
      <v-col cols="12" class="pa-0">
        <ProductsSelectedFilters/>
      </v-col>
      <v-col
        v-for="product in data"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
        class="d-flex justify-center pa-0 mb-6"
      >
        <ProductsProductCard :product="product" />
      </v-col>
    </v-row>
  </v-col>
</v-row>
</template>

<script setup>
const { data, pending } = await useAsyncData("products", () =>
  $fetch("https://fakestoreapi.com/products")
);
</script>
<style lang="css" scoped>
.filters-wrapper {
  position: sticky;
  top: 24px;
}
</style>
