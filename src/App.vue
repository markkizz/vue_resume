<template>
  <v-app :style="myStyle">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row justify="center" class="mt-10">
          <v-col cols="5" class="flex-end">
            <div class="myimage justify-center align-center">
                <div class="circle-center" v-for="(btn) in buttonData" :key="btn.id">
                  <v-btn
                    :class="`mx-2 position-absolute ${btn.className}`"
                    fab
                    :color="selectedBtnId===btn.id ? 'secondary' : ''"
                    @click="handleSelect(btn.id, $event)"
                  >
                    <v-icon>{{ btn.icon }}</v-icon>
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
              <v-card class="elevation raised custom-card" width="550" max-width="550">
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
                <Aboutme v-if="selectedBtnId===1" />
                <MyEducation v-else-if="selectedBtnId===2" />
                <MySkill v-else-if="selectedBtnId===3" />
                <Contact v-else-if="selectedBtnId===4" />
              </v-card>
            </v-expand-transition>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Aboutme from "./components/AboutMe";
import MyEducation from "./components/MyEducation";
import MySkill from './components/MySkill'
import Contact from './components/Contact'

export default {
  name: "App",

  components: {
    Aboutme,
    MyEducation,
    MySkill,
    Contact
  },
  data() {
    return {
      myStyle: {
        backgroundColor: "#b55233"
      },
      buttonData: [
        {
          id: 1,
          icon: "far fa-address-card",
          className: "one"
        },
        {
          id: 2,
          icon: "fas fa-graduation-cap",
          className: "two"
        },
        {
          id: 3,
          icon: "fas fa-code",
          className: "three"
        },
        {
          id: 4,
          icon: "fas fa-phone-alt",
          className: "four"
        }
      ],
      selectedBtnId: 1
    };
  },
  methods: {
    handleSelect(btnId) {
      this.selectedBtnId = btnId
  }
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
  font-style: italic;
}
.tag-color {
  color: #ff8661;
}
.circle-center {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
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

.position-absolute {
  position: absolute;
}
.justify-center {
  display: flex;
  justify-content: center;
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

@keyframes one-anime {
  from {
    transform: rotate(0deg) translateX(130px) rotate(0deg);
  }
  to {
    transform: rotate(-120deg) translateX(130px) rotate(120deg);
  }
}
@keyframes two-anime {
  from {
    transform: rotate(0deg) translateX(130px) rotate(0deg);
  }
  to {
    transform: rotate(-160deg) translateX(130px) rotate(160deg);
  }
}
@keyframes three-anime {
  from {
    transform: rotate(0deg) translateX(130px) rotate(0deg);
  }
  to {
    transform: rotate(-200deg) translateX(130px) rotate(200deg);
  }
}
@keyframes four-anime {
  from {
    transform: rotate(0deg) translateX(130px) rotate(0deg);
  }
  to {
    transform: rotate(-240deg) translateX(130px) rotate(240deg);
  }
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

</style>
