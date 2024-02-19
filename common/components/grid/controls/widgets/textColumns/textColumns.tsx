import { WidgetModel } from '@lib/umbraco/types/widgetModel.type'
import WidgetWrapper from '../widgetWrapper'
import styles from './textColumns.module.scss'

interface TextColumnsContent {
  items: { text: string }[]
}

export default function TextColumns(model: WidgetModel) {
  let { items } = model.content as TextColumnsContent

  return (
    <WidgetWrapper model={model} styles={styles}>
      {items.map(({ text }, i) => (
        <div
          key={i}
          className={styles.column}
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
      ))}
    </WidgetWrapper>
  )
}
