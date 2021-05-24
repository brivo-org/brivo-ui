<template>
  <transition name="signup" appear>
    <form @submit.prevent="handleSubmit">
        <h3>Sign up</h3>
        <input type="text" placeholder="Display name" v-model="displayName">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <input type="password" placeholder="Confirm Password" v-model="confirmPassword">
        <select v-model="general">
          <option selected value="null">General units</option>
          <option>Metric</option>
          <option>Imperial</option>
        </select>
        <select v-model="gravity">
          <option selected value="null">Gravity units</option>
          <option>Plato</option>
          <option>SG</option>
        </select>
        <!-- <div v-if="error" class="error">{{ error }}</div> -->
        <button>Sign up</button>
    </form>
  </transition>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const displayName = ref('')
    const email = ref('')
    const password = ref('')
    const confirmPassword = ref('')
    const general = ref(null)
    const gravity = ref(null)
    
    const handleSubmit = () => {
      console.log(displayName.value, email.value, password.value, confirmPassword.value, general.value, gravity.value)
    }
    
    return { displayName, email, password, confirmPassword, general, gravity, handleSubmit }
  }
}
</script>

<style>
.signup-enter-from, .signup-leave-to {
  opacity: 0;
  transform: scale(0.3);
}
.signup-enter-active {
  transition: all ease .3s;
}
</style>