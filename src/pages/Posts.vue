<template>
  <div class="posts">
    <Navbar></Navbar> 
      <div class="album py-5 bg-light">
          <div class="container">
            <div class="row">
              <div v-for="posts in APIData" :key="posts.id" class="col-md-4">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top" src="https://via.placeholder.com/150x100" alt="Card image cap">
                  <div class="card-body">
                      <h4 class=""><a class="text-secondary" href="">{{posts.title}}</a></h4>
                      <p class="card-text">{{posts.content}}</p>
                      <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                      <a href="" class="btn btn-sm btn-outline-primary" role="button" aria-pressed="true">View</a>
                      <a href="" class="btn btn-sm btn-outline-secondary" role="button" aria-pressed="true">Edit</a>
                      </div>
                      <small class="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
  import { getAPI } from '../axios-api'
  import Navbar from '../components/Navbar'
  export default {
    name: 'Posts',
    data () {
      return {
          APIData: []
        }
    },
    components: {
      Navbar
    },
    created () {
        getAPI.get('/posts/',)
          .then(response => {
            console.log('Post API has recieved data')
            this.APIData = response.data
          })
          .catch(err => {
            console.log(err)
          })
    }
  }
</script>

<style scoped>

</style>

