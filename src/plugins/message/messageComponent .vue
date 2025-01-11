<template>
  <div v-if="visible" :class="['message-container', position]" :style="{ top: position === 'top' ? '10px' : '', bottom: position === 'bottom' ? '10px' : '' }">
    <div :class="['message-content', type]">
      <span v-if="loading" class="loading-icon">...</span>
      <span v-else>{{ message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      message: '',
      type: '',
      position: 'center',
      duration: 2000,
      loading: false,
    };
  },
  methods: {
    showMessage({ message, type = 'default', position = 'center', duration = 2000, loading = false }) {
      this.message = message;
      this.type = type;
      this.position = position;
      this.duration = duration;
      this.loading = loading;
      this.visible = true;

      setTimeout(() => {
        this.visible = false;
      }, this.duration);
    },
  },
};
</script>

<style scoped>
.message-container {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  z-index: 9999;
  text-align: center;
  max-width: 80%;
  min-width: 150px;
}

.message-container.top {
  top: 10px;
}

.message-container.bottom {
  bottom: 10px;
}

.message-content {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 5px;
  box-sizing: border-box;
}

.message-content.default {
  background-color: rgba(0, 0, 0, 0.7);
}

.message-content.success {
  background-color: #59d892;
}

.message-content.error {
  background-color: #dc3545;
}

.message-content.loading {
  background-color: #f0ad4e;
}

.loading-icon {
  margin-right: 5px;
}
</style>