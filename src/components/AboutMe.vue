<template>
  <div>
    <v-row>
      <v-col class="justify-center" cols="5">
        <img
          src="../assets/myimage.jpg"
          alt="mark"
          v-bind:style="{'height': '170px', 'width': '170px', 'border-radius': '50%'}"
        />
      </v-col>
      <v-col class="name align-center" cols="7">
        <v-row>
          <v-col cols="12" class="name">
            <h1>Kittayot Pattanapara</h1>
          </v-col>
          <v-col cols="12" class="no-padding name-tag">
            <h3>Front-end Developer</h3>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="desc">
        <p style="margin: 5px 0 0 0">
          &ensp;
          <v-icon color="primary" dense>fas fa-quote-left</v-icon>  My name is Kittayot Pattanapara. I'm focused on web development
          using <b>React.js and Node.js</b>. I am passionate about clean code and
          professional development. I have strong skills in communication,
          critical thinking, and I am a diligent worker with a positive attitude
          that helps to drive projects toward success.
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Aboutme"
};
</script>

<style scoped>
.name {
  padding-left: 0;
}
.name-tag {
  position: relative;
  top: -5px;
  text-decoration: underline;
  font-style: italic;
}
.desc {
  padding-top: 0;
}
.no-padding {
  padding: 0;
}
</style>
