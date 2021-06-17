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
    .then(response => {
        if(response.ok){
            error.value = null
        } 
        else {
            //console.log(response)
            return response.json()
        }
    })
    .then(data => {
        throw new Error(data.non_field_errors[0])
    })
    .catch(err => {
        error.value = err.message
    }) 
    
    
}

const useLogin = () => {
    return { error, login }
}

export default useLogin