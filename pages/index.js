import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Hello,I am Vita Lu. I am a community product manager. You can contact me via {' '}
              <a href="luchenling@pingcap.com">my email</a>.</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://www.nextjs.cn/learn">our Next.js tutorial</a>.)
          </p>
        </section>
      </Layout>
  )
}