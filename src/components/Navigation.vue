<template>
    <header :class="{ 'scrolled-nav': scrollPosition }">
        <nav>
            <div class="branding">
                <img scr="" alt="">
            </div>
            <ul v-show="!mobile" class="navigation">
                <li><router-link class="link" :to="{ name: 'Home' }">Home</router-link ></li>
                <li><router-link class="link" :to="{ name: 'About' }">About</router-link ></li>
                <li><router-link class="link" :to="{ name: 'Teaching' }">Teaching</router-link ></li>
                <li><router-link class="link" :to="{ name: 'Discography' }">Discography</router-link ></li>
                <li><router-link class="link" :to="{ name: 'Events' }">Events</router-link ></li>
                <li><router-link class="link" :to="{ name: 'Gallery' }">Gallery</router-link ></li>
                <li><router-link class="link" :to="{ name: 'EPK' }">EPK</router-link ></li>
                <li><router-link class="link" :to="{ name: 'Store' }">Store</router-link ></li>
                <li><router-link class="link" :to="{ name: 'Contact' }">Contact</router-link ></li>
            </ul>
            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active' : mobileNav}"></i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li><router-link class="link" :to="{ name: 'Home' }">Home</router-link ></li>
                    <li><router-link class="link" :to="{ name: 'About' }">About</router-link ></li>
                    <li><router-link class="link" :to="{ name: 'Teaching' }">Teaching</router-link ></li>
                    <li><router-link class="link" :to="{ name: 'Discography' }">Discography</router-link ></li>
                    <li><router-link class="link" :to="{ name: 'Events' }">Events</router-link ></li>
                    <li><router-link class="link" :to="{ name: 'Gallery' }">Gallery</router-link ></li>
                    <li><router-link class="link" :to="{ name: 'EPK' }">EPK</router-link ></li>
                    <li><router-link class="link" :to="{ name: 'Store' }">Store</router-link ></li>
                    <li><router-link class="link" :to="{ name: 'Contact' }">Contact</router-link ></li>
                </ul>
            </transition>
        </nav>
    </header>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>

