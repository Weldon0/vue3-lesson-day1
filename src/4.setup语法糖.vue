<template>
  <div>setup语法糖</div>
  <h1>
    {{ a }}
  </h1>
  <h2>
    {{ count }}
  </h2>
  <button @click="add">点击</button>
</template>

<!--使用setup语法糖 >> 代码块中的顶层变量可以直接在模板中进行使用-->
<script setup>
import {ref} from "vue";

const a = 'a';
const count = ref(0);
const add = () => {
  count.value++;
}
</script>
