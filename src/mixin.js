export const mixinsCount = {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    add() {
      this.count++
    }
  },
}


export const mixinsMouse = {
  data() {
    return {
      mouse: {
        x: 0,
        y: 0
      }
    }
  },
  mounted() {
    document.addEventListener('mousemove', this.move);
  },
  destroyed() {
    document.removeEventListener('mousemove', this.move);
  },
  methods: {
    move(e) {
      this.mouse.x = e.pageX;
      this.mouse.y = e.pageY
    }
  }
}
