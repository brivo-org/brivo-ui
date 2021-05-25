<template>
    <transition name="signin" appear>
        <form @submit.prevent="handleSubmit">
            <h3>Login</h3>
            <input type="email" placeholder="Email" v-model="data.email" required>
            <input type="password" placeholder="Password" v-model="data.password" required>
            <div v-if="error" class="error">{{ error }}</div>
            <button>Log In</button>
            <p>You dont have an account yet? <router-link :to="{ name: 'Signup' }">Sign Up</router-link></p>
        </form>
    </transition>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../../composables/useLogin'

export default {
    setup() {
        const data = ref({
            email: '',
            password: ''
        })
        
        const { error, login } = useLogin()
        
        const handleSubmit = async () => {
            await login(data.value)
            if(!error.value){
                console.log('User logged in')
            }
        }
        
        return { data, error, handleSubmit }
    }
}
</script>

<style>
.signin-enter-from, .signin-leave-to {
  opacity: 0;
  transform: scale(0.3);
}
.signin-enter-active {
  transition: all ease .3s;
}
</style>