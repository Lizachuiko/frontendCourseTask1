<template lang="pug">
  div.search
    input(type="text" :value="searchInput" @input="onInput($event.target.value)")
    div(v-if="suggestions && suggestions.length")
      ul: li(
        v-for="suggestion in suggestions"
        @click="onSelect(suggestion)"
      ) {{ suggestion.title }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface Suggestion {
  title: string;
  additionalInfo?: string;
  price?: number;
}

@Component
export default class Search extends Vue {
  @Prop({ type: Function, required: true }) searchingFunction!: (input: string) => Suggestion[];

  searchInput = '';
  suggestions: Suggestion[] = [];

  onSelect(suggestion: Suggestion) {
    this.searchInput = suggestion.title;
    this.suggestions = [];
    this.$emit('value-selected', suggestion);
  }

  async onInput(input: string) {
    this.searchInput = input;
    this.suggestions = await this.searchingFunction(input);
  }
}
</script>

<style lang="stylus">
  .search
    width 300px
    font-size 15px
    li, ul
      list-style none
    ul
      margin 0
      padding 0
    input
      height 20px
      width 300px
      font-size 15px
    li
      padding 5px
      cursor pointer
      width 100%
      &:hover
        background-color lightblue
</style>