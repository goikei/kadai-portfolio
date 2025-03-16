<script setup lang="ts">
const canvas = useTemplateRef('canvas')
onMounted(() => {
  let width: number, height: number
  let resized: boolean
  const dpr = window.devicePixelRatio;
  function resize() {
    resized = true
    if (canvas.value) {
      width = window.innerWidth * dpr
      canvas.value.width = width
      height = window.innerHeight * dpr
      canvas.value.height = height
    }
  }
  resize()

  const count = 100 // 円の数
  const nProps = 4
  const data = new Float32Array(count * nProps) // 円に関するデータ
  for (let i = 0; i < count * nProps; i += nProps) {
    data[i] /* x座標 */ = Math.random()
    data[i + 1] /* y座標 */ = Math.random()
    const factor = Math.random() * 0.5 + 0.3
    data[i + 2] /* 大きさ */ = 20 * factor
    data[i + 3] /* 移動速度 */ = factor ** 2
  }
  window.addEventListener('resize', resize)
  const ctx = canvas.value?.getContext('2d')
  if (ctx) {
    ctx.scale(dpr, dpr)
  }
  let prevScroll = window.scrollY, prevTime = 0
  function animate(time: number) {
    if (!ctx) return
    const scroll = window.scrollY
    const deltaScroll = scroll - prevScroll
    prevScroll = scroll

    // if (!resized && deltaScroll == 0) {
    //   resized = false
    //   requestAnimationFrame(animate)
    //   return
    // } else {
    //   resized = false
    // }
    const deltaTime = time - prevTime
    prevTime = time
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, `hsl(${20 + scroll / 10}, 80%, 60%)`)
    grad.addColorStop(1, `hsl(${80 + scroll / 10}, 80%, 60%)`)
    ctx.fillStyle = grad
    // 背景の描画
    ctx.fillRect(0, 0, width, height)

    ctx.fillStyle = "rgba(255, 255, 255, 50%)"
    // 円の描画
    for (let i = 0; i < count * nProps; i += nProps) {
      data[i + 1] = (data[i + 1] - deltaScroll / height * data[i + 3] + 1) % 1
      data[i] = (data[i] + deltaTime / 100000 * data[i + 3]) % 1
      ctx.beginPath()
      ctx.arc(data[i] * width, data[i + 1] * height, data[i + 2], 0, 2 * Math.PI)
      ctx.fill()
    }

    requestAnimationFrame(animate)
  }
  animate(0)
})
</script>

<template>
  <canvas ref="canvas" class="w-screen h-screen" />
</template>
