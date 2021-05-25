<template>
  <transition name="signup" appear>
    <form @submit.prevent="handleSubmit">
        <h3>Register</h3>
        <input type="text" placeholder="User name" v-model="data.username" required>
        <input type="email" placeholder="Email" v-model="data.email" required>
        <input type="password" placeholder="Password" v-model="data.password1" required>
        <input type="password" placeholder="Confirm Password" v-model="data.password2" required>
        <!-- <select v-model="general">
          <option selected value="null">General units</option>
          <option value="METRIC">Metric</option>
          <option value="IMPERIAL">Imperial</option>
        </select>
        <select v-model="gravity">
          <option selected value="null">Gravity units</option>
          <option value="PLATO">Plato</option>
          <option value="SG">SG</option>
        </select> -->
        <!-- <div v-if="error" class="error">{{ error }}</div> -->
        <div v-if="error" class="error">{{ error }}</div>
        <button>Sign up</button>
        <p>Already have an account? <router-link :to="{ name: 'Signin' }">Sign In</router-link></p>
    </form>
  </transition>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../../composables/useSignup'
import { useRouter } from 'vue-router'

export default {
  setup() {
    // Form inputs
    const data = ref({
      username: '',
      email: '',
      password1: '',
      password2: ''
    })
    
    const { error, signup } = useSignup()
    
    const router = useRouter()
    
    const handleSubmit = async () => {
      // After clicking signup button
      await signup(data.value)
      if(!error.value) {
        // After success signup
      }
      
    }
    
    return { data, error, handleSubmit }
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