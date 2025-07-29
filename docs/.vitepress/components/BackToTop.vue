<!-- .vitepress/components/BackToTop.vue -->
<template>
  <Transition name="back-to-top">
    <div
      v-show="visible"
      class="back-to-top"
      @click="scrollToTop"
      title="返回顶部"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m18 15-6-6-6 6"/>
      </svg>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

const handleScroll = () => {
  visible.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.back-to-top {
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 50px;
  height: 50px;
  background: var(--vp-c-brand);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 999;
  color: white;
}

.back-to-top:hover {
  background: var(--vp-c-brand-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.back-to-top:active {
  transform: translateY(0);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .back-to-top {
    right: 20px;
    bottom: 20px;
    width: 45px;
    height: 45px;
  }
}

/* 过渡动画 */
.back-to-top-enter-active,
.back-to-top-leave-active {
  transition: all 0.3s ease;
}

.back-to-top-enter-from,
.back-to-top-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.back-to-top-enter-to,
.back-to-top-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* 深色模式适配 */
.dark .back-to-top {
  background: var(--vp-c-brand);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.dark .back-to-top:hover {
  background: var(--vp-c-brand-light);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}
</style>