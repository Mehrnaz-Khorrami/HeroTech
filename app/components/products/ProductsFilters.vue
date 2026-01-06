<template>
  <div>
    <div
      class="products-filters-container products-filters-search-card-container"
    >
      <div class="fs-13 font-weight-500 mb-4 gray-700">فیلتر و جستجو</div>
      <v-text-field
        rounded="lg"
        variant="outlined"
        density="compact"
        class="custom-text-field"
        clearable
        hide-details
        clear-icon="mdi-close"
      >
        <template #prepend-inner>
          <v-icon size="20">mdi-magnify</v-icon>
        </template>
      </v-text-field>
      <v-btn
        variant="flat"
        height="40"
        color="#E20054"
        block
        class="fs-12 font-weight-700 search-button"
        >جستجو</v-btn
      >
    </div>

    <v-expansion-panels
      class="my-4 products-filters-container custom-panels"
      flat
    >
      <v-expansion-panel>
        <template #title>
          <span class="fs-13 font-weight-500 gray-700">مرتب سازی</span>
        </template>
        <template #text>
          <v-radio-group>
            <v-radio value="one" size="small" color="#E20054">
              <template #label>
                <span class="gray-500 font-weight-500 fs-12"
                  >تعداد: کم به زیاد</span
                >
              </template>
            </v-radio>
            <v-radio value="two" color="#E20054">
              <template #label>
                <span class="gray-500 font-weight-500 fs-12"
                  >تعداد: زیاد به کم</span
                >
              </template>
            </v-radio>
            <v-radio value="three" color="#E20054">
              <template #label>
                <span class="gray-500 font-weight-500 fs-12"
                  >رتبه: زیاد به کم</span
                >
              </template>
            </v-radio>
            <v-radio value="four" color="#E20054">
              <template #label>
                <span class="gray-500 font-weight-500 fs-12"
                  >رتبه: کم به زیاد</span
                >
              </template>
            </v-radio>
          </v-radio-group>
        </template>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels class="products-filters-container custom-panels" flat>
      <v-expansion-panel>
        <template #title>
          <span class="fs-13 font-weight-500 gray-700">دسته بندی</span>
        </template>
        <template #text>
          <div class="d-flex align-center">
            <div
              class="checkbox-filter-container"
              @click="toggleCheckbox('one')"
              :class="{ active: isChecked('one') }"
            >
              <v-icon size="12" color="white">mdi-check</v-icon>
            </div>
            <div class="gray-500 font-weight-500 fs-12 mr-2">
              مسکن و ساختمان
            </div>
          </div>

          <div class="d-flex align-center my-5">
            <div
              class="checkbox-filter-container"
              @click="toggleCheckbox('two')"
              :class="{ active: isChecked('two') }"
            >
              <v-icon size="12" color="white">mdi-check</v-icon>
            </div>
            <div class="gray-500 font-weight-500 fs-12 mr-2">
              بهداشت و درمان
            </div>
          </div>

          <div class="d-flex align-center mb-5">
            <div
              class="checkbox-filter-container"
              @click="toggleCheckbox('three')"
              :class="{ active: isChecked('three') }"
            >
              <v-icon size="12" color="white">mdi-check</v-icon>
            </div>
            <div class="gray-500 font-weight-500 fs-12 mr-2">
              صنعتی و کارخانه
            </div>
          </div>
        </template>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script setup>
const checked = ref([]);
const isChecked = (value) => {
  return checked.value.includes(value);
};
const toggleCheckbox = (value) => {
  if (checked.value.includes(value)) {
    checked.value = checked.value.filter((item) => item !== value);
  } else {
    checked.value.push(value);
  }
};
</script>
<style lang="css">
.products-filters-container {
  background-color: white;
  border-radius: 24px;
  padding: 16px;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.03);
}
.products-filters-search-card-container {
  height: 160px;
}
.custom-text-field .v-field {
  border-radius: 12px !important;
  min-height: 40px;
}

.custom-text-field .v-field__input {
  min-height: 40px;
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  align-items: center;
}
.custom-text-field .v-field--focused .v-field__outline__notch,
.custom-text-field .v-field--focused .v-field__outline__start,
.custom-text-field .v-field--focused .v-field__outline__end {
  border-color: #e20054;
}
.custom-text-field .v-field__clearable .v-icon {
  font-size: 16px;
  width: 16px;
  height: 16px;
}
.search-button {
  border-radius: 12px !important;
  margin-top: 16px;
}
.custom-panels .v-expansion-panel {
  border-radius: 16px;
  overflow: hidden;
}
.custom-panels .v-expansion-panel-text__wrapper {
  padding: 0 24px;
}

.checkbox-filter-container {
  border-radius: 4px;
  border: 2px solid #b2c2d6;
  width: 20px !important;
  height: 20px !important     ;
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkbox-filter-container.active {
  background-color: #e20054;
  border: 2px solid #e20054;
  border-radius: 4px;
  width: 20px !important;
  height: 20px !important;
}
</style>
