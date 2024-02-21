import ScrollLink from '@components/links/link'
import { WidgetModel } from '@lib/umbraco/types/widgetModel.type'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import ArrowIcon from '../../../../../../content/media/iconButtonArrow.svg'
import WidgetWrapper from '../widgetWrapper'
import styles from './feed.module.scss'

interface BlogFeed extends WidgetModel {
  content: {
    items: {
      thumbnail: string | StaticImageData
      tag: string
      href: string
      summary: string
    }[]
  }
}

export default function Feed(model: BlogFeed) {
  return (
    <WidgetWrapper model={model} styles={styles}>
      {model.content.items.map((item, i) => (
        <BlogItem key={i} {...item} />
      ))}
    </WidgetWrapper>
  )
}

const BlogItem = (item: BlogFeed['content']['items'][number]) => {
  let { thumbnail, tag, href, summary } = item

  const [hovered, setHovered] = useState(false)

  return (
    <div className={styles.item}>
      <div className={styles.thumbnailContainer}>
        <Image
          src={thumbnail}
          alt={tag}
          fill
          className={`${styles.thumbnail} ${
            hovered ? styles.activeThumbnail : ''
          }`}
        />
      </div>
      <div className={styles.bodyContainer}>
        <h4>{tag}</h4>
        <p>{summary}</p>
        <ScrollLink
          href={href}
          className='arrowButton topRight'
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <ArrowIcon />
        </ScrollLink>
      </div>
    </div>
  )
}
