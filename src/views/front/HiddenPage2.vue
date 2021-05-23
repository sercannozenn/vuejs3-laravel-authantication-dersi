<template>
  <Front>
    <template v-slot:content>
      Gizli Sayfa 2
    </template>
  </Front>
</template>

<script>
import Front from "../layouts/Front";
export default {
  name: "HiddenPage2",
  components: {Front}
}
</script>

<style scoped>

</style>
