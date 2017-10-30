<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h4 class="secondary--text"> Create New Item </h4>
      </v-flex>
    </v-layout>
   <v-layout row>
    <v-flex xs12>
      <form @submit.prevent="onCreateMeetup">
       <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
         <v-text-field
          name="title"
          label="Title"
          id="title"
          v-model="title"
          required></v-text-field>
        </v-flex>
       </v-layout>
        <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
         <v-text-field
          name="detail"
          label="Detail"
          id="detail"
           v-model="detail"
          required></v-text-field>
        </v-flex>
       </v-layout>
        <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
         <v-text-field
          name="imageUrl"
          label="Image URL Example.https://xx.jpg"
          id="image-url"
           v-model="imageUrl"
          required></v-text-field>
        </v-flex>
       </v-layout>
          <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <img :src="imageUrl" height="100">
        </v-flex>
       </v-layout>
         <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
         <v-text-field
          name="price"
          label="Price"
          id="price"
          v-model="price"
          required></v-text-field>
        </v-flex>
       </v-layout>
        <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
         <v-text-field
          name="other"
          label="Other"
          id="other"
          multi-line
          v-model="other"
          required></v-text-field>
        </v-flex>
       </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <h4>Choose a Date & Time</h4>
              </v-flex>
          </v-layout>
          <v-layout row row class="mb-2">
            <v-flex xs12 sm6 offset-sm3>
              <v-date-picker v-model="date"></v-date-picker>
                </v-flex>
          </v-layout>
            <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-time-picker v-model="time" format="24hr"></v-time-picker>
                </v-flex>
          </v-layout>
       <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-btn
           class="primary"
            :disabled="!formIsValid"
            type="submit" > Add Item </v-btn>
        </v-flex>
       </v-layout>
      </form>
    </v-flex>
   </v-layout>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        title: '',
        detail: '',
        imageUrl: '',
        price: '',
        other: '',
        date: new Date(),
        time: new Date()
      }
    },
    computed: {
      formIsValid: function () {
        return this.title !== '' &&
        this.detail !== '' &&
        this.imageUrl !== '' &&
        this.price !== '' &&
        this.other !== ''
      },
      submittableDateTime () {
        const date = new Date(this.date)
        if (typeof this.time === 'string') {
          const hours = this.time.match(/^(\d+)/)[1]
          const minutes = this.time.match(/:(\d+)/)[1]
          date.setHours(hours)
          date.setMinutes(minutes)
        } else {
          date.setHours(this.time.getHours())
          date.setMinutes(this.time.getMinutes())
        }

        console.log(date)
        return date
      }
    },
    methods: {
      onCreateMeetup: function () {
        if (!this.formIsValid) {
          return
        }
        const meetupData = {
          title: this.title,
          detail: this.detail,
          imageUrl: this.imageUrl,
          price: this.price,
          other: this.other,
          date: this.submittableDateTime
        }
        this.$store.dispatch('createMeetup', meetupData)
        this.$router.push('/meetups')
      }
    }
  }
</script>
