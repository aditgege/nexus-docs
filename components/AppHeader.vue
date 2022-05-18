<script>
</script>

<template>
  <header class="d-header shadow-sm dark:bg-gray-9 bg-white">
    <div class="flex items-center h-full px-1 mx-auto max-w-7xl sm:px-3 lg:px-6">
      <div class="flex items-center flex-1 justify-center lg:justify-start">
        <Logo />
      </div>
      <nav class="items-center justify-center hidden h-full lg:flex " />
      <div>
        <a i-carbon-logo-github href="https://github.com/antfu/vitesse-nuxt3" target="_blank" />
        <DarkToggle />
      </div>
    </div>
  </header>
</template>

<style >
.d-header {
  border-style: none;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  --tw-bg-opacity: 1;
  --tw-bg-opacity: 0.8;
  height: 4.5rem;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  width: 100%;
  z-index: 50;
}
</style>
