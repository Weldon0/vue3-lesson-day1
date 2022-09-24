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

<script>
// vue2通过mixins实现逻辑复用
// 缺点：数据来源不清晰
//      变量名和方法名可能冲突
import {mixinsCount, mixinsMouse} from "./mixin.js";

export default {
  data() {
    return {
      count: 0
    }
  },
  mixins: [mixinsCount, mixinsMouse]
}
</script>
