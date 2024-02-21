import Link from '@components/links/link'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { WidgetModel } from '../../../../../../../lib/umbraco/types/widgetModel.type'
import styles from './boatsCarousel.module.scss'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Draggable)

export interface CarouselBoatsVariant extends WidgetModel {
  variant: 'Boats'
  content: {
    builderLink: string
    initialValue?: number
    items: {
      video: string
      detailsLink: string
      modelNumber: string
      stats: { name: string; value: string }[]
    }[]
  }
}

export const BoatsCarousel = (model: CarouselBoatsVariant) => {
  const initialValue = model.content.initialValue ?? 0

  const container = useRef<HTMLDivElement>(null)
  const animVal = useRef({ activeItem: 0 })
  const autoPlayRef = useRef<NodeJS.Timeout>()

  const { contextSafe } = useGSAP({
    dependencies: [],
    scope: container,
  })

  const changeActiveSlide = contextSafe(
    (newSlide: number, setImmediate?: boolean) => {
      let carouselItems = gsap.utils.toArray<HTMLElement>('.boatItem')
      let dots = gsap.utils.toArray<HTMLElement>('.boatDot')

      const onUpdate = () => {
        carouselItems.forEach((item, i) => {
          item.classList.remove('active')

          let value = animVal.current.activeItem

          const xTransformer = gsap.utils.pipe(
            gsap.utils.mapRange(i - 2, i + 2, 0, 1),
            gsap.utils.clamp(0, 1),
            gsap.utils.interpolate(['300%', '100%', `-100%`])
          )

          const scaleTransformer = gsap.utils.pipe(
            gsap.utils.mapRange(i - 1, i + 1, 0, 1),
            gsap.utils.clamp(0, 1),
            gsap.utils.interpolate([0.8, 1, 0.8])
          )

          const rotateTransformer = gsap.utils.pipe(
            gsap.utils.mapRange(i - 1, i + 1, 0, 1),
            gsap.utils.clamp(0, 1),
            gsap.utils.interpolate(['-15deg', '15deg'])
          )

          const setValues = gsap.quickSetter(item, 'css')

          setValues({
            x: xTransformer(value),
            scale: scaleTransformer(value),
            rotateY: rotateTransformer(value),
            //   // autoAlpha: value < i - 2 || value > i + 2 ? 0 : 1, //Hides the element once it's offscreen (visibility: hidden, opacity: 0)
            //   // display: value < i - 2 || value > i + 2 ? 'none' : 'block', //Causes performance issues
          })

          //Animations for the navigation buttons (model numbers) above the carousel

          // const dotScaleTransformer = gsap.utils.pipe(
          //   gsap.utils.mapRange(i - 3, i + 3, 0, 1),
          //   gsap.utils.clamp(0, 1),
          //   gsap.utils.interpolate([0.3, 0.4, 1, 0.4, 0.3])
          // )

          const dotFontSizeTransformer = gsap.utils.pipe(
            gsap.utils.mapRange(i - 3, i + 3, 0, 1),
            gsap.utils.clamp(0, 1),
            gsap.utils.interpolate(['1rem', '2.8rem', '1rem'])
          )

          const setDotValues = gsap.quickSetter(dots[i], 'css')

          setDotValues({
            // scale: dotTransformer(value),
            // transform: `scale(${dotScaleTransformer(
            //   value
            // )}) translateZ(0) perspective(1px)`,
            fontSize: dotFontSizeTransformer(value),
          })
        })
      }

      if (setImmediate) {
        gsap.set(animVal.current, {
          activeItem: newSlide,
          onUpdate,
          onComplete: () => carouselItems[newSlide].classList.add('active'),
        })
      } else {
        gsap.to(animVal.current, {
          activeItem: newSlide,
          duration: 0.6,
          onUpdate,
          onComplete: () => carouselItems[newSlide].classList.add('active'),
        })
      }
    }
  )

  useEffect(() => {
    changeActiveSlide(initialValue, true)
  }, [initialValue, changeActiveSlide])

  const onLeftHover = () => {
    const goToPrev = () => {
      let currentItem = Math.floor(animVal.current.activeItem)
      if (currentItem > 0) {
        changeActiveSlide(currentItem - 1)
      } else {
        autoPlayRef.current && clearTimeout(autoPlayRef.current)
      }
      autoPlayRef.current = setTimeout(() => goToPrev(), 1000)
    }

    goToPrev()
  }

  const onRightHover = () => {
    const goToNext = () => {
      let currentItem = Math.floor(animVal.current.activeItem)
      if (currentItem < model.content.items.length - 1) {
        changeActiveSlide(currentItem + 1)
      } else {
        autoPlayRef.current && clearTimeout(autoPlayRef.current)
      }
      autoPlayRef.current = setTimeout(() => goToNext(), 1000)
    }

    goToNext()
  }

  return (
    <div className={styles.wrapper} ref={container}>
      <ul className={styles.dots}>
        {model.content.items.map(({ modelNumber }, i) => (
          <li
            key={i}
            className={`boatDot ${styles.dot}`}
            onClick={() => changeActiveSlide(i)}
          >
            <h1 className={styles.dotLabel}>{modelNumber}</h1>
          </li>
        ))}
      </ul>
      <div className={styles.boatsWrapper}>
        <span
          className={styles.sideHoverContainer}
          onMouseEnter={onLeftHover}
          onMouseLeave={() =>
            autoPlayRef.current && clearTimeout(autoPlayRef.current)
          }
        />
        <ul className={styles.carouselWrapper}>
          <li className={`${styles.carouselItem} ${styles.dummyItem}`}>
            <div className={styles.modelContainer} />
          </li>
          {model.content.items.map((item, i) => (
            <BoatCarouselItem
              key={i}
              {...item}
              onClick={() => changeActiveSlide(i)}
            />
          ))}
        </ul>
        <span
          className={styles.sideHoverContainer}
          onMouseEnter={onRightHover}
          onMouseLeave={() =>
            autoPlayRef.current && clearTimeout(autoPlayRef.current)
          }
        />
      </div>
    </div>
  )
}

type BoatContent = CarouselBoatsVariant['content']['items'][number]

interface BoatCarouselItemProps extends BoatContent {
  onClick: () => void
}

const BoatCarouselItem = ({ onClick, ...item }: BoatCarouselItemProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const fullStatsRef = useRef<HTMLUListElement>(null)

  const expandStats = () => {
    gsap.to(fullStatsRef.current, {
      height: 'auto',
      autoAlpha: 1,
      duration: 0.25,
      ease: 'power1.inOut',
    })
  }

  const minimizeStats = () => {
    gsap.to(fullStatsRef.current, {
      height: '2rem',
      autoAlpha: 0,
      duration: 0.25,
      ease: 'power1.inOut',
    })
  }

  return (
    <li className={`boatItem ${styles.carouselItem}`}>
      <div
        className={styles.modelContainer}
        onClick={onClick}
        onMouseEnter={(e) => videoRef.current?.play()}
        onMouseLeave={(e) => videoRef.current?.pause()}
        onFocus={onClick}
      >
        <video
          src={item.video}
          className={styles.video}
          loop
          //   autoPlay
          muted
          playsInline
          ref={videoRef}
        />
        <div className={styles.overlayContainer}>
          <div className={styles.labelContainer}>
            <h1 className={styles.modelLabel}>{item.modelNumber}</h1>
          </div>
          <div className={styles.buttonsContainer}>
            <Link href={'/'} className='button'>
              VIEW <strong>DETAILS</strong>
            </Link>
            <Link href={'/'} className='button'>
              <strong>BUILD</strong> YOUR {item.modelNumber!}
            </Link>
          </div>
        </div>
      </div>
      <div
        className={styles.ticker}
        onMouseEnter={expandStats}
        onMouseLeave={minimizeStats}
      >
        <div className={styles.tickerContainer}>
          <ul className={styles.tickerSubContainer}>
            {item.stats.map(({ name, value }, i) => (
              <p key={i} className={styles.tickerStat}>
                <strong>{name}:</strong>
                {value}
              </p>
            ))}
          </ul>
          <ul className={styles.tickerSubContainer}>
            {item.stats.map(({ name, value }, i) => (
              <p key={i} className={styles.tickerStat}>
                <strong>{name}:</strong>
                {value}
              </p>
            ))}
          </ul>
        </div>
        <ul className={styles.statsFullView} ref={fullStatsRef}>
          {item.stats.map(({ name, value }, i) => (
            <p key={i} className={styles.tickerStat}>
              <strong>{name}:</strong>
              {value + (i < item.stats.length - 1 ? ' | ' : '')}
            </p>
          ))}
        </ul>
      </div>
    </li>
  )
}
