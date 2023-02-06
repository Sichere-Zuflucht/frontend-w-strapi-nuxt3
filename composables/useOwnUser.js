export const useUser = () => {
    
    const user = useStrapiUser()

    async function login(){
        const router = useRouter()
        const { login } = useStrapiAuth()
        try {
            await login({ identifier: 'ulrichbenedikt@gmail.com', password: 'B3n3d1ktUlr1ch!!' })
            router.push('/dashboard')
            
        } catch (e) {}
    }

    return {user, login}
}