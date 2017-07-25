import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/header'

export default ({ children, title = 'Aricka Lewis' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet"/>
      <link href="/static/css/bootstrap.min.css" rel="stylesheet"/>
      <link href="/static/css/style.css" rel="stylesheet"/>
    </Head>
    <Header/>

    {children}

    <footer className='footer text-right'>
      <div className='container'>
        {'© 2017 I finally got around to designing a site for myself. Hooray!'}
      </div>
    </footer>
  </div>
)
