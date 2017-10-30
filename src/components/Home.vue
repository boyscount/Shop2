<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md3 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="warning"> View Detail </v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetup/new" class="warning"> Add Item </v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
    <v-flex xs12 class="text-xs-center">
    <v-progress-circular
    indeterminate
     v-bind:size="70"
     color="amber"
     v-if="loading"></v-progress-circular>
     </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2" v-if="!loading">
      <v-flex xs12>
        <v-carousel style="cursor: pointer;">
          <v-carousel-item
          v-for="meetup in meetups"
          :src="meetup.imageUrl"
          :key="meetup.id"
          @click="aaa(meetup.id)">
          <div class="title">
          {{ meetup.title }}
          </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
      <v-layout row wrap class="mt-2">
        <v-flex xs12 sm6 class="text-xs-center">
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      meetups () {
        return this.$store.getters.featuredMeetups
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      aaa: function (id) {
        console.log(id)
        this.$router.push('/meetups/' + id)
      }
    }
  }
</script>
<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2 em;
    padding: 30px;
  }
</style>
