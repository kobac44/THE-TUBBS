<template>
    <header :class="{ 'scrolled-nav': scrolledNav }">
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
          scrolledNav: null,
          mobile: null,
          mobileNav: null,
          windowWidth: null,
      };  
    },
    created() {
       window.addEventListener("resize", this.checkScreen);
       this.checkScreen();
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);

    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },

        updateScroll() {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                this.scrolledNav = true;
                return;
            }
            this.scrolledNav = false;
        },

        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 750){
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        },
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

.icon 
.icon-active{
    cursor: pointer;
    font-size: 28px;
    transition: .8s ease all;
    transform: rotate(180deg);
}

.dropdown-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 250px;
    height: 100%;
    background-color: rgb(204, 224, 168);
    top: 0;
    left: 0;
}

li {
    margin-left: 0;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
    transform: translateX(-250px);
}

.mobile-nav-enter-to {
    transform: translateX(0);
}

.scrolledNav {
    background-color: #000;
    box-shadow: 0 4px 6px -1  rgba(0, 0, 0 , 0.1), 0 2px 4px -1px  rgba(0, 0, 0, 0.06);
}

nav {
    padding: 8px 0;
}



</style>


