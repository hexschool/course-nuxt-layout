<script setup>
import AppHeader from '@/components/global/AppHeader.vue';
</script>

<template>
  <AppHeader />
  <main class="overflow-hidden">
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
          <div class="deco-line" />
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
              <div class="cta-deco" />
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="news bg-primary-10 py-20 py-md-30">
      <div class="container position-relative">
        <div class="row">
          <div class="col-12 col-md-2">
            <div class="mb-10 mb-md-0">
              <h2 class="mb-6 mb-md-10 fs-1 fw-bold text-primary-100">
                最新
                <div>消息</div>
              </h2>
              <div class="deco-line" />
            </div>
          </div>
          <div class="col-12 col-md-10 d-flex flex-column gap-10">
            <div
              class="card bg-transparent border-0"
            >
              <div class="d-flex flex-column flex-md-row align-items-center gap-6">
                <picture>
                  <source
                    srcset="@/assets/images/home-news-1.png"
                    media="(min-width: 576px)"
                  >
                  <img
                    src="@/assets/images/home-news-sm-1.png"
                    class="w-100 rounded-3"
                    alt="可看見海景及泳池的套房"
                  >
                </picture>
                <div class="card-body p-0">
                  <h3 class="card-title mb-2 mb-md-6 fw-bold">
                    秋季旅遊，豪華享受方案
                  </h3>
                  <p class="card-text text-neutral-80">
                    秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。
                  </p>
                </div>
              </div>
            </div>

            <div
              class="card bg-transparent border-0"
            >
              <div class="d-flex flex-column flex-md-row align-items-center gap-6">
                <picture>
                  <source
                    srcset="@/assets/images/home-news-2.png"
                    media="(min-width: 576px)"
                  >
                  <img
                    src="@/assets/images/home-news-sm-2.png"
                    class="w-100 rounded-3"
                    alt="在雙人床上的兩顆灰色枕頭"
                  >
                </picture>
                <div class="card-body p-0">
                  <h3 class="card-title mb-2 mb-md-6 fw-bold">
                    輕鬆住房專案
                  </h3>
                  <p class="card-text text-neutral-80">
                    我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。
                  </p>
                </div>
              </div>
            </div>

            <div
              class="card bg-transparent border-0"
            >
              <div class="d-flex flex-column flex-md-row align-items-center gap-6">
                <picture>
                  <source
                    srcset="@/assets/images/home-news-3.png"
                    media="(min-width: 576px)"
                  >
                  <img
                    src="@/assets/images/home-news-sm-3.png"
                    class="w-100 rounded-3"
                    alt="坐在沙發上的聖誕麋鹿玩偶"
                  >
                </picture>
                <div class="card-body p-0">
                  <h3 class="card-title mb-2 mb-md-6 fw-bold">
                    耶誕快樂，住房送禮
                  </h3>
                  <p class="card-text text-neutral-80">
                    聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about position-relative z-n1 bg-neutral-120 py-20 py-md-30">
      <div class="container p-0">
        <div class="about-content p-6 p-md-20 mt-10 ms-10 me-5 mt-md-20 mx-md-auto text-neutral-0">
          <div class="d-flex align-items-center gap-10 mb-10 mb-md-20">
            <h2 class="text-nowrap mb-0 fs-1 fw-bold">
              關於
              <div>我們</div>
            </h2>
            <div class="deco-line" />
          </div>
          <div class="d-flex flex-column gap-4 gap-md-10 fw-medium">
            <p class="mb-0">
              享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。
              <br>
              我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
            </p>
            <p class="mb-0">
              我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。
              <br>
              我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
            </p>
            <p class="mb-0">
              在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。
            </p>
            <p class="mb-0">
              享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。
            </p>
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

section .btn {
  --primary: #BF9D7D;
  --neutral: #FFFFFF;
  height: clamp(4rem, 12vh, 7.25rem);
  padding: 5%;

  &:hover {
    box-shadow: inset 48vw 0 0 0 var(--primary);
    color: var(--neutral) !important;
    transition-duration: 0.25s;

    .cta-deco {
      background-color: var(--neutral) !important;
      width: 8vw;
    }
  }

  @include media-breakpoint-down(md) {
    height: 4rem;
  }
}

.cta-deco {
  width: 10vw;
  height: 1px;
  background-color: #000;
  transition: background-color 0.25s ease-in-out, width 0.25s ease-in-out;

  @include media-breakpoint-down(md) {
    width: 5rem;
  }
}

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

.news .deco-line {
  width: 140px;
}

.news picture {
  --parent-witdh: 1076;
  --width: 474;
  --percent-width: calc(var(--width) / var(--parent-witdh) * 100%);
  width: var(--percent-width);
  flex-shrink: 0;

  @include media-breakpoint-down(md) {
    width: 100%;
  }
}

.news .container::before {
  background-image: url('@/assets/images/deco-dot-group.svg');
  content: '';
  display: block;
  position: absolute;
  top: -20px;
  right: -120px;
  width: 200px;
  height: 200px;

  @include media-breakpoint-down(md) {
    background-image: url('@/assets/images/deco-dot-group-sm.svg');
    width: 100px;
    height: 100px;
    top: -40px;
    right: 24px;
  }
}

.news .container::after {
  background-image: url('@/assets/images/deco-dot-group.svg');
  content: '';
  display: block;
  position: absolute;
  bottom: -200px;
  left: -100px;
  width: 200px;
  height: 200px;

  @include media-breakpoint-down(md) {
    background-image: url('@/assets/images/deco-dot-group-sm.svg');
    width: 100px;
    height: 100px;
    bottom: -140px;
    left: 24px;
  }
}


.about {
  background-image: url('@/assets/images/home-about.png');
  height: 992px;
  background-position-y: 120px;
  background-repeat: no-repeat;

  @include media-breakpoint-down(md) {
    background-position-y: 80px;
    height: 794px;
  }
}

.about-content {
  max-width: 1044px;
  background-image: linear-gradient(180deg, rgba(20, 15, 10, 0.8) 0%, rgba(190, 156, 124, 0.8) 100%);
  backdrop-filter: blur(10px);
  border-width: 0px 0px 1px 1px;
  border-style: solid;
  border-color: #FFFFFF;
  border-radius: 80px 80px 0px 80px;
  transform: translateX(7vw);

  @include media-breakpoint-down(md) {
    height: 594px;
    border-radius: 40px 40px 0px 40px;
    transform: none;
  }
}

.about-content .deco-line {
  width: 165px;
  background: #fff;

  @include media-breakpoint-down(md) {
    width: 161px;
  }
}

.about-content p {

  @include media-breakpoint-down(md) {
    font-size: 14px;
  }
}


</style>
