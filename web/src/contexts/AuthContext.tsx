import React, { createContext, ReactNode, useState } from 'react'
import { api } from '../services/api'
import { setCookie } from 'nookies'
import Router from 'next/router'

interface User {
  id: string
  username: string
}

export interface SignInData {
  username: string
  password: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  signIn: (data: SignInData) => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)

  const isAuthenticated = !!user

  async function signIn({ username, password }: SignInData) {
    const response = await api.post('/users/authenticate', {
      username,
      password,
    })

    const { token, user } = response.data

    setCookie(undefined, '@ng_trybe.token-1.0.0', token, {
      maxAge: 60 * 60 * 24, // 1DIA
    })

    api.defaults.headers.common.Authorization = `Bearer ${token}`
    setUser(user)
    Router.push('/home')
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signIn,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
