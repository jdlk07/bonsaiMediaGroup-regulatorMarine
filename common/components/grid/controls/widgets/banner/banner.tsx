import { WidgetModel } from '@lib/umbraco/types/widgetModel.type'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import WidgetWrapper from '../widgetWrapper'
import styles from './banner.module.scss'

gsap.registerPlugin(ScrollTrigger)

export default function Banner(model: WidgetModel) {
  const videoRef = useRef<HTMLVideoElement>(null)

  let { widget, variant, layout, content } = model

  useEffect(() => {
    if (content.video) {
      ScrollTrigger.create({
        trigger: videoRef.current,
        onEnter: () => videoRef.current?.play(),
        onEnterBack: () => videoRef.current?.play(),
        onLeave: () => videoRef.current?.pause(),
        onLeaveBack: () => videoRef.current?.pause(),
      })
    }
  }, [content.video])

  return (
    <WidgetWrapper model={model} styles={styles}>
      <div className={styles.container}>
        {content.image ? (
          <Image
            src={content.image}
            alt='Boat On Water'
            className={styles.bgImg}
          />
        ) : content.video ? (
          <video
            src={content.video}
            className={styles.bgVideo}
            loop
            autoPlay
            muted
            playsInline
            ref={videoRef}
          />
        ) : null}
        <div
          className={styles.textBox}
          dangerouslySetInnerHTML={{ __html: content.text }}
        />
      </div>
    </WidgetWrapper>
  )
}
