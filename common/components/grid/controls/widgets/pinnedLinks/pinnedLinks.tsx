import Link from '@components/links/link'
import { useGSAP } from '@gsap/react'
import { WidgetModel } from '@lib/umbraco/types/widgetModel.type'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import WidgetWrapper from '../widgetWrapper'
import styles from './pinnedLinks.module.scss'

gsap.registerPlugin(ScrollTrigger)

interface PinnedLinksContent {
  links: {
    icon: string
    label: string
    url: string
  }[]
}

export default function PinnedLinks(model: WidgetModel) {
  const { links } = model.content as PinnedLinksContent

  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'bottom bottom',
      endTrigger: 'body',
      // end: 'bottom bottom',
      pinSpacing: false,
      pin: true,
      // markers: true,
    })
  }, [])

  return (
    <WidgetWrapper model={model} styles={styles} ref={containerRef}>
      {links.map(({ icon: Icon, label, url }, i) => {
        // let Icon = icon.src

        return (
          <Link key={i} href={url}>
            {/* <img src={icon.src} /> */}
            <Icon />
            {/* <AnchorIcon /> */}
            {/* <i className={'fa ' + icon}></i> */}
            {/* <FontAwesomeIcon icon={'anchor'} /> */}
            <p
              className={styles.label}
              dangerouslySetInnerHTML={{ __html: label }}
            ></p>
          </Link>
        )
      })}
    </WidgetWrapper>
  )
}
