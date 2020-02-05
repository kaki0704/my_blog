<template>
  <footer>Copyright {{getCurrentYear}} by @yamady0704</footer>
</template>

<script>
export default {
  data: () => ({
    href: 'http://codeartistry.io'
  }),
  computed: {
    getCurrentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style>
  footer {
    text-align: center;
    color: #fff;
    letter-spacing: 0.5px;
    padding: 25px;
    background-color: #2c2c2c;
    margin-top: 5%;
  }
</style>