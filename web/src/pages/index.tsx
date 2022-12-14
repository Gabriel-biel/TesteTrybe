import logoNGTrybe from '../assets/logo_ng.png'
import Image from 'next/legacy/image'
import { InputContainer, LoginContainer } from '../styles/pages/login'
import { Lock, User } from 'phosphor-react'
import { useContext } from 'react'
import { AuthContext, SignInData } from '../contexts/AuthContext'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export default function Login() {
  const { signIn } = useContext(AuthContext)

  const { register, handleSubmit } = useForm<SignInData>()

  async function handleSignIn({ username, password }: SignInData) {
    try {
      await signIn({ username, password })
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <LoginContainer>
      <section>
        <Image src={logoNGTrybe} alt="" width={56} height={56} />
        <h1>Faça seu login na plataforma</h1>
      </section>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <InputContainer>
          <User size={18} />
          <input
            required
            type="text"
            placeholder="Usuário"
            {...register('username')}
          />
        </InputContainer>
        <InputContainer>
          <Lock size={18} />
          <input
            required
            type="password"
            placeholder="Senha"
            {...register('password')}
          />
        </InputContainer>
        <button type="submit">ENTRAR</button>
        <span>
          Não tem uma conta? <a href="/signup">Registre-se</a>
        </span>
      </form>
    </LoginContainer>
  )
}
