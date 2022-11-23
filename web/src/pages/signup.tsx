import * as z from 'zod'
import { useForm } from 'react-hook-form'

import logoNGTrybe  from '../assets/logo_ng.png'
import Image from 'next/legacy/image'
import { InputContainer, LoginContainer } from '../styles/pages/login'
import { Lock, User } from 'phosphor-react'
import { api } from '../services/api'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const registerUserFormSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(8),
})

type RegisterFormData = z.infer<typeof registerUserFormSchema>

export default function Signup() {
  const { register, handleSubmit} = useForm<RegisterFormData>()
  const { signIn } = useContext(AuthContext)

  async function handleFormInputRegister({ username, password }: RegisterFormData){
    const response = await api.post('/users', {
      username,
      password
    })
    
    signIn({username, password})
  }
  
  return (
    <LoginContainer>
      <section>
        <Image src={logoNGTrybe} alt='' width={56} height={56}/>
        <h1>Cadastre-se Gratuitamente</h1>
      </section>
      <form onSubmit={handleSubmit(handleFormInputRegister)}>
        <InputContainer>
          <User size={18}/>
          <input type="text" placeholder='Usuário' {...register('username')}/>
        </InputContainer>
        <InputContainer>
          <Lock size={18}/>
          <input type="password" placeholder='Senha' {...register('password')}/>
        </InputContainer>
        <button type='submit'>CADASTRAR</button>
        <span>
          já tem uma conta? <a href="/login">Faça Login</a>
        </span>
      </form>
    </LoginContainer>
  )
}