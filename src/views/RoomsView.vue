<script setup>

</script>

<template>
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

      <div class="hero-wrapper d-flex flex-column justify-content-center align-items-center flex-md-row gap-10 gap-md-20 w-100 position-absolute">
        <div class="d-flex flex-column align-items-center text-center d-md-block text-md-start">
          <div class="mt-10 mb-5 mt-md-0 mb-md-10 text-primary-100 fw-bold">
            <h2 class="fw-semibold">
              享樂酒店
            </h2>
            <h5 class="fw-semibold">
              Enjoyment Luxury Hotel
            </h5>
          </div>
          <div class="deco-line" />
        </div>
        <h1 class="mb-0 text-neutral-0 fw-bold">
          客房旅宿
        </h1>
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
  xxl: 1400px,
  xxxl: 1537px
);

.hero img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.hero-wrapper {
  inset: 0;
}

.hero__background-overlay {
  position: absolute;
  inset: 0;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.6);
}

.deco-line {
  width: 33vw;
  height: 2px;
  background-image: linear-gradient(to right, #BE9C7C, #FFFFFF);
}

.hero .deco-line {
  @include media-breakpoint-down(md) {
    width: 2px;
    height: 83px;
    z-index: 1;
    background-image: linear-gradient(to bottom, #BE9C7C, #FFF);
    margin-bottom: 2.5rem;
  }
}

</style>