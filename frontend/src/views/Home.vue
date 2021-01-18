<template>
  <div>
    <Header></Header>
    <feed></feed>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header.vue'
import feed from '@/components/feed.vue'

export default {
  name: 'Home',
  components: {
    'Header':Header,
    'feed':feed
  }
}
</script>
