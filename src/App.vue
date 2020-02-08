<template>
  <v-app :style="myStyle">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="justify-center">
            <v-card class="elevation raised custom-card" style="border-top-right-radius: 0">
              <Aboutme />
            </v-card>
            <div class="tab">
              <TabButton>
                <v-icon large>
                  fas fa-user-tie
                </v-icon>
              </TabButton>
              <div class="tab tab-space">
                <TabButton>
                  <v-icon large>fas fa-university</v-icon>
                </TabButton>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Aboutme from "./components/AboutMe";
import { TabButton } from "./shared/TabButton";

export default {
  name: "App",

  components: {
    Aboutme,
    TabButton
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

.tab {
  position: relative;
}

.tab-space {
  top: 8px;
}
</style>
