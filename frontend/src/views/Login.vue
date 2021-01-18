<template>
    <div class="main-wrapper pb-0 mb-0">
        <div class="timeline-wrapper">
            <NavLogin></NavLogin>
            <Signup></Signup>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import NavLogin from '@/components/login_nav.vue'
    import Signup from '@/components/signup.vue'

    export default {
        name: 'Login',
        components: {
            'NavLogin': NavLogin,
            'Signup': Signup
        }
    }
</script>
<style lang="scss">
.timeline-wrapper h3{
    color:#ffffff!important
}
.timeline-wrapper .col-lg-6{
    padding: 0!important;
}

</style>