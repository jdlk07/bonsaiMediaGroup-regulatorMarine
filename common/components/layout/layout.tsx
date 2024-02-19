import Footer from '@components/footer/footer'
import Header from '@components/header/header'
import { FooterContent, HeaderContent } from 'content/global'
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion'
import Head from 'next/head'
export type LayoutData = {
  children: React.ReactNode
  /**Header background will be partially transparent at top of page until scrolled by 50px. Default is false. */
  transparentHeader?: boolean
}

export default function Layout({ children, transparentHeader }: LayoutData) {
  const animation = {
    variants: {
      initial: {
        opacity: 0,
        x: 0,
      },
      animate: {
        opacity: 1,
        x: 0,
      },
      exit: {
        x: '-100%',
      },
    },
    transition: {
      duration: 0.6,
    },
  }

  const resetScroll = () => window.scrollTo(0, 0)
  return (
    <>
      <Head>
        <meta name='HandheldFriendly' content='True' />
        <meta name='MobileOptimized' content='320' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, user-scalable=no'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        />
        {/* <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
          integrity='sha512-lgad0FGvz7LmR7G1b5urJhjxk5ELfzeq0PZZppFst5iQGJkEhDr5N5hrO3et4sI2LGQaOe18iv8V1xl7G9uLIw=='
        /> */}
      </Head>
      <Header {...HeaderContent} startTransparent={transparentHeader} />
      <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter onExitComplete={resetScroll}>
          <m.div
            className='animationWrapper'
            initial='initial'
            animate='animate'
            exit='exit'
            transition={animation.transition}
            variants={animation.variants}
          >
            <main id='content'>{children}</main>
            <Footer {...FooterContent} />
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </>
  )
}
