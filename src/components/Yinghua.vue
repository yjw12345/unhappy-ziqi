<template>
  <div id="jsi-cherry-container"></div>
</template>

<script setup >
import { onMounted } from "@vue/runtime-core";
// 樱花这里必须请求相对路径来解决，不然会在打包的时候出现问题
onMounted(() => {
  const live2d_path = "src/assets/eluvletter/js/";
  //const live2d_path = "/live2d-widget/";
  // 封装异步加载资源的方法
  function loadExternalResource(url, type) {
    return new Promise((resolve, reject) => {
      let tag;

      if (type === "css") {
        tag = document.createElement("link");
        tag.rel = "stylesheet";
        tag.href = url;
      } else if (type === "js") {
        tag = document.createElement("script");
        tag.src = url;
      }
      if (tag) {
        tag.onload = () => resolve(url);
        tag.onerror = () => reject(url);
        document.head.appendChild(tag);
      }
    });
  }

  // 加载 waifu.css live2d.min.js waifu-tips.js
  if (screen.width >= 768) {
    // 立即执行函数
    (async function InitalJs() {
      await loadExternalResource(live2d_path + "jquery-1.11.2.min.js", "js");
      await loadExternalResource(live2d_path + "sakura.js", "js");
      await loadExternalResource(live2d_path + "modernizr.js", "js");
      await loadExternalResource(live2d_path + "typed.js", "js");
      await loadExternalResource(live2d_path + "letter.js", "js");
    })();
    // .then(() => {
    //   initWidget({
    //     waifuPath: live2d_path + "waifu-tips.json",
    //     //apiPath: "https://live2d.fghrsh.net/api/",
    //     cdnPath: "https://fastly.jsdelivr.net/gh/fghrsh/live2d_api/",
    //   });
    // });
  }
});
</script>

<style lang='scss' scoped>
@import url(@/assets/eluvletter/stylesheets/style.css);
</style>