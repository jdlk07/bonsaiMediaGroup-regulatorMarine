import Slider from '@ant-design/react-slick'
import Link from '@components/links/link'
import { StaticImageData } from 'next/image'
import { ComponentPropsWithoutRef, useRef, useState } from 'react'
import { WidgetModel } from '../../../../../../lib/umbraco/types/widgetModel.type'
import WidgetWrapper from '../widgetWrapper'
import styles from './carousel.module.scss'

interface CarouselBoatsVariant extends WidgetModel {
  variant: 'Boats'
  content: {
    builderLink: string
    items: {
      video: string
      detailsLink: string
      modelNumber: string
      stats: { name: string; value: string }[]
    }[]
  }
}

interface CarouselTextVariant extends WidgetModel {
  variant: 'Text'
  content: {
    items: {
      text: string
      link: { label: string; url: string }
      background: string | StaticImageData
    }[]
  }
}

function isBoatsVariant(
  model: CarouselBoatsVariant | CarouselTextVariant
): model is CarouselBoatsVariant {
  return model.variant === 'Boats'
}

export default function Carousel(
  model: CarouselBoatsVariant | CarouselTextVariant
) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sliderRef = useRef<Slider>(null)

  const [currentSlide, setCurrentSlide] = useState(0)

  let sliderSettings: ComponentPropsWithoutRef<typeof Slider> = {}

  console.log({ currentSlide })

  if (isBoatsVariant(model)) {
    sliderSettings = {
      centerMode: true,
      centerPadding: '0', //Prevents the non-visible slides from peeking out the edge when using centerMode: true
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      initialSlide: 3,
      autoplay: true,
      dots: true,
      customPaging: (i) => (
        <h2 className={'pickerLabel'}>{model.content.items[i].modelNumber}</h2>
      ),
      afterChange: (newSlide) => setCurrentSlide(newSlide),
    }
  }

  return (
    <WidgetWrapper model={model} styles={styles}>
      <Slider {...sliderSettings} ref={sliderRef}>
        {model.content.items.map((item, i) => (
          <div
            key={i}
            className={`${styles.carouselItem} ${
              i == currentSlide - 1
                ? styles.toLeft
                : i == currentSlide + 1
                ? styles.toRight
                : ''
            }`}
          >
            <div className={styles.modelContainer}>
              {'video' in item && (
                <video
                  src={item.video}
                  className={styles.video}
                  loop
                  //   autoPlay
                  muted
                  playsInline
                  ref={videoRef}
                />
              )}
              {'modelNumber' in item && (
                <div className={styles.overlayContainer}>
                  <div className={styles.labelContainer}>
                    <h2 className={styles.modelLabel}>{item.modelNumber}</h2>
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
              )}
            </div>
          </div>
        ))}
      </Slider>
    </WidgetWrapper>
  )
}
