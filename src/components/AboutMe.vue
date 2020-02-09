<template>
  <v-row>
    <v-col class="desc">
      <p style="margin: 0 0 0 0">
        &ensp;
        <v-icon color="secondary" dense>fas fa-quote-left</v-icon>My name is Kittayot Pattanapara. I'm focused on web development
        using
        <b>React.js and Node.js</b>. I am passionate about clean code and
        professional development. I have strong skills in communication,
        critical thinking, and I am a diligent worker with a positive attitude
        that helps to drive projects toward success.
      </p>
    </v-col>
  </v-row>
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
