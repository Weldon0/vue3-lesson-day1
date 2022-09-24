<template>
  <div>
    {{ count }}
  </div>
  <button @click="add">点击+1</button>
</template>

<script>
import {ref} from "vue";

export default {
  setup() {
    /**
     *  总结：
     *      1、基本数据类型使用ref进行处理
     *      2、把基本值包裹成一个对象，值在对象的value上
     *      3、js中操作这个值的时候必须要使用value操作
     *      4、模板中使用的使用的时候，自动解构出value，所以不需要.value
     *      5、可以处理复杂数据类型，传入的对象包裹到value属性上
     *      推荐：使用ref
     *         1、统一api
     *         2、vue 3.2之后的性能可能更好
     */

    let count = ref(20)
    // 处理对象
    const msg = ref({
      age: 18
    })

    const add = () => {
      count.value++
      msg.value.age++
    }

    return {
      count,
      add
    }
  }
}
/**
 * 1、八股文 >> 技术点 响应式/computed/watch/slot/传值/mixins/
 * 2、项目 >> 项目里面有没有什么难点 >> 解决不了的？
 *  怎么解决：>> github vue-element-admin解决方案？
 *  bug >> 订单号 》》 number bigInt
 *  1、组件封装, 所有复用的组件都会封装
 *  2、后台管理 >> element-ui 二次封装 el-pagination
 *  3、移动端 >> c端 >> 所有的组件都要封装
 */
</script>
