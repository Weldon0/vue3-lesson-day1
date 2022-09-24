import {onMounted, onUnmounted, reactive, ref} from "vue";

export function useMouse() {
  const mouse = reactive({
    x: 0,
    y: 0
  })
  const move = (e) => {
    console.log(e)
    mouse.x = e.pageX;
    mouse.y = e.pageY
  }
  // 绑定dom事件
  onMounted(() => {
    document.addEventListener('mousemove', move)
  })
  onUnmounted(() => {
    document.removeEventListener('mousemove', move)
  })

  return {mouse}
}

export function useCount() {

  // 点击自增
  const count = ref(0)
  const add = () => {
    count.value ++
  }

  return {
    count,
    add
  }
}
