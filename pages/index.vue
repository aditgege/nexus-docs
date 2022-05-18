<script>
// useHead({
//   script: [
//     {
//       src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
//     },
//   ],
// })
</script>

<template>
  <div class="">
    <Logos v-for="i in 80" :key="i" mb-6 />
    <Suspense>
      <PageView />
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry />
  </div>
</template>
