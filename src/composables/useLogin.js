const { ref } = require("@vue/reactivity");

const error = ref(null)

const login = async (data) => {
    const url = 'https://brivo.gumiennik.duckdns.org/api/auth/login/'
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

const useLogin = () => {
    return { error, login }
}

export default useLogin