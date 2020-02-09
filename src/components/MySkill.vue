<template>
  <v-row>
    <v-col cols="12">
      <v-row>
        <v-col cols="12">
          <h3>Front-end</h3>
        </v-col>
        <v-col cols="12" class="custom-col">
          <v-row>
            <v-col class="icon-padding">
              <img
                src="../assets/html_css_js.png"
                alt="htmlcssjs"
                style="width: 155px; height: 55px"
              />
            </v-col>
            <v-col class="icon-padding justify-center">
              <img src="../assets/react.png" alt="htmlcssjs" style="width: 120px; height: 55px" />
            </v-col>
            <v-col class="icon-padding">
              <img src="../assets/redux.png" alt="htmlcssjs" style="width: 70px; height: 70px" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col cols="12" class="icon-padding">
          <h3>UI Framework</h3>
        </v-col>
        <v-col cols="12" class="custom-col">
          <v-row>
            <v-col class="icon-padding" cols="2">
              <img src="../assets/bootstrap.png" alt="htmlcssjs" style="width: 85px; height: 85px;" />
            </v-col>
            <v-col cols="5">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                alt="htmlcssjs"
                style="width: 60px; height: 55px"
              />
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/DkKNubTaaVsKURhcVGkh.svg"
                alt="htmlcssjs"
                style="width: 120px; height: 55px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col cols="12" class="icon-padding">
          <h3>Back-end</h3>
        </v-col>
        <v-col cols="12" class="custom-col">
          <v-row>
            <v-col cols="3">
              <img src="../assets/nodejs.png" alt style="width: 85px; height: 55px" />
            </v-col>
            <v-col cols="4">
              <img src="../assets/sequelize.png" alt style="width: 130px; height: 55px;" />
            </v-col>
            <v-col cols="3">
              <img src="../assets/mysql.png" alt style="width: 80px; height: 55px;" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col cols="12" class="icon-padding">
          <h3>DevOps</h3>
        </v-col>
        <v-col cols="12" class="custom-col">
          <v-row>
            <v-col cols="3">
              <img src="../assets/docker.png" alt style="width: 95px; height: 75px;" />
            </v-col>
            <v-col cols="3">
              <img src="../assets/linux.png" alt style="width: 100px; height: 95px;" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "MySkill"
};
</script>

<style scoped>
.icon-padding {
  padding: 0 6px 0;
}
.custom-col {
  padding: 2px 2px;
}
</style>
