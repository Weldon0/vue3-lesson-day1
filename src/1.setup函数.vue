<template>
  <h1>{{ age }}</h1>
</template>

<script>
export default {
  beforeCreate() {
    console.log('beforeCreate')
  },
  /**
   *    setup函数的注意点 >> 使用compositionAPI，必须要配置setup函数
   *    1、setup函数是在beforeCreate钩子之前执行的
   *    2、模板内部如果想要使用setup函数内部的变量，必须进行return
   *    3、setup函数内部没有this，this指向的是undefined
   */
  setup() {
    console.log(this)
    console.log('setup函数')
    const age = 18
    return {
      age
    }
  }
}
</script>
