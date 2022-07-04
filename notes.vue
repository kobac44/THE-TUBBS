/* Notes for this website */
// git push -u origin main 
// npm run serve

// 'scrolled-nav': scrollPosition = when you scoll down to a certain amount 
// of pixels we are going to shrink the navigation


<!-- <div class="link"> 
      <a href="#">
          {{ name }}
      </a> 
      <svg viewBox="0 0 1030 638" width="10">
      <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path>
    </svg>
        <div class="sub-menu" v-if="isOpen">
            <div v-for="(link, i) in links" :key="i" class="link">
                <a :href="link.link">{{ link.name}}</a>
            </div>
        </div>
</div> -->

'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'

    // 'plugin:vue/vue3-essential',
    // 'eslint:recommended',
    // '@vue/prettier'


    data () {
        return {
            about: [
                {
                    title: 'Bio',
                    link: '#'
                },
                {
                    title: 'Ensembles',
                    link: '#'
                },
                {
                    title: 'Equipment',
                    link: '#'
                },
            ]
        }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    /* webpackChunkName: "about" */

     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.


    Abouts page
    <!-- <template>
    <div class="menu-item" @click="isOpen = !isOpen">
        <a href="#">
            {{ title }}
        </a>
        <svg viewBox="0 0 1030 638" width="10">
            <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path>
        </svg>
        <transition name="fade" appear>
          <div class="sub-menu" v-if="isOpen">
            <div v-for="(item, i) in items" :key="i" class="menu-item">
                <a :href="item.link">{{ item.title}}</a>
            </div>
            <div class="menu-item">
              <router-link to="/services/web">Bio</router-link>
            </div>
            <div class="menu-item">
              <router-link to="/services/web">Ensembles</router-link>
            </div>
            <div class="menu-item">
              <router-link to="/services/web">Equipment</router-link>
            </div>
          </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "about",
    props: ['title', 'items'],
    data () {
      return {
        isOpen: false
      }
    }
}
</script>

<style scope>
nav .menu-item svg {
    width: 10px;
    margin-left: 10px; 
}

nav .menu-item .sub-menu {
    position: absolute;
  background-color: #222;
  top: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  border-radius: 0px 0px 16px 16px;
}
</style> -->

{
    path: '/about/bio',
    name: 'Bio',
    component: Bio,
  },
  {
    path: '/about/id',
    name: 'Ensembles',
    component: Ensembles
  },
  {
    path: '/about/id',
    name: 'Equipment',
    component: Equipment
  },
   
   <!-- top of navbar1 -->
  <!-- <div class="menu-item"><router-link to="Discography">Discography</router-link></div>
  <div class="menu-item"><router-link to="Events">Events</router-link></div>
  <div class="menu-item"><router-link to="Gallery">Gallery</router-link></div>
  <div class="menu-item"><router-link to="EPK">EPK</router-link></div>
  <div class="menu-item"><router-link to="Store">Store</router-link></div> -->

  bottom of Navbar
  <!-- <div class="menu-item"><router-link to="Discography">Discography</router-link></div>
  <div class="menu-item"><router-link to="Events">Events</router-link></div>
  <div class="menu-item"><router-link to="Gallery">Gallery</router-link></div>
  <div class="menu-item"><router-link to="EPK">EPK</router-link></div>
  <div class="menu-item"><router-link to="Store">Store</router-link></div> -->