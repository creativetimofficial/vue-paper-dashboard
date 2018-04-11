<template>
  <card class="card-user">
    <div slot="image">
      <img src="@/assets/img/background.jpg" alt="...">
    </div>
    <div>
      <div class="author">
        <img class="avatar border-white" src="@/assets/img/faces/face-2.jpg" alt="...">
        <h4 class="title">Chet Faker
          <br>
          <a href="#">
            <small>@chetfaker</small>
          </a>
        </h4>
      </div>
      <p class="description text-center">
        "I like the way you work it
        <br> No diggity
        <br> I wanna bag it up"
      </p>
    </div>
    <hr>
    <div class="text-center">
      <div class="row">
        <div v-for="(info, index) in details" :key="index" :class="getClasses(index)">
          <h5>{{info.title}}
            <br>
            <small>{{info.subTitle}}</small>
          </h5>
        </div>
      </div>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      details: [
        {
          title: "12",
          subTitle: "Files"
        },
        {
          title: "2GB",
          subTitle: "Used"
        },
        {
          title: "24,6$",
          subTitle: "Spent"
        }
      ]
    };
  },
  methods: {
    getClasses(index) {
      var remainder = index % 3;
      if (remainder === 0) {
        return "col-lg-3 offset-lg-1";
      } else if (remainder === 2) {
        return "col-lg-4";
      } else {
        return "col-lg-3";
      }
    }
  }
};
</script>
<style>
</style>
