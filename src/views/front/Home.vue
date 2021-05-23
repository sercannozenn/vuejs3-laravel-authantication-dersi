<template>
  <Front>
    <template v-slot:content>
      Anasayfa
    </template>
  </Front>
</template>

<script>
import Front from "../layouts/Front";
export default {
  name: 'Home',
  components: {
    Front,
  }
}
</script>
