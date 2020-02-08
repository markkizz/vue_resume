<template>
  <v-app :style="myStyle">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="justify-center">
            <v-card class="elevation raised custom-card">
              <Aboutme />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Aboutme from "./components/AboutMe";

export default {
  name: "App",

  components: {
    Aboutme
  },

  data() {
    return {
      myStyle: {
        backgroundColor: "#b55233"
      }
    };
  }
};
</script>

<style>

.custom-card {
  padding: 1rem;
  height: 400px;
  width: 550px;
}
.justify-center {
  display: flex;
  justify-content: flex-end;
}
.align-center {
  display: flex;
  align-items: center;
}
</style>
