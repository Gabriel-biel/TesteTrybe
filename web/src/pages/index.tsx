import { HomeContainer } from "../styles/pages/home";

import { Summary } from "../components/Summary";
import { Transactions } from "../components/Transactions";
import { SearchForm } from "../components/SearchForm";
import { Header } from "../components/Header";
import { GetServerSideProps } from "next";
import { parseCookies, destroyCookie } from "nookies";
import { getAPIClient } from "../services/axios";


export default function Home() {
  return (
    <HomeContainer >
      <Header />
      <Summary />
      <SearchForm />
      <Transactions />
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx)
  const { '@ng_trybe.token-1.0.0': token } = parseCookies(ctx)

  if(!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  const response = await apiClient.get('/users')

  if(!response.data.user.id) {
    destroyCookie(ctx, '@ng_trybe.token-1.0.0')
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}