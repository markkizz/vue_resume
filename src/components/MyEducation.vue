<template>
    <v-timeline>
      <v-timeline-item small right color="deep-orange lighten-1">
        <template>
          <span class="title font-weight-bold deep-orange--text text--lighten-1" v-text="'2020'"/>
        </template>
        <div>
          <h2 class="title">Software Park CodeCamp #4</h2>
          <div>
            Fullstack NodeJS Developer
          </div>
          <div>
            Project #1: Maid Pro Service <br>
            Demo: http://bit.ly/maid_service
          </div>
          <div>
            Project #2: What's lunch <br>
            Demo: https://github.com/markkizz/what-s_lunch
          </div>
        </div>
      </v-timeline-item>
      <v-timeline-item small right color="deep-orange lighten-1">
        <template>
          <span class="title font-weight-bold deep-orange--text text--lighten-1" v-text="'2019'" />
        </template>
        <div>
          <h2 class="title">Edx.org</h2>
          <div>
            CS50's Introduction to Computer Science
          </div>
        </div>
      </v-timeline-item>
      <v-timeline-item small right color="deep-orange lighten-1">
        <div>
          <h2 class="title">Udemy</h2>
          <div>
            The Web Developer Bootcamp
          </div>
          <div>
            The Complete Web Developer 2019 Zero to Mastery
          </div>
          <div>
            React - The Complete Guide
          </div>
        </div>
      </v-timeline-item>
      <v-timeline-item small right color="deep-orange lighten-1">
        <template>
          <span class="title font-weight-bold deep-orange--text text--lighten-1" v-text="'2014 - 2018'" />
        </template>
        <div>
          <h2 class="title">Thammasat University</h2>
          <div>
            Bachelor’s degree in Industrial Engineering
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
</template>

<script>
export default {
  name: "MyEducation"
};
</script>

