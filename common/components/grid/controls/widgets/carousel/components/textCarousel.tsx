import Link from '@components/links/link'
import { AnimatePresence, Variants, motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import ArrowIcon from '../../../../../../../content/media/iconButtonArrow.svg'
import { WidgetModel } from '../../../../../../../lib/umbraco/types/widgetModel.type'
import styles from './textCarousel.module.scss'

export interface CarouselTextVariant extends WidgetModel {
  variant: 'Text'
  content: {
    initialValue?: number
    items: {
      text: string
      link: { label: string; url: string }
      background: string | StaticImageData
      imageAlt: string
    }[]
  }
}

export const TextCarousel = ({ variant, content }: CarouselTextVariant) => {
  let { items, initialValue } = content

  const [activeItem, setActiveItem] = useState(initialValue ?? 0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const [animating, setAnimating] = useState(false)

  const goToNextItem = () => {
    if (!animating) {
      setAnimating(true)
      setDirection('right')
      setActiveItem((s) => (s + 1 > items.length - 1 ? 0 : s + 1))
    }
  }

  const goToPrevItem = () => {
    if (!animating) {
      setAnimating(true)
      setDirection('left')
      setActiveItem((s) => (s - 1 < 0 ? items.length - 1 : s - 1))
    }
  }

  let item = items[activeItem]

  return (
    <div className={styles.wrapper}>
      <button
        className={`arrowButton ${styles.navButton}`}
        onClick={goToPrevItem}
      >
        <ArrowIcon />
      </button>
      <AnimatePresence
        initial={false}
        onExitComplete={() => setAnimating(false)}
      >
        <motion.div
          key={activeItem}
          className={styles.carouselItem}
          variants={slideVariants}
          initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
          animate='visible'
          exit={direction === 'right' ? 'exitLeft' : 'exitRight'}
        >
          <Image
            src={item.background}
            alt={item.imageAlt}
            className={styles.bgImg}
          />
          <div className={styles.contentContainer}>
            <motion.div
              initial={{ y: '20px', opacity: 0 }}
              animate={{
                y: '0%',
                opacity: 1,
                transition: { duration: 0.35, delay: 0.5 },
              }}
              className={styles.bodyContainer}
              dangerouslySetInnerHTML={{ __html: item.text }}
            ></motion.div>
            <motion.div
              initial={{ y: '0px', opacity: 0 }}
              animate={{
                y: '0%',
                opacity: 1,
                transition: { duration: 0.35, delay: 0.75 },
              }}
              className={styles.buttonContainer}
            >
              <Link
                href={item.link.url}
                className={`gradientButton ${styles.gradientButton}`}
              >
                {item.link.label}
              </Link>
            </motion.div>
          </div>
        </motion.div>
        {/* {items.map((item, i) => {
          if (activeItem == i) {
            return (
              <motion.div
                key={i}
                className={styles.carouselItem}
                initial={{
                  x: i > activeItem ? '100%' : '-100%',
                }}
                animate={{
                  x: '0%',
                  transition: { duration: 1 },
                }}
                exit={{
                  x: activeItem < i ? '100%' : '-100%',
                  transition: { duration: 1 },
                }}
              >
                <Image
                  src={item.background}
                  alt={item.imageAlt}
                  className={styles.bgImg}
                />
                <div className={styles.contentContainer}>
                  <div
                    className={styles.bodyContainer}
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  ></div>
                  <Link href={item.link.url} className={styles.gradientButton}>
                    {item.link.label}
                  </Link>
                </div>
              </motion.div>
            )
          }
        })} */}
      </AnimatePresence>
      <button
        className={`arrowButton right ${styles.navButton}`}
        onClick={goToNextItem}
      >
        <ArrowIcon />
      </button>
    </div>
  )
}

const slideVariants: Variants = {
  hiddenRight: {
    x: '100%',
    // opacity: 0,
  },
  hiddenLeft: {
    x: '-100%',
    // opacity: 0,
  },
  visible: {
    x: '0',
    // opacity: 1,
    transition: {
      duration: 0.5,
      // delay: 0.5,
      ease: 'linear',
    },
  },
  exitRight: {
    x: '100%',
    transition: {
      duration: 0.5,
      // delay: 0.5,
      ease: 'linear',
    },
  },
  exitLeft: {
    x: '-100%',
    transition: {
      duration: 0.5,
      // delay: 0.5,
      ease: 'linear',
    },
  },
}
