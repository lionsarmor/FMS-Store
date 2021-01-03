<template>
<div class="home">
    <br />
    <br />
    <div class="container">
        <div class="jumbotron" style="padding-top: 5vh;">
            <h1 class="display-4">New Developments!</h1>
            <p class="lead">Here are the Latest Products from Faceless Mirage Studio.</p>
            <hr class="my-4" />
            <br />
            <br />
            <!-- EDIT JUMBOTRON HERE-->
            <ul>
                <li>Shirts</li>
                <li>Mugs</li>
                <li>Custom Items</li>
            </ul>
            <!-- *************************************-->
            <router-link to="/shop"><a class="btn btn-warning btn-lg" href="#" role="button">Shop</a></router-link>
        </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
</div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Home',
    components: {

    }
}
</script>
        
<style scoped>
#footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 4rem;
    /* Footer height */
}
</style>
