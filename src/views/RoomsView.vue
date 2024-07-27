<script setup>
import { Icon } from '@iconify/vue';
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
            <h5 class="fs-7 fs-md-5 fw-semibold">
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

    <section class="py-10 py-md-30 bg-primary-10">
      <div class="container mb-md-12">
        <h4 class="mb-2 mb-md-4 fs-8 fs-md-6 fw-bold text-neutral-80">
          房型選擇
        </h4>
        <h2 class="mb-10 mb-md-20 fs-1 fw-bold text-primary-100">
          各種房型，任您挑選
        </h2>
        <div class="d-flex flex-column gap-6 gap-md-12">
          <div
            class="card flex-md-row border-0 rounded-3xl"
          >
            <img
              src="@/assets/images/room-a-1.png"
              class="rounded-3xl w-100"
              alt="room-a"
            >
            <div class="card-body p-md-10">
              <h3 class="card-title fs-2 fw-bold text-neutral-100">
                尊爵雙人房
              </h3>
              <p class="card-text mb-6 mb-md-10 fs-8 fs-md-7 fw-medium text-neutral-80">
                享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
              </p>
              <ul class="d-flex gap-4 mb-6 mb-md-10 list-unstyled">
                <li class="card-info px-4 py-5 border border-primary-40 rounded-3">
                  <Icon
                    class="mb-2 fs-5 text-primary-100"
                    icon="fluent:slide-size-24-filled"
                  />
                  <p class="mb-0 fw-bold text-neutral-80 text-nowrap">
                    24 坪
                  </p>
                </li>
                <li class="card-info px-4 py-5 border border-primary-40 rounded-3">
                  <Icon
                    class="mb-2 fs-5 text-primary-100"
                    icon="material-symbols:king-bed"
                  />
                  <p class="mb-0 fw-bold text-neutral-80 text-nowrap">
                    1 張大床
                  </p>
                </li>
                <li class="card-info px-4 py-5 border border-primary-40 rounded-3">
                  <Icon
                    class="mb-2 fs-5 text-primary-100"
                    icon="ic:baseline-person"
                  />
                  <p class="mb-0 fw-bold text-neutral-80 text-nowrap">
                    2-4 人
                  </p>
                </li>
              </ul>
              <div class="deco-line w-100 mb-6 mb-md-10" />
              <div class="d-flex justify-content-between align-items-center fs-7 fs-md-5 text-primary-100">
                <p class="mb-0 fw-bold">
                  NT$ 10,000
                </p>
                <Icon
                  class="fs-5"
                  icon="mdi:arrow-right"
                />
              </div>
            </div>
          </div>

          <div
            class="card flex-md-row border-0 rounded-3xl"
          >
            <img
              src="@/assets/images/room-b-1.png"
              class="rounded-3xl w-100"
              alt="room-b"
            >
            <div class="card-body p-md-10">
              <h3 class="card-title fs-2 fw-bold text-neutral-100">
                景觀雙人房
              </h3>
              <p class="card-text mb-6 mb-md-10 fs-8 fs-md-7 fw-medium text-neutral-80">
                景觀雙人房擁有絕美的高雄市景觀，讓您在舒適的環境中欣賞城市之美。
              </p>
              <ul class="d-flex gap-4 mb-6 mb-md-10 list-unstyled">
                <div class="card-info px-4 py-5 border border-primary-40 rounded-3">
                  <Icon
                    class="mb-2 fs-5 text-primary-100"
                    icon="fluent:slide-size-24-filled"
                  />
                  <p class="mb-0 fw-bold text-neutral-80 text-nowrap">
                    28 坪
                  </p>
                </div>
                <div class="card-info px-4 py-5 border border-primary-40 rounded-3">
                  <Icon
                    class="mb-2 fs-5 text-primary-100"
                    icon="material-symbols:king-bed"
                  />
                  <p class="mb-0 fw-bold text-neutral-80 text-nowrap">
                    1 張大床
                  </p>
                </div>
                <div class="card-info px-4 py-5 border border-primary-40 rounded-3">
                  <Icon
                    class="mb-2 fs-5 text-primary-100"
                    icon="ic:baseline-person"
                  />
                  <p class="mb-0 fw-bold text-neutral-80 text-nowrap">
                    2-4 人
                  </p>
                </div>
              </ul>
              <div class="deco-line w-100 mb-6 mb-md-10" />
              <div class="d-flex justify-content-between align-items-center fs-7 fs-md-5 text-primary-100">
                <p class="mb-0 fw-bold">
                  NT$ 10,000
                </p>
                <Icon
                  class="fs-5"
                  icon="mdi:arrow-right"
                />
              </div>
            </div>
          </div>

          <div
            class="card flex-md-row border-0 rounded-3xl"
          >
            <img
              src="@/assets/images/room-c-1.png"
              class="rounded-3xl w-100"
              alt="room-c"
            >
            <div class="card-body p-md-10">
              <h3 class="card-title fs-2 fw-bold text-neutral-100">
                豪華雅緻房
              </h3>
              <p class="card-text mb-6 mb-md-10 fs-8 fs-md-7 fw-medium text-neutral-80">
                享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
              </p>
              <ul class="d-flex gap-4 mb-6 mb-md-10 list-unstyled">
                <li class="card-info px-4 py-5 border border-primary-40 rounded-3">
                  <Icon
                    class="mb-2 fs-5 text-primary-100"
                    icon="fluent:slide-size-24-filled"
                  />
                  <p class="mb-0 fw-bold text-neutral-80 text-nowrap">
                    36 坪
                  </p>
                </li>
                <li class="card-info px-4 py-5 border border-primary-40 rounded-3">
                  <Icon
                    class="mb-2 fs-5 text-primary-100"
                    icon="material-symbols:king-bed"
                  />
                  <p class="mb-0 fw-bold text-neutral-80 text-nowrap">
                    2 張大床
                  </p>
                </li>
                <li class="card-info px-4 py-5 border border-primary-40 rounded-3">
                  <Icon
                    class="mb-2 fs-5 text-primary-100"
                    icon="ic:baseline-person"
                  />
                  <p class="mb-0 fw-bold text-neutral-80 text-nowrap">
                    2-4 人
                  </p>
                </li>
              </ul>
              <div class="deco-line w-100 mb-6 mb-md-10" />
              <div class="d-flex justify-content-between align-items-center fs-7 fs-md-5 text-primary-100">
                <p class="mb-0 fw-bold">
                  NT$ 10,000
                </p>
                <Icon
                  class="fs-5"
                  icon="mdi:arrow-right"
                />
              </div>
            </div>
          </div>

          <div
            class="card flex-md-row border-0 rounded-3xl"
          >
            <img
              src="@/assets/images/room-d-1.png"
              class="rounded-3xl w-100"
              alt="room-d"
            >
            <div class="card-body p-md-10">
              <h3 class="card-title fs-2 fw-bold text-neutral-100">
                景觀尊榮家庭房
              </h3>
              <p class="card-text mb-6 mb-md-10 fs-8 fs-md-7 fw-medium text-neutral-80">
                景觀尊榮家庭房不僅有寬敞的空間，還有絕美的市景視野，是帶給家庭最尊榮的待遇。
              </p>
              <ul class="d-flex gap-4 mb-6 mb-md-10 list-unstyled">
                <div class="card-info px-4 py-5 border border-primary-40 rounded-3">
                  <Icon
                    class="mb-2 fs-5 text-primary-100"
                    icon="fluent:slide-size-24-filled"
                  />
                  <p class="mb-0 fw-bold text-neutral-80 text-nowrap">
                    48 坪
                  </p>
                </div>
                <div class="card-info px-4 py-5 border border-primary-40 rounded-3">
                  <Icon
                    class="mb-2 fs-5 text-primary-100"
                    icon="material-symbols:king-bed"
                  />
                  <p class="mb-0 fw-bold text-neutral-80 text-nowrap">
                    2 張大床
                  </p>
                </div>
                <div class="card-info px-4 py-5 border border-primary-40 rounded-3">
                  <Icon
                    class="mb-2 fs-5 text-primary-100"
                    icon="ic:baseline-person"
                  />
                  <p class="mb-0 fw-bold text-neutral-80 text-nowrap">
                    2-4 人
                  </p>
                </div>
              </ul>
              <div class="deco-line w-100 mb-6 mb-md-10" />
              <div class="d-flex justify-content-between align-items-center fs-7 fs-md-5 text-primary-100">
                <p class="mb-0 fw-bold">
                  NT$ 10,000
                </p>
                <Icon
                  class="fs-5"
                  icon="mdi:arrow-right"
                />
              </div>
            </div>
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

.rounded-3xl {
  border-radius: 1.25rem;
}

img.rounded-3xl {
  border-radius: 0;
  border-bottom-left-radius: 1.25rem;
  border-top-left-radius: 1.25rem;

  @include media-breakpoint-down(md) {
    border-top-right-radius: 1.25rem;
    border-bottom-left-radius: 0;
  }
}

.card-info {
  width: 97px;
  height: 97px;
}

.card img {
  max-width: 773px;
  object-fit: cover;
}

</style>