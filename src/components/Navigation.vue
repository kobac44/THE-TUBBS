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
    name: "navigation",
    data() {
      return {
          scrollPosition: null,
          mobile: true,
          mobileNav: true,
          windowWidth: null,
      };  
    },
};
</script>

<style scoped>
nav {
    position: relative;
    padding: 12px 0;
    transition: .5s ease all;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1140px;) {
        max-width: 1140px;
    }
}

ul,
.link{
    font-weight: bold;
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

.navigation {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-between;
}

.icon {
    display: flex;
    align-items: center;
    position:absolute;
    top: 0;
    right: 24px;
    height: 100%;
}

.icon {
    cursor: pointer;
    font-size: 24px;
    transition: .8s ease all;
}

.icon-active {
    transform: rotate(180deg);
}

.dropdown-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 250px;
    height: 100%;
    background-color: darkolivegreen;
    top: 0;
    left: 0;
}

li {
    margin-left: 0;
}

.link {
    color: #000
}
</style>

