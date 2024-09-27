import axios from 'axios'

export const login = async ({ email, password }) => {

    const body = {
        email,
        password
   }
    try {
        const response = await axios.post(`${import.meta.env.VITE_BASEURL}/auth/login`, body, {withCredentials: true})
        console.log(response)
        if (response) {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_BASEURL}/user/dashboard`, {withCredentials:true})
                return data.msg
            } catch (err) {
                console.log(err)
            }
        }
    } catch (err) {
        console.log(err)
    }
}