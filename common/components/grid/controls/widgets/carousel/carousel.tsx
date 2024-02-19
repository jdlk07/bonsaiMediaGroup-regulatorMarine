import WidgetWrapper from '../widgetWrapper'
import styles from './carousel.module.scss'
import { BoatsCarousel, CarouselBoatsVariant } from './components/boatsCarousel'
import { CarouselTextVariant, TextCarousel } from './components/textCarousel'

export default function Carousel(
  model: CarouselBoatsVariant | CarouselTextVariant
) {
  return (
    <WidgetWrapper model={model} styles={styles}>
      {model.variant === 'Boats' && <BoatsCarousel {...model} />}
      {model.variant === 'Text' && <TextCarousel {...model} />}
    </WidgetWrapper>
  )
}
