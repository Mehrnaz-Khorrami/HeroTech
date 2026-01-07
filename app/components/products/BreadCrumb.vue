<template>
  <div class="bread-crumb-container">
    <v-breadcrumbs :items="items" class="fs-14 font-weight-700 gray-500 pa-0">
      <template #divider>
        <v-icon size="20" color="#6783A0">mdi-chevron-left</v-icon>
      </template>
      <template v-slot:prepend>
        <v-img src="/icons/homeIcon.svg" width="18" height="18" />
        <v-icon size="20" color="#6783A0" class="mx-2">mdi-chevron-left</v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script setup>
const props = defineProps({
  categoryName: {
    type: String,
    default: "",
  },
});

const items = ref([
  {
    title: "لیست محصولات ها",
    disabled: false,
    href: "/products",
  },
  {
    title: props.categoryName ?? "",
    disabled: false,
  },
]);
</script>
<style scoped lang="css">
.bread-crumb-container{
    padding: 0 0 10px 0;
    margin-bottom: 16px;
}
</style>
