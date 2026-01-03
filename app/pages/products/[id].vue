<template>
  <div>
    <div class="single-product-card-container mb-6">
      <div class="fs-18 font-weight-700 pt-8 mb-6">{{ data.title }}</div>
      <v-img :src="data.image" width="100%" height="310" class="ma-2" />
    </div>

    <div class="single-product-card-container">
      <div class="pt-6 mb-4 fs-20 font-weight-700">مشخصات فنی</div>
      <div class="d-flex">
        <div class="description-title">قیمت</div>
        <div class="description-text">
          {{ data.price }}
        </div>
      </div>

      <div class="d-flex my-3">
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

      <div class="d-flex">
        <div class="description-title">دسته‌بندی</div>
        <div class="description-text">
          {{ data.category }}
        </div>
      </div>

      <div class="d-flex my-3">
        <div class="description-title">رتبه</div>
        <div class="description-text">
          {{ data.rating.rate }}
        </div>
      </div>

      <div class="d-flex">
        <div class="description-title">تعداد</div>
        <div class="description-text">
          {{ data.rating.count }}
        </div>
      </div>
      <!-- <div class="specs-wrapper d-flex">
        <div class="spec-value">
          <p>توضیحات</p>
        </div>
        <div class="spec-label">
          {{ data.description }}
        </div>
      </div> -->
      <!-- <div class="d-flex align-center">
        <div>

          <div class="description-title">قیمت</div>
          <div class="description-title my-3">توضیحات</div>
          <div class="description-title">دسته‌بندی</div>
          <div class="description-title my-3">رتبه</div>
          <div class="description-title">تعداد</div>
        </div>
        <div>

            <div class="description-text">{{data.price}}</div>
            <div class="description-text my-3">{{data.description}}</div>
            <div class="description-text">{{data.category}}</div>
            <div class="description-text my-3">{{data.rating.rate}}</div>
            <div class="description-text">{{data.rating.count}}</div>
        </div>
      </div> -->
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

/* .spec-label {
  min-width: 140px;
  background: #f5f7fa;
  border-radius: 16px;
  padding: 16px;
  text-align: center;
  font-weight: 500;
  color: #6b7280;
  margin-right: 12px;
}

.spec-value {
  flex: 1;
  background: #f5f7fa;
  border-radius: 16px;
  padding: 16px 20px;
  color: #374151;
  line-height: 1.9;
} */
</style>
