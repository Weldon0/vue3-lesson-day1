<template>
  <h1>{{ mouse.x }}</h1>
  <button @click="add">点击+1</button>
</template>

<script>
import {reactive} from "vue";

export default {
  setup() {
    // >> 使用reactive构建响应式的数据
    // 1、reactive包裹的值是一个对象或者数组
    // 2、传入的对象调用proxyAPi进行响应式的处理
    // 3、不能传入基本数据类型，因为proxyAPI默认处理复杂对象或者数组，处理不了基本数据类型
    const mouse = reactive({
      x: 0,
      y: 0
    })

    const add = () => {
      mouse.x++
    }
    return {
      mouse,
      add
    }
  }
}
/**
 * 问题小结:
 *
 * 1、默认 setup 函数中返回的 普通对象 是响应式的么 ?
 * 2、reactive 函数的作用是什么 ?
 * 3、reactive 是否能够处理基本数据类型为响应式 >> proxyAPI >> 不能处理基本数据类型 ?
 */
</script>
