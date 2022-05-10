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
nav {
    padding: 12px 0;
    transition: .5s ease all;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1140px;) {
        max-width: 1140px;
    }
}

ul,
.link {
    font-weight: 500;
    color: rgb(10, 10, 10);
    list-style: none;
    text-decoration: none;
}

li {
    text-transform: uppercase;
    padding: 16px;
    margin-left: 16px;
}

.link {
    font-size: 14px;
    transition: .5 ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
}

:hover {
    color: #ff4500;
    border-color:#ff4500;
}


</style>

