<template>
  <div>
    当前鼠标位置
    <div>
      x: {{ mouse.x }}
      y: {{ mouse.y }}
    </div>

    <p>当前点击次数{{ count }}</p>
    <button @click="add">点击</button>
  </div>
</template>

<script setup>
// 逻辑复用
// 组件
import {useCount, useMouse} from "./hooks.js";

const {mouse} = useMouse()
const {count, add} = useCount()
</script>
