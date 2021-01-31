import Head from 'next/head'
import styles from '../../styles/Home.module.css'

const Layout = ({ children, title, description }) => {
  return (
    <div className={styles.container}>
      <Head>
        <meta name='description' content={description} />
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="container">
          { children }
        </div>
      </main>

      <footer className={styles.footer}>
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </footer>
    </div>
  )
}

export default Layout;