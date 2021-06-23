<script lang="ts">
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { LibraryExampleSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  LibraryExampleSample,
  // }
});
</script>

<template>
  <div id="app">
    <PreLink href="https://google.com" text="visit google.com" />
    <PreNumberInput />
    <PreTextInput />
  </div>
</template>
