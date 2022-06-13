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