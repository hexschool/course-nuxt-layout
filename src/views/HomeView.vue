<script setup>
import AppHeader from '@/components/global/AppHeader.vue';
</script>

<template>
  <AppHeader />
  <main>
    <section class="hero position-relative">
      <picture class="position-relative z-n1">
        <source
          srcset="@/assets/images/home-hero.png"
          media="(min-width:576px)"
        >
        <img
          class="hero-img"
          src="@/assets/images/home-hero-sm.png"
          alt="hero banner"
        >
      </picture>
      <div class="hero__background-overlay" />

      <div class="hero-wrapper d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-md-between gap-md-10 w-100 position-absolute px-md-20">
        <div class="d-flex flex-column align-items-center text-center d-md-block text-md-start">
          <div class="mt-10 mb-5 mt-md-0 mb-md-10 text-primary-100 fw-bold">
            <h2 class="fw-semibold">
              享樂酒店
            </h2>
            <h5 class="fw-semibold">
              Enjoyment Luxury Hotel
            </h5>
          </div>
          <div class="hero__deco-line" />
        </div>
        <div class="hero__intro position-relative">
          <div class="hero__intro-content">
            <h1 class="mb-6 text-white">
              高雄
              <div class="text-nowrap">
                豪華住宿之選
              </div>
            </h1>
            <p class="text-neutral-40 fw-medium">
              我們致力於為您提供無與倫比的奢華體驗與優質服務
            </p>
            <RouterLink class="btn btn-neutral-0 d-flex justify-content-end align-items-center gap-3 w-100 text-end text-neutral-100 fs-5 fw-semibold border-0">
              立即訂房
              <div class="hero__cta-deco" />
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import "bootstrap/scss/mixins/breakpoints";

$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);

.hero img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.hero-wrapper {
  inset: 0;
}

.hero__intro {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: clamp(291px, 48vw, 924px);
  max-height: min(62vh, 672px);
  padding: 5.5%;
  background-image: linear-gradient(to bottom, #FFFFFF00, #FFFFFF4D);
  border-width: 1px 1px 0px 0px;
  border-style: solid;
  border-color: #F5F7F9;
  border-radius: 80px;
  backdrop-filter: blur(6px);

  @include media-breakpoint-down(md) {
    transform: translateX(10%);
    height: 420px;
  }
}

.hero__intro-content {
  max-width: 39vw;
  transform: translateX(-18%);

  @include media-breakpoint-down(md) {
    max-width: none;
    transform: translateX(-11%);
  }
}

.hero__intro-content h1 {
  font-size: clamp(3rem, 5.2vw, 6.25rem);
}
.hero__intro-content p {
  font-size: clamp(1rem, 1.7vw, 2rem);
  margin-bottom: min(5vh, 3.75rem);
  white-space: nowrap;

  @include media-breakpoint-down(md) {
    white-space: normal;
  }
}

.hero__intro-content .btn {
  --primary: #BF9D7D;
  --neutral: #FFFFFF;
  height: clamp(4rem, 12vh, 7.25rem);
  padding: 5%;

  &:hover {
    box-shadow: inset 48vw 0 0 0 var(--primary);
    color: var(--neutral) !important;
    transition-duration: 0.25s;

    .hero__cta-deco {
      background-color: var(--neutral) !important;
      width: 8vw;
    }
  }

  @include media-breakpoint-down(md) {
    height: 4rem;
  }
}

.hero__cta-deco {
  width: 10vw;
  height: 1px;
  background-color: #000;
  transition: background-color 0.25s ease-in-out, width 0.25s ease-in-out;

  @include media-breakpoint-down(md) {
    width: 5rem;
  }
}

.hero__background-overlay {
  position: absolute;
  inset: 0;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.6);
}

.hero__deco-line {
  width: 33vw;
  height: 2px;
  background-image: linear-gradient(to right, #BE9C7C, #FFFFFF);

  @include media-breakpoint-down(md) {
    width: 2px;
    height: 83px;
    z-index: 1;
    background-image: linear-gradient(to bottom, #BE9C7C, #FFF);
    margin-bottom: 2.5rem;
  }
}



</style>
