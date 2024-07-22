<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue';

import 'bootstrap/js/dist/collapse';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
})

</script>

<template>
  <header
    :class="{'scrolled': isScrolled}"
    class="position-fixed z-3 w-100"
  >
    <nav class="navbar navbar-expand-md p-0 mx-3 my-4 mx-md-20 my-md-6">
      <div class="container-fluid justify-content-between p-0">
        <RouterLink
          class="navbar-brand p-0"
          to="/"
        >
          <img
            src="@/assets/images/logo-white.svg"
            alt="logo"
            class="logo img-fluid"
          >
        </RouterLink>
        <button
          class="navbar-toggler collapsed p-2 text-white border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Icon
            class="fs-1"
            icon="mdi:close"
          />
          <Icon
            class="fs-5"
            icon="mdi:menu"
          />
        </button>
        <div
          id="navbar"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav gap-4 ms-auto fw-bold">
            <li class="nav-item">
              <RouterLink
                to="/"
                class="nav-link p-4 text-neutral-0"
              >
                客房旅宿
              </RouterLink>
            </li>
            <li class="d-none d-md-block nav-item">
              <RouterLink
                to="/"
                class="nav-link d-flex gap-2 p-4 text-neutral-0"
              >
                <Icon 
                  class="fs-5"
                  icon="mdi:account-circle-outline"
                />
                Jessica
              </RouterLink>
            </li>
            <li class="d-md-none nav-item">
              <RouterLink
                to="/"
                class="nav-link p-4 text-neutral-0"
              >
                會員登入
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink
                to="/"
                class="btn btn-primary-100 px-8 py-4 text-white fw-bold border-0 rounded-3"
              >
                立即訂房
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.logo {
  max-width: 27vw;
}

.navbar {
  transition: transform .3s;
}

header {
  transition: background-color .3s;
}

header.scrolled {
  background-color: #000;
}

@media (min-width: 768px) {
  header.scrolled {
    .navbar {
      transform: scale(0.95);
    }
  }
}


</style>