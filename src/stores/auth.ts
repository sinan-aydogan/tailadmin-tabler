import {ref} from 'vue'
import {defineStore} from 'pinia'
import {useStorage} from "@vueuse/core";

export const useAuthStore = defineStore('auth', () => {
    const loading = ref(false)
    const user = ref({
        name: 'Sinan AYDOĞAN',
        title: 'Web Developer',
    })
    const token = useStorage('token', 'Yurtta sulh, cihanda sulh. - Mustafa Kemal ATATÜRK', localStorage, {mergeDefaults: true})

    /*Set User Data*/
    const setUser = (payload: object) => {
        // @ts-ignore
        user.value = payload
    }

    /*Set Token*/
    const setToken = (payload: string) => {
        token.value = payload
    }

    /*Login*/
    const login = ref({
        form: {
            username: 'admin',
            password: 'tailadmin'
        },
        submit: async () => {
            loading.value = true


            /*You can write your API request method*/

            //axios.post('##.com/api/login', login.value.form)
            //    .then((response) => {
            //        setUser(response.data.user)
            //    })

            setTimeout(() => {
                if (login.value.form.username === 'admin' && login.value.form.password === 'tailadmin') {
                    setUser({
                        name: 'Sinan AYDOĞAN',
                        title: 'Web Developer',
                    })

                    setToken('Yurtta sulh, cihanda sulh. - Mustafa Kemal ATATÜRK')
                }

                loading.value = false
            }, 1000)

        }
    })

    /*Logout*/
    const logout = () => {
        // @ts-ignore
        user.value = {}
        token.value = ''
    }

    return {user, login, logout, loading}
})
