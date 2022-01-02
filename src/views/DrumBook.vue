<template>
  <div class="drumbook">
    <h1>This is an drumbook page</h1>
    <div class="letter">
      <img src="../assets/A.png" />
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
img {
  color: #fff;
  padding: 30px;
}
</style>