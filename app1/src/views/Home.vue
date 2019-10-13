<template>
    <div class="home">
        <div>
            <img alt="Vue logo" src="../assets/logo.png">
        </div>
        <hello-world></hello-world>
        <router-link to="/app2/about">App2's about page. from app1</router-link>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'home',
        components: {
            HelloWorld
        }
    }
</script>
