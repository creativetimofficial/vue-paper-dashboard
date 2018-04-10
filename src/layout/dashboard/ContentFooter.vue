<template>
  <footer class="footer">
    <div class="container-fluid">
      <nav class="pull-left">
        <ul>
          <li>
            <router-link :to="{path:'/admin'}">Dashboard</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright pull-right">
        &copy; Coded with
        <i class="fa fa-heart heart"></i> by
        <a href="https://github.com/cristijora" target="_blank">Cristi Jora</a>.
        Designed by <a href="https://www.creative-tim.com/?ref=pdf-vuejs" target="_blank">Creative Tim</a>.
      </div>
    </div>
  </footer>
</template>
<script>
  export default {}

</script>
<style>

</style>
