<template>
  <v-app :style="myStyle">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row justify="center" class="mt-10">
          <v-col cols="5" class="flex-end">
            <div class="myimage justify-center align-center">
              <div class="center-circle">
                <v-btn class="mx-2 ball four" fab color="secondary">
                  <v-icon>far fa-address-card</v-icon>
                </v-btn>
              </div>
              <div class="center-circle">
                <v-btn class="mx-2 ball three" fab :color="false ? 'secondary': ''">
                  <v-icon>fas fa-graduation-cap</v-icon>
                </v-btn>
              </div>
              <div class="center-circle">
                <v-btn class="mx-2 ball two" fab :color="false ? 'secondary': ''">
                  <v-icon>fas fa-code</v-icon>
                </v-btn>
              </div>
              <div class="center-circle">
                <v-btn class="mx-2 ball one" fab :color="false ? 'secondary': ''">
                  <v-icon>fas fa-phone-alt</v-icon>
                </v-btn>
              </div>
              <img
                src="./assets/myimage.jpg"
                alt="mark"
                v-bind:style="{'height': '170px', 'width': '170px', 'border-radius': '50%', 'z-index': '1'}"
              />
            </div>
          </v-col>
          <v-col cols="7">
            <v-expand-transition>
              <v-card class="elevation raised custom-card" width="550">
                <v-row>
                  <v-col class="name align-center" cols="12">
                    <v-row>
                      <v-col cols="12">
                        <h1>
                          <span class="tag-color">&#60;</span> Kittayot Pattanapara
                          <span class="tag-color">/&#62;</span>
                        </h1>
                      </v-col>
                      <v-col cols="12" class="no-padding name-tag">
                        <h3 class="font-weight-light">Front-end Developer</h3>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <!-- <Aboutme /> -->
                <!-- <MyEducation /> -->
              </v-card>
            </v-expand-transition>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import Aboutme from "./components/AboutMe";
// import MyEducation from "./components/MyEducation";

export default {
  name: "App",

  components: {
    // Aboutme
    // MyEducation
  },

  data() {
    return {
      myStyle: {
        backgroundColor: "#b55233"
      },
      isSelect: true
    };
  }
};
</script>

<style>
.myimage {
  background-size: 170px 170px;
  width: 170px;
  height: 170px;
  border-radius: 50%;
}
.custom-card {
  position: relative;
  left: -110px;
  padding-left: 100px;
}
.name-tag {
  position: relative;
  top: -5px;
  text-decoration: underline;
  font-style: italic;
}
.tag-color {
  color: #ff8661;
}
.center-circle {
  position: absolute;
}
.ball {
  position: absolute;
}
.one {
  animation-name: one-anime;
  animation-duration: 1.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
.two {
  animation-name: two-anime;
  animation-duration: 1.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
.three {
  animation-name: three-anime;
  animation-duration: 1.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
.four {
  animation-name: four-anime;
  animation-duration: 1.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

.justify-center {
  display: flex;
  justify-content: flex-end;
}
.align-center {
  display: flex;
  align-items: center;
}
.flex-end {
  display: flex;
  justify-content: flex-end;
}
.no-padding {
  padding-top: 0;
  padding-bottom: 0;
}

/* overide */
.v-timeline .theme--light {
  position: relative;
  left: -50px;
}

.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse)
  .v-timeline-item:nth-child(odd):not(.v-timeline-item--before)
  .v-timeline-item__body,
.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse)
  .v-timeline-item--after
  .v-timeline-item__body {
  max-width: 500px !important;
}
.v-application--is-ltr
  .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse):before {
  left: calc(50% - 228px) !important;
}

@keyframes one-anime {
  from {
    transform: rotate(0deg) translateX(130px) rotate(0deg);
  }
  to {
    transform: rotate(-240deg) translateX(130px) rotate(240deg);
  }
}
@keyframes two-anime {
  from {
    transform: rotate(0deg) translateX(130px) rotate(0deg);
  }
  to {
    transform: rotate(-200deg) translateX(130px) rotate(200deg);
  }
}
@keyframes three-anime {
  from {
    transform: rotate(0deg) translateX(130px) rotate(0deg);
  }
  to {
    transform: rotate(-160deg) translateX(130px) rotate(160deg);
  }
}
@keyframes four-anime {
  from {
    transform: rotate(0deg) translateX(130px) rotate(0deg);
  }
  to {
    transform: rotate(-120deg) translateX(130px) rotate(120deg);
  }
}
</style>
