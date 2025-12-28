<template>
  <div>
    <client-only>
      <LoginDialog v-model="openLoginDialog" />
    </client-only>
    <v-app-bar scroll-behavior="elevate" class="container" height="120">
      <div class="d-flex justify-space-between w-100">
        <div>
          <v-btn>
            <v-img src="/icons/categoryIcon.png" width="16" height="16" />
            <span class="mr-2 dark-blue fs-13">لیست محصولات</span>
          </v-btn>
          <v-btn>
            <v-img src="/icons/bookIcon.svg" width="16" height="16" />
            <span class="mr-2 dark-blue fs-13">دریافت مشاوره</span>
          </v-btn>
          <v-btn>
            <v-img
              src="/icons/messageQuestionIcon.svg"
              width="16"
              height="16"
            />
            <span class="mr-2 dark-blue fs-13">سوالات متداول</span>
          </v-btn>
          <v-btn>
            <v-img src="/icons/phoneIcon.svg" width="16" height="16" />
            <span class="mr-2 dark-blue fs-13">تماس با ما</span>
          </v-btn>
        </div>

        <v-btn
          color="darkPink"
          variant="flat"
          class="border-16 main-header-call-btn"
          height="40"
        >
          <span class="fs-14 font-weight-700 ml-4">تماس </span>
          <v-img src="/icons/phoneIconWhite.svg" width="16" height="16" />
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>
<script setup></script>
<style lang="css">
.container .v-toolbar__content {
  box-shadow: 0px 2px 2px 0px #00000014;
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;
}

.main-header-call-btn {
  padding: 0 26px !important;
}
</style>
