<template>
  <div class="footer-info-container">
    <div class="d-flex w-100 justify-space-between align-center">
      <div></div>
      <div class="text-center align-center">
        <div class="footer-info-text">
          تمامی حقوق مادی و معنوی این وبسایت متعلق به می‌باشد و هر گونه <br />
          کپی برداری پیگرد قانونی دارد.
        </div>
        <div class="mt-4">
          <div class="d-inline-block">
            <v-img
              src="/icons/linkedinIcon.svg"
              width="24"
              height="24"
              class="footer-info-social-media-icon"
            />
          </div>

          <div class="d-inline-block footer-info-youtube-icon mx-4">
            <v-img
              src="/icons/youtubeIcon.svg"
              width="14"
              height="24"
              class="mx-auto"
            />
          </div>

          <div class="d-inline-block footer-info-youtube-icon">
            <v-img
              src="/icons/twitterIcon.svg"
              width="14"
              height="24"
              class="mx-auto"
            />
          </div>

          <div class="d-inline-block mx-4">
            <v-img
              src="/icons/instagramIcon.svg"
              width="24"
              height="24"
              class="footer-info-social-media-icon"
            />
          </div>

          <div class="d-inline-block">
            <v-img
              src="/icons/telegramIcon.svg"
              width="24"
              height="24"
              class="footer-info-social-media-icon"
            />
          </div>
        </div>
      </div>
      <div class="d-flex">
        <div class="footer-info-certificate-container ml-4">
          <v-img
            src="/icons/samandehiIcon.svg"
            width="52"
            height="52"
            class="mx-auto"
          />
        </div>
        <div class="footer-info-certificate-container">
          <v-img
            src="/icons/enamadIcon.svg"
            width="52"
            height="52"
            class="mx-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="css">
.footer-info-container {
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.08);
  background-color: #f8f9fc;
  height: 162px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  margin-top: -10px;
  display: flex;
  align-content: center;
  justify-content: end;
  padding: 0 80px;
}
.footer-info-text {
  font-weight: 700;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: 0%;
  color: #445a74;
}
.footer-info-social-media-icon {
  background-color: #f180a9;
  border-radius: 50%;
}
.footer-info-social-media-icon:hover {
  background-color: #e20054;
}

.footer-info-certificate-container {
  width: 72px;
  height: 72px;
  background-color: white;
  border-radius: 6px;
  align-content: center;
}
.footer-info-youtube-icon:hover {
  background-color: #e20054;
}
.footer-info-youtube-icon {
  width: 24px;
  height: 24px;
  background-color: #f180a9;
  border-radius: 50%;
}
</style>
