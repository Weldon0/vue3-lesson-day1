<script setup>
import {computed, onErrorCaptured, ref} from "vue";
import test from './test.vue'

const currentAge = ref(18)
// 明年的可以使用今年的年龄进行计算
// const nextAge = computed(() => {
//   return currentAge.value + 1
// })
console.log(currentAge)
const nextAge = computed({
  get() {
    return currentAge.value + 1
  },
  // 尝试修改计算属性的时候会进行触发
  set(val) {
    currentAge.value = val - 1
  }
})
// 捕获子组件的错误的
onErrorCaptured((...args) => {
  console.log(args)
  // 表示当前错误已经处理了，不需要再进行上传
  return false
})
</script>

<template>
  <div>
    <test/>
    <input v-model.number="currentAge" type="text" placeholder="今年的年龄">
    <input v-model.number="nextAge" type="text" placeholder="明年的年龄">
  </div>
</template>

<script>
export default {
  errorCaptured() {
    console.log('错误处理')
    return false;
  }
}
</script>
