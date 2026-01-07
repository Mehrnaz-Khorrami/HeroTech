<template>
  <v-row class="ma-0 mt-6 pa-0">
    <!-- Filters (right side in RTL) -->
    <v-col cols="12" md="3" class="pa-0 pl-4">
      <div class="filters-wrapper">
        <ProductsFilters
          v-model:search-query="searchQuery"
          @search="handleSearch"
        />
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

      <v-row v-else-if="filteredProducts?.length" class="ma-0 pa-0">
        <v-col cols="12" class="pa-0">
          <ProductsSelectedFilters
            :search-query="appliedSearchQuery"
            @clear-search="handleClearSearch"
          />
        </v-col>
        <v-col
          v-for="product in filteredProducts"
          :key="product.id"
          cols="12"
          sm="6"
          md="4"
          class="d-flex justify-center pa-0 mb-6"
        >
          <ProductsProductCard :product="product" />
        </v-col>
      </v-row>

      <v-row
        v-else-if="data?.length && !filteredProducts?.length"
        class="ma-0 pa-0"
      >
        <v-col cols="12" class="pa-0">
          <ProductsSelectedFilters
            :search-query="appliedSearchQuery"
            @clear-search="handleClearSearch"
          />
        </v-col>
        <v-col cols="12" class="text-center pa-8">
          <div class="fs-16 gray-700">محصولی یافت نشد</div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
const { data, pending } = await useAsyncData("products", () =>
  $fetch("https://fakestoreapi.com/products")
);

const searchQuery = ref("");
const appliedSearchQuery = ref("");

const filteredProducts = computed(() => {
  if (!data.value) return [];

  if (!appliedSearchQuery.value || appliedSearchQuery.value.trim() === "") {
    return data.value;
  }

  const query = appliedSearchQuery.value.toLowerCase().trim();
  return data.value.filter((product) =>
    product.title?.toLowerCase().includes(query)
  );
});

const handleSearch = (query) => {
  appliedSearchQuery.value = query;
};

const handleClearSearch = () => {
  searchQuery.value = "";
  appliedSearchQuery.value = "";
};
</script>
<style lang="css" scoped>
.filters-wrapper {
  position: sticky;
  top: 144px;
  z-index: 10;
}

@media (min-width: 360px) and (max-width: 1028px) {
  .filters-wrapper {
    top: 96px;
  }
}
</style>
