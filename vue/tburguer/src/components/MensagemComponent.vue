<template>
  <div v-if="message" :class="['message', message.type]" class="message-container">
    <img v-if="message.image" :src="message.image" class="message-image"/>
    <span>{{ message.text }}</span>
  </div>
</template>

<script>
export default {
  name: "MensagemComponent",
  props: {
    message: {
      type: Object,
      default: () => null
    }
  }
}
</script>

<style scoped>
.message-container {
  padding: 1em;
  border-radius: 4px;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
}

.message {
  font-size: 1em;
  display: flex;
  align-items: center;
}

.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.message-image {
  width: 20px;
  height: 20px;
  margin-right: 0.5em;
}
</style>
