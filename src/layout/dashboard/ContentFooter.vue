<template>
  <footer class="footer">
    <div class="container-fluid d-flex flex-wrap justify-content-between">
      <nav>
        <ul>
          <li>
            <router-link :to="{path:'/admin'}">Dashboard</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright d-flex flex-wrap">
        &copy; Hecho con
        <i class="fa fa-heart heart"></i> por
        <a href="http://www.shewylab.com" target="_blank"> &nbsp; Shewylab</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style>
</style>
