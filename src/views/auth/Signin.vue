<template>
    <transition name="signin" appear>
        <form @submit.prevent="handleSubmit">
            <h3>{{ $t('login') }}</h3>
            <input type="email" placeholder="Email" v-model="data.email" required>
            <input type="password" :placeholder="$t('password')" v-model="data.password" required>
            <div v-if="error" class="error">{{ error }}</div>
            <button>{{ $t('login-btn') }}</button>
            <p>{{ $t('not-account') }} <router-link :to="{ name: 'Signup' }">{{ $t('register') }}</router-link></p>
        </form>
    </transition>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../../composables/useLogin'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const data = ref({
            email: '',
            password: ''
        })
        
        const router = useRouter()
        
        const { error, login } = useLogin()
        
        const handleSubmit = async () => {
            await login(data.value)
            if(!error.value){
                console.log('User logged in')
                router.push({ name: 'Home' })
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