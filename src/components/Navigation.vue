<template>
  <div id="navigationList">
    <div
      class="navigation"
      v-for="(item, index) in AllName"
      :key="index"
      :style="{
        background: item.color,
        right: index * 15 + 'px',
        top: index * 10 + 'px',
      }"
    >
      {{ item.name }}
      <img src="@/assets/image.png" id="bookmark" alt="" srcset="" />
    </div>
  </div>
</template>

<script setup lang='ts'>
// const str:string = "hello,world"
// 对象可以直接写，不用写类型判断
type ListArray = {
  name: string;
  color: string;
};
const AllName: Array<ListArray> = [
  { name: "前端", color: "#FCD768" },
  { name: "后台", color: "#51C253" },
  { name: "安卓", color: "#2E9599" },
  { name: "UI", color: "#974EC4" },
  { name: "AI", color: "#A7226F" },
];
</script>

<style lang='scss' scoped>
#navigationList {
  width: 300px;
  position: relative;
  .navigation {
    position: absolute;
    width: 60px;
    height: 117px;
    //   实现文字竖直方向排列
    writing-mode: vertical-lr;
    text-align: center;
    line-height: 60px;
    font-size: 22px;
    opacity: 0.8;
    transition: 0.4s;
    color: white;
    //字体
    font-family: Ranga;
    &:hover {
      opacity: 1;
      z-index: 10;
    }
    #bookmark {
      position: absolute;
      right: -17px;
      top: -15px;
      width: 48px;
      height: 76px;
    }
  }
}

</style>