import Link from '@components/links/link'
import { WidgetModel } from '@lib/umbraco/types/widgetModel.type'
import WidgetWrapper from '../widgetWrapper'
import styles from './pinnedLinks.module.scss'

interface PinnedLinksContent {
  links: {
    icon: string
    label: string
    url: string
  }[]
}

export default function PinnedLinks(model: WidgetModel) {
  const { links } = model.content as PinnedLinksContent

  return (
    <WidgetWrapper model={model} styles={styles}>
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
