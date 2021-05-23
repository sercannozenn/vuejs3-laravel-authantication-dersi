<template>
  <Front>
    <template v-slot:content>
      Gizli Sayfa 1
    </template>
  </Front>
</template>

<script>
import Front from "../layouts/Front";
export default {
  name: "HiddenPage1",
  components: {Front}
}
</script>

<style scoped>

</style>
