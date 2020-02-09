<template>
  <v-row>
    <v-col cols="12" class="no-padding">
      <v-row >
        <v-col cols="2" class="align-center">
          <v-btn class="" color="red accent-3" fab small depressed>
            <v-icon color="white" >far fa-envelope</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="10" class="align-center">
          mark.pattanapara@gmail.com
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="no-padding">
      <v-row >
        <v-col cols="2" class="align-center">
          <v-btn class="" fab color="blue" small depressed>
            <v-icon color="white">fas fa-phone-alt</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="10" class="align-center">
          063-421-1814
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="no-padding">
      <v-row >
        <v-col cols="2" class="align-center">
          <v-btn class="" fab color="black" small depressed>
            <v-icon color="white">fab fa-github</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="10" class="align-center">
          www.github.com/markkizz
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style scoped>
</style>
