<template>
  <transition name="signup" appear>
    <form @submit.prevent="handleSubmit">
        <h3>{{ $t('register') }}</h3>
        <input type="text" :placeholder="$t('username')" v-model="data.username" required>
        <input type="email" placeholder="Email" v-model="data.email" required>
        <input type="password" :placeholder="$t('password')" v-model="data.password1" required>
        <input type="password" :placeholder="$t('confirm-password')" v-model="data.password2" required>
        <div v-if="error" class="error">{{ error }}</div>
        <button>{{ $t('register') }}</button>
        <p>{{ $t('already-account') }} <router-link :to="{ name: 'Signin' }">{{ $t('login') }}</router-link></p>
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