<template>
  <div>
    <ProductsBreadCrumb :category-name="data.category" />
    <div
      class="single-product-card-container product-image-container-mobile mb-6"
    >
      <div class="fs-18 font-weight-700 pt-8 mb-6">{{ data.title }}</div>
      <v-img :src="data.image" width="100%" height="310" class="ma-2" />
    </div>

    <div class="single-product-card-container">
      <div class="pt-6 mb-4 fs-20 font-weight-700">مشخصات فنی</div>
      <div class="d-flex spec-row">
        <div class="description-title">قیمت</div>
        <div class="description-text">
          {{ data.price }}
        </div>
      </div>

      <div class="d-flex my-3 spec-row">
        <div class="description-title">توضیحات</div>
        <div class="description-text">
          <ul class="mr-4">
            <li
              v-for="item in data.description.split(',')"
              :key="item"
              class="mb-2"
            >
              {{ item }}
            </li>
          </ul>
          {{ data.description }}
        </div>
      </div>

      <div class="d-flex spec-row">
        <div class="description-title">دسته‌بندی</div>
        <div class="description-text">
          {{ data.category }}
        </div>
      </div>

      <div class="d-flex my-3 spec-row">
        <div class="description-title">رتبه</div>
        <div class="description-text">
          {{ data.rating.rate }}
        </div>
      </div>

      <div class="d-flex spec-row">
        <div class="description-title">تعداد</div>
        <div class="description-text">
          {{ data.rating.count }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { data, pending } = await useAsyncData("single-product", () =>
  $fetch(`https://fakestoreapi.com/products/${route.params.id}`)
);
</script>

<style lang="css" scoped>
.single-product-card-container {
  background-color: white;
  border-radius: 24px;
  padding: 0 24px 24px 24px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
}
.description-text,
.description-title {
  background-color: #f5f7fa;
}

.description-title {
  width: 172px;
  border-radius: 4px 16px 16px 4px;
  font-weight: 500;
  font-size: 14px;
  color: #57728e;
  padding: 13px;
  align-content: center;
}

.description-text {
  margin-right: 12px;
  border-radius: 16px 4px 4px 16px;
  width: 100%;
  font-weight: 700;
  font-size: 13px;
  color: #30445b;
  padding: 16px;
}

@media (min-width: 360px) and (max-width: 1028px) {
  .product-image-container-mobile {
    padding: 0 16px 16px 16px;
  }
  .spec-row {
    flex-direction: column;
  }
  .description-title {
    width: 100%;
    border-radius: 16px;
    margin-bottom: 16px;
  }
  .description-text {
    border-radius: 16px;
    margin-right: 0;
  }
}
</style>
