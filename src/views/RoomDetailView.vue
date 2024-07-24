<script setup>

</script>

<template>
  <main class="overflow-hidden pt-30 bg-neutral-100">
    <section class="py-md-20 bg-primary-10">
      <div
        class="d-none d-md-block position-relative container-fluid mx-md-auto"
        style="max-width: 91.7vw;"
      >
        <div class="d-flex gap-2 rounded-3xl overflow-hidden">
          <div style="width: 52.5vw;">
            <img
              class="w-100"
              src="@/assets/images/room-a-1.png"
              alt="room-a-1"
            >
          </div>
          <div
            class="d-flex flex-wrap gap-md-2"
            style="width: 42.5vw;"
          >
            <div class="d-flex gap-md-2">
              <img
                class="w-50"
                src="@/assets/images/room-a-2.png"
                alt="room-a-2"
              >
              <img
                class="w-50"
                src="@/assets/images/room-a-3.png"
                alt="room-a-3"
              >
            </div>
            <div class="d-flex gap-md-2">
              <img
                class="w-50"
                src="@/assets/images/room-a-4.png"
                alt="room-a-4"
              >
              <img
                class="w-50"
                src="@/assets/images/room-a-5.png"
                alt="room-a-5"
              >
            </div>
          </div>
        </div>
        <button
          class="position-absolute btn btn-primary-10 px-8 py-4 me-3 text-primary-100 border-primary-100 fw-bold rounded-3"
          style="bottom: 40px; right: 40px;"
          type="button"
        >
          看更多
        </button>
      </div>
      <div class="d-md-none position-relative">
        <img
          class="img-fluid"
          src="@/assets/images/room-a-1.png"
          alt="room-a-1"
        >
        <button
          class="position-absolute btn btn-primary-10 px-8 py-4 me-3 text-primary-100 border-primary-100 fw-bold rounded-3"
          style="bottom: 23px; right: 12px;"
          type="button"
        >
          看更多
        </button>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.rounded-3xl {
  border-radius: 1.25rem;
}
</style>