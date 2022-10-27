import { useState } from 'react';
import {SessionContextProvider} from '@supabase/auth-helpers-react'
import {createBrowserSupabaseClient} from '@supabase/auth-helpers-nextjs'
import Head from 'next/head'
import Layout from '../components/Layout';
import '../styles/globals.css'
import ContextProvider from '../context/ContextProvider';


function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  return (
  <SessionContextProvider
      supabaseClient= {supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <ContextProvider>
        <Head>
        <title>Activities</title>
          </Head>
            <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>   
    </SessionContextProvider>
  )
}

export default MyApp;
