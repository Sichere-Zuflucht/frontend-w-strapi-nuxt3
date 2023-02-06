<template>
  <div>
    Data: {{ magazineList }}
  </div>
</template>

<script setup>
const {login} = useUser()
const { find } = useStrapi()
const magazineList = (await find('magazines', { 'populate': '*' })).data
/*export default {
  data() {
    return {
      magazineList: null,
    }
  },
  async mounted() {
    this.magazineList = (await this.$strapi.$magazines.find({ 'populate': '*' })).data
  },
}*/
</script>
