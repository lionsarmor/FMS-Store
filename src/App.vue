<template>
<div>
    <navbar />
    <router-view />
    <bottomfooter style="margin-top:20px;" />
</div>
</template>

<script>
import navbar from "./components/navbar.vue";
import Bottomfooter from './components/Bottomfooter.vue';

export default {
    name: 'App',
    components: {
        navbar,
        Bottomfooter,
    },

    data() {
        return {}
    },
    methods: {

    },
}
</script>
<style scoped>
.footer {
    margin-top:10vh;
}
</style>
