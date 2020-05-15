<template lang="pug">
    #app
      .main
        span Начните вводить название телефона:
        search(
          :searching-function="chooseIPhoneF"
          @iphone-chosen="setImage()"
        )
        img(v-if="choiceMade" src="#" alt="фото айфона")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Search from './components/search.vue';
import { Phone } from '../data-mock/mock';
import { chooseIPhone } from './services/search';

@Component({
  components: {
    Search,
  },
})
export default class App extends Vue {

  chooseIPhoneF = chooseIPhone;
  choiceMade = false;
}
</script>

<style lang="stylus">
#app
  font-family Helvetica, sans-serif
  font-size 15px
  .main
    max-width 300px
    margin 50px
</style>