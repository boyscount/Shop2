<template>
  <v-container>
    <v-layout row wrap v-for="meetup in meetups" :key="meetup.id" class="mb-2">
     <v-flex xs12 sm10 md8 offset-sm1 offset-md-2>
       <v-card class="seconnary" >
        <v-container fluid>
        <v-layout row>
          <v-flex xs5 sm4 md3>
            <v-card-media
              :src="meetup.imageUrl"
              height="240px"
            ></v-card-media>
           </v-flex>
           <v-flex xs7 sm8 md9>
           <v-card-title primary-title>
           <h5 class="primary--text mb-0"> {{ meetup.title }} </h5>
           <div> {{ meetup.date | date}} </div>
           </v-card-title>
           <v-card-actions>
            <v-btn flat :to="'/meetups/' + meetup.id">
            <v-icon left light>arrow_forward</v-icon>
            View Detal
            </v-btn>
           </v-card-actions>
           </v-flex>
         </v-layout>
        </v-container>
       </v-card>
     </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    computed: {
      meetups: function () {
        return this.$store.getters.loadedMeetups
      }
    }
  }
</script>
