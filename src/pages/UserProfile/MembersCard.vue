<template>
  <card class="card" :title="title">
    <div>
      <ul class="list-unstyled team-members">
        <li>
          <div class="row" v-for="member in members" :key="member.name">
            <div class="col-3">
              <div class="avatar">
                <img
                  :src="member.image"
                  alt="Circle Image"
                  class="rounded img-fluid"
                />
              </div>
            </div>
            <div class="col-6">
              {{ member.name }}
              <br />
              <span :class="getStatusClass(member.status)">
                <small>{{ member.status }}</small>
              </span>
            </div>

            <div class="col-3">
              <p-button type="success" outline icon>
                <i class="fa fa-envelope"></i>
              </p-button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      title: "Team members",
      members: [
        {
          image: require("@/assets/img/faces/face-0.jpg"),
          name: "Dj Khaled",
          status: "Offline",
        },
        {
          image: require("@/assets/img/faces/face-1.jpg"),
          name: "Creative Tim",
          status: "Available",
        },
        {
          image: require("@/assets/img/faces/face-1.jpg"),
          name: "Flume",
          status: "Busy",
        },
      ],
    };
  },
  methods: {
    getStatusClass(status) {
      switch (status) {
        case "Offline":
          return "text-muted";
        case "Available":
          return "text-success";
        case "Busy":
          return "text-danger";
        default:
          return "text-success";
      }
    },
  },
};
</script>
<style></style>
