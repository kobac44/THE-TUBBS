<template>
    <header :class="{ 'scrolled-nav': scrolledNav }">
        <nav id="vue">
            <div class="branding">
                <img scr="" alt="">
            </div>
            <div v-show="!mobile" class="navbar1">
                <router-link to="/">Home</router-link>
                <router-link to="About">About</router-link>
                <router-link to="Teaching">Teaching</router-link>
                <router-link to="Contact">Contact</router-link>
            </div>
            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="fa fa-bars" :class="{'icon-active' : mobileNav}"></i>
            </div>
            <transition name="mobile-nav">
                <div v-show="mobileNav" class="dropdown-nav">
                    <router-link to="/">Home</router-link>
                    <router-link to="About">About</router-link >
                    <router-link to="Teaching">Teaching</router-link>
                    <router-link to="Contact">Contact</router-link>
                </div>
            </transition>
        </nav>
    </header>
</template>

<script>

export default {
    name: "navbar1",
    components: {
        
    },
    data() {
        return {
          scrolledNav: null,
          mobile: false,
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
header {
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: .5s ease all;
}

.navbar1 {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: .5s ease all;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1140px;) {
        max-width: 1140px;
    }
}

button {
   background-color: transparent;
   background-repeat: no-repeat;
   border: none;
   font-family: inherit;
   font-size: 16px;
   font-weight: bold;
}

.navbar1 {
    font-weight: bold;
    color: rgb(10, 10, 10);
    list-style: none;
    text-decoration: none;
}

.navbar1 {
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

.navbar1 {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
}

.icon {
    display: flex;
    align-items: center;
    position:absolute;
    top: 0;
    right: 24px;
    height: 100%;
}

i {
    cursor: pointer;
    font-size: 28px;
    transition: .8s ease all;
}

.icon-active {
    transform: rotate(180);

}

.navbar1 {
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

.scrolled-nav {
    background-color: #000;
    box-shadow: 0 4px 6px -1  rgba(0, 0, 0 , 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

nav {
    padding: 8px 0;
}



</style>


