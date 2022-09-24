<script setup>
import {onErrorCaptured, onMounted, onUnmounted, ref} from "vue";
const mouse = ref({
  x: 0,
  y: 0
})
// 鼠标滑动的逻辑
const move = (e) => {
  mouse.value.x = e.pageX;
  mouse.value.y = e.pageY;
}
// 绑定事件
// 生命周期🪝
onMounted(() => {
  // vue2 mounted
  document.addEventListener('mousemove', move)
})
// 卸载的时候移除事件
onUnmounted(() => {
  document.removeEventListener('mousemove', move)
})

</script>
<template>
  <div>
    鼠标的坐标
    <hr>
    <div>
      x: {{ mouse.x }}
    </div>
    <div>
      y: {{ mouse.y }}
    </div>
  </div>
</template>
