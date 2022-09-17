<template>
  <div>
    <h1>hello,world</h1>
    <Navigation />
  </div>
</template>

<script setup lang='ts'>
// 这个报错不用理会,这是因为ts的毛病,或者说ts即使会报错也会进行编译的,他更多的是在语法的时候就进行预报,报错了,提醒你而已,并不会为难你
import Navigation from "@/components/Navigation.vue";
</script>

<style lang='sass'>

</style>    