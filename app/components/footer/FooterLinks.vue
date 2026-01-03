<template>
  <div class="footer-links-container">
    <div class="d-flex flex-column justify-center h-100 pb-5">
      <v-img width="232" />
      <div class="work-time-text">
        هفت روز هفته از ۸ صبح تا ۱۲ شب پاسخگو هستیم
      </div>
    </div>

    <div>
      <div class="footer-links-title">دسترسی سریع</div>
      <div class="footer-link">
        <NuxtLink to="/">درباره ما</NuxtLink>
      </div>

      <div class="footer-link my-3">
        <NuxtLink to="/">بلاگ</NuxtLink>
      </div>

      <div class="footer-link">
        <NuxtLink to="/">تماس باما</NuxtLink>
      </div>

      <div class="footer-link mt-3">
        <NuxtLink to="/">خدمات پس از فروش</NuxtLink>
      </div>
    </div>

    <div>
      <div class="footer-links-title">راهنمای سایت</div>
      <div class="footer-link">
        <NuxtLink to="/">قوانین و مقررات</NuxtLink>
      </div>

      <div class="footer-link my-3">
        <NuxtLink to="/">دریافت مشاوره</NuxtLink>
      </div>

      <div class="footer-link">
        <NuxtLink to="/">انتقادات و پیشنهادات</NuxtLink>
      </div>
    </div>

    <div>
      <div class="footer-links-title">شبکه‌های اجتماعی</div>
      <div class="footer-social-media-link d-flex">
        <div class="d-inline-block">
          <v-img src="/icons/telegramIcon.svg" width="24" height="24" />
        </div>
        <NuxtLink to="/">تلگرام</NuxtLink>
      </div>

      <div class="footer-social-media-link my-3 d-flex">
        <div class="d-inline-block">
          <v-img src="/icons/instagramIcon.svg" width="24" height="24" />
        </div>
        <NuxtLink to="/">اینستاگرام</NuxtLink>
      </div>

      <div class="footer-social-media-link d-flex">
        <div class="d-inline-block">
          <v-img src="/icons/linkedinIcon.svg" width="24" height="24" />
        </div>
        <NuxtLink to="/">لینکدین</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="css">
.footer-links-container {
  height: 264px;
  background-color: white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  display: flex;
  justify-content: space-around;
  align-items: start;
  padding: 40px 200px;
}

.work-time-text {
  color: #445a74;
  font-size: 13px;
  font-weight: 500;
}

.footer-links-title {
  font-size: 20px;
  font-weight: 700;
  color: #253343;
  margin-bottom: 24px;
}

.footer-link a {
  font-size: 13px;
  font-weight: 500;
  color: #30445b;
}

.footer-link a:hover {
  color: #e20054;
}
.footer-social-media-link a {
  font-size: 14px;
  font-weight: 500;
  color: #30445b;
  margin-right: 12px;
  margin-bottom: 16px;
}
</style>
