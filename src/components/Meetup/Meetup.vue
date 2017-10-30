<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
          <h6 class="primary--text">{{ meetup.title }}</h6>
           </v-card-title>
            <v-card-media
              :src="meetup.imageUrl"
              height="400px"
            ></v-card-media>
            <v-card-text>
            <div class="info--text" >{{ meetup.date | date }} - {{ meetup.other }} </div>
              <div> {{ meetup.detail }}
             </div>
              <div class="primary--text"> <h4> {{ meetup.price }} $ </h4>
             </div>
            </v-card-text>
            <v-card-action>
            <v-spacer></v-spacer>
              <v-btn class="warning">Buy Now</v-btn>
              <v-btn class="primary">Buy with Credit Card</v-btn>
            </v-card-action>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
 export default {
   props: ['id'],
   computed: {
     meetup: function () {
       return this.$store.getters.loadedMeetup(this.id)
     }
   }
 }
</script>
