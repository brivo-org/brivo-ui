<template>
    <transition name="signin" appear>
        <form @submit.prevent="handleSubmit">
            <h3>Login</h3>
            <input type="email" placeholder="Email" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <!-- <div v-if="error" class="error">{{ error }}</div> -->
            <button>Log In</button>
        </form>
    </transition>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const email = ref('')
        const password = ref('')
        
        const handleSubmit = () => {
            console.log(email.value, password.value)
        }
        
        return { email, password, handleSubmit }
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