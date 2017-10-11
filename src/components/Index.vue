<template id="index">
  <v-ons-navigator :page-stack="pageStack">
    <component :is="page" v-for="page in pageStack" :page-stack="pageStack"></component>
  </v-ons-navigator>
</template>

<script>
import AllProblemsPage from './AllProblemsPage';
import notification from '../function/notification';

export default {
  name: 'index',
  data() {
    return {
      pageStack: [AllProblemsPage],
    };
  },
  created() {
    notification.initialize(this);
  },
};
</script>
