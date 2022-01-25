<template>
  <div class="drumbook">
    <h1>This is an drumbook page</h1>
   <div class="name">
      <div class="letter">
        <img src="../assets/A.png" />
      </div>
      <div class="letter">
        <img src="../assets/D.png" />
      </div>
      <div class="letter">
        <img src="../assets/R.png" />
      </div>
      <div class="letter">
        <img src="../assets/U.png" />
      </div>
      <div class="letter">
        <img src="../assets/M.png" />
      </div>
      <div class="name1">
        <div class="letter">
          <img src="../assets/B.png" />
        </div>
      </div>
    </div>  
  </div>
  
</template>

<script>
export default {
  name: "DrumBook",
  data() {
    return {
      props: [String]
    }
  },
}
</script>

<style scoped>
.name {
  display:flex
}

img {
  width: 200px;
  height: 200px;
}

.name1 {
  display: flex;
}


</style>