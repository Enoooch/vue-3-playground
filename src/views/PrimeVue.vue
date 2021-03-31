<template>
<!-- <AutoComplete v-model="selectedCountry" :suggestions="filteredCountriesBasic" @complete="searchCountry($event)" field="name" /> -->
<Calendar v-model="value" />

</template>

<script>
export default {
  data() {
    return {
      value: null,
      selectedCountry: null,
      filteredCountries: null
    }
  },
  countryService: null,
  created() {
    // this.countryService = new CountryService();
  },
  methods: {
    // searchCountry(event) {
    //   this.filteredCountriesBasic = this.countryService.search(event.query);
    // }
  },
  setup () {


    return {}
  }
}
</script>

<style scoped>

</style>