import { WidgetModel } from '@lib/umbraco/types/widgetModel.type'
import isDark from 'common/util/isDark'
import WidgetWrapper from '../widgetWrapper'
import styles from './text.module.scss'

//TODO does this need to be exported?
export type TextModel = {
  copy: string
  backgroundColor?: string
}

export default function Text(model: WidgetModel) {
  const { copy, backgroundColor } = model.content as TextModel
  const dark = isDark(backgroundColor)

  return (
    <WidgetWrapper
      className={
        (dark ? 'darkBackground' : '') +
        (backgroundColor ? ' ' + styles.hasBackground : '')
      }
      model={model}
      styles={styles}
      style={{
        backgroundColor: backgroundColor ? '#' + backgroundColor : undefined,
      }}
    >
      <div
        className={styles.container}
        dangerouslySetInnerHTML={{ __html: model.content.text }}
      ></div>
      {/* <Rte className={styles.text} text={copy} /> */}
    </WidgetWrapper>
  )
}
