<template>
  <aside class="fixed z-50 lg:z-0 lg:static">
    <div class="h-full overflow-auto pointer-events-none lg:overflow-visible">
      <div
        class="
          hidden
          lg:block
          fixed
          top-0
          left-0
          overflow-auto
          pointer-events-auto
          min-h-fill
          h-screen
          sticky
          top-header
          w-60
        "
      >
        <div class="w-auto h-full overflow-auto">
          <nav
            class="
              flex flex-col
              justify-start
              max-w-sm
              overflow-y-auto
              text-sm
              font-medium
              lg:h-[reset]
              d-scrollbar
              py-4
              px-4
              sm:px-6
              lg:pr-0 lg:pt-8
            "
          >
            <ul>
              <li v-for="i in 20" :key="i" class="active">
                Template Component
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </aside>
</template>

<style>
.top-header {
  top: 4.5rem;
  min-height: -webkit-fill-available;
}
.dark .d-scrollbar {
    --scrollbar-thumb: #255461;
}
.d-scrollbar {
  --scrollbar-track: initial;
  --scrollbar-thumb: initial;
  scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
  overflow: overlay;
  scrollbar-width: thin;
  --scrollbar-thumb: #e4e4e7;
}
</style>
