import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Let's Do</title>
        <meta name="description" content="Awesome Todo app to store your todos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box>Hello world!</Box>
      </main>
      
    </div>
  )
}
