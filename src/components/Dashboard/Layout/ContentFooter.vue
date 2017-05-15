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
        &copy; Made with
        <i class="fa fa-heart heart"></i> by
        <router-link :to="{path:'/admin'}">Site title</router-link>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {}

</script>
<style>
  
</style>
