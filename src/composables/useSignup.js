import { ref } from "@vue/reactivity";

const error = ref(null)

const signup = async (data) => {
    const url = 'https://brivo.gumiennik.duckdns.org/api/auth/registration/'
    console.log(JSON.stringify(data))
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        error.value = error
        console.error('Error:', error);
    });
}

const useSignup = () => {
    return { error, signup}
}

export default useSignup