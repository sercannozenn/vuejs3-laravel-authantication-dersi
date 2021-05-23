<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/front/Navbar";
export default {
  name: "Front",
  components: {Navbar}
}
</script>

<style scoped>

</style>
