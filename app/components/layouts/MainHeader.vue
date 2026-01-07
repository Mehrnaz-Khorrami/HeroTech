<template>
  <div class="main-header-container">
    <client-only>
      <LoginDialog v-model="openLoginDialog" />
    </client-only>
    <v-app-bar scroll-behavior="elevate" class="container" >
      <div class="main-header-mobile-content">
        <v-btn
          variant="outlined"
          height="40"
          width="40"
          icon
          color="dark-pink"
          class="hamburger-menu-btn"
        >
          <v-icon size="16">mdi-menu</v-icon>
        </v-btn>
        <v-btn
          variant="outlined"
          height="40"
          width="40"
          icon
          color="dark-pink"
          class="hamburger-menu-btn"
        >
          <v-img src="/icons/phonePinkIcon.svg" width="16" height="16" />
        </v-btn>
      </div>
      <div
        class="d-flex justify-space-between w-100 main-header-content-desktop"
      >
        <div>
          <v-btn to="/products">
            <v-img src="/icons/categoryIcon.svg" width="16" height="16" />
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
  margin: 0 auto;
  padding: 0 164px !important;
  height: 120px !important;
}
.container {
  border-bottom-right-radius: 32px !important;
  border-bottom-left-radius: 32px !important;
  
}
.main-header-call-btn {
  padding: 0 26px !important;
}
.main-header-mobile-content {
  display: none;
}

  @media (min-width: 360px) and (max-width: 1028px) {
    .main-header-mobile-content {
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
      width: 100% !important;
    }
    .main-header-content-desktop {
      display: none !important;
    }
    .container .v-toolbar__content {
      height: 72px !important;
      border-bottom-right-radius: 16px !important;
      border-bottom-left-radius: 16px !important;
      width: 100% !important;
      padding: 0 16px !important;
    }
    .container {
      border-bottom-right-radius: 16px !important;
      border-bottom-left-radius: 16px !important;
    }
    .hamburger-menu-btn {
      border-radius: 8px !important;
    }
  }

  @media (min-width: 1028px) and (max-width: 1440px) {
    .container .v-toolbar__content {
      padding: 0 80px !important;
    }
  }
</style>
