<template>
  <div id="app" >
    <app-header />
    <div class="row">
      <div class="col-sm-12">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header.vue";

export default {
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch('initStocks');
  }
};
</script>
<style lang="scss">
body {
  padding: 30px;
}

.my-container {
  padding: 15px 0;
}
</style>
