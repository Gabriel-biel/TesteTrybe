import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from '../contexts/AuthContext'
import { TransactionProvider } from '../contexts/TransactionContext'
import { globalStyles } from '../styles/global'
import { AppContainer } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <TransactionProvider>
        <AppContainer>
          <Component {...pageProps} />
          <ToastContainer autoClose={5000} />
        </AppContainer>
      </TransactionProvider>
    </AuthProvider>
  )
}
