<template>
  <div class="selected-filters-container" v-if="searchQuery">
    <div class="font-weight-500 fs-14 mb-2">فیلترهای اعمال شده</div>
    <div class="d-flex align-center flex-wrap gap-2">
      <div v-if="searchQuery" class="filter-chip">
        <span class="filter-chip-text dark-blue">{{ searchQuery }}</span>
        <v-icon
          size="16"
          class="filter-chip-close gray-500"
          @click="handleClearSearch"
          >mdi-close</v-icon
        >
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  searchQuery: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["clear-search"]);

const handleClearSearch = () => {
  emit("clear-search");
};
</script>
<style scoped>
.selected-filters-container {
  background-color: white;
  min-height: 64px;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.03);
  border-radius: 24px;
  margin-bottom: 24px;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
}

.filter-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #fce5ee;
  border-radius: 16px;
  padding: 6px 12px;
  height: 32px;
}

.filter-chip-text {
  font-size: 12px;
  font-weight: 500;
}

.filter-chip-close {
  cursor: pointer;
  transition: color 0.2s;
}

.filter-chip-close:hover {
  color: #e20054;
}

.gap-2 {
  gap: 8px;
}
</style>
