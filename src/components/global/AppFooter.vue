<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <footer class="py-20 pb-md-30 bg-neutral-120">
    <div class="container">
      <div class="d-flex flex-column gap-10 gap-md-0 flex-md-row justify-content-md-between align-items-md-center mb-20">
        <div>
          <img
            class="mb-10"
            src="@/assets/images/logo-white.svg"
            alt="logo"
          >
          <div class="d-flex align-items-center gap-4">
            <a
              class="text-neutral-0 border rounded-circle"
              href="#"
            >
              <Icon
                class="p-2 fs-2"
                icon="bi:line"
              />
            </a>
            <a
              class="text-neutral-0 border rounded-circle"
              href="#"
            >
              <Icon
                class="p-2 fs-2"
                icon="mdi:instagram"
              />
            </a>
            <!-- <Icon
              class="p-2 border border-1 rounded-circle"
              icon="mdi:instagram"
            /> -->
          </div>
        </div>
        <div class="d-flex flex-column flex-md-row gap-4 gap-md-20">
          <address class="d-flex flex-column mb-0">
            <p class="mb-4 mb-md-10 fw-bold text-neutral-0">
              TEL
              <a
                class="d-block mt-2 text-neutral-40 fw-medium text-decoration-none"
                href="tel:+886-7-1234567"
              >+886-7-1234567</a>
            </p>

            <p class="mb-0 fw-bold text-neutral-0">
              FAX
              <a
                class="d-block mt-2 text-neutral-40 fw-medium text-decoration-none"
                href="fax:+886-7-1234567"
              >+886-7-1234567</a>
            </p>
          </address>
          <address class="d-flex flex-column mb-0">
            <p class="mb-4 mb-md-10 fw-bold text-neutral-0">
              MAIL
              <a
                class="d-block mt-2 text-neutral-40 fw-medium text-decoration-none"
                href="mailto:elh@hexschool.com"
              >elh@hexschool.com</a>
            </p>

            <p class="mb-0 fw-bold text-neutral-0">
              WEB
              <a
                class="d-block mt-2 text-neutral-40 fw-medium text-decoration-none"
                href="https://www.elhhexschool.com.tw/"
                target="_blank"
              >www.elhhexschool.com.tw</a>
            </p>
          </address>
        </div>
      </div>
      <div class="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center text-neutral-0 fw-medium">
        <address>806023 台灣高雄市新興區六角路123號</address>
        <p>© 享樂酒店 2023 All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>

</style>