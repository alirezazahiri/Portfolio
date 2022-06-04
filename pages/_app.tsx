import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  const TempComponent = Component as any 
  return (
    <Layout>
      <TempComponent {...pageProps} />
   </Layout>
  )
}

export default MyApp
