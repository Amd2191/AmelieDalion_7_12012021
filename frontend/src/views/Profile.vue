<template>
  <div>
    <Header></Header>
    <profile></profile>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header.vue'
import profile from '@/components/profile.vue'

export default {
  name: 'Home',
  components: {
    'Header':Header,
    'profile':profile
  }
}
</script>