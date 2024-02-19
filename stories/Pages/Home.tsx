import Banner from '@components/grid/controls/widgets/banner/banner'
import Carousel from '@components/grid/controls/widgets/carousel/carousel'
import Cta from '@components/grid/controls/widgets/cta/cta'
import DealerSearch from '@components/grid/controls/widgets/dealerSearch/dealerSearch'
import Feed from '@components/grid/controls/widgets/feed/feed'
import Hotspots from '@components/grid/controls/widgets/hotspots/hotspots'
import PinnedLinks from '@components/grid/controls/widgets/pinnedLinks/pinnedLinks'
import Slideshow from '@components/grid/controls/widgets/slideshow/slideshow'
import Text from '@components/grid/controls/widgets/text/text'
import TextColumns from '@components/grid/controls/widgets/textColumns/textColumns'
import VideoScroll from '@components/grid/controls/widgets/videoScroll/videoScroll'
import Layout from '@components/layout/layout'
import { WidgetModel } from '@lib/umbraco/types/widgetModel.type'
import { HomeContent } from 'content/home'
import React from 'react'

export const Home: React.FC = () => {
  return (
    <Layout transparentHeader>
      {/* <Banner {...(HomeContent.banner!.videoLeftAligned as WidgetModel)} /> */}
      <Banner {...(HomeContent.banner!.imageLeftAligned as WidgetModel)} />
      <div className='small-margin-bottom-2 medium-margin-bottom-3'></div>
      <PinnedLinks {...(HomeContent.pinnedLinks!.bottom as WidgetModel)} />
      <div className='small-margin-bottom-2 medium-margin-bottom-3'></div>
      <Text {...(HomeContent.text!.theFinest as WidgetModel)} />
      <div className='small-margin-bottom-1 medium-margin-bottom-2'></div>
      <TextColumns
        {...(HomeContent.textColumns!.unmatchedQuality as WidgetModel)}
      />
      <div className='small-margin-bottom-3 medium-margin-bottom-4'></div>
      <Carousel {...(HomeContent.carousel!.boats as WidgetModel)} />
      {/* <div className='small-margin-bottom-1 medium-margin-bottom-2'></div> */}
      <Text {...(HomeContent.text!.aboveTheRest as WidgetModel)} />
      <div className='small-margin-bottom-2 medium-margin-bottom-3'></div>
      <Slideshow {...(HomeContent.slideshow!.standard as WidgetModel)} />
      <div className='small-margin-bottom-2 medium-margin-bottom-3'></div>
      <Hotspots {...(HomeContent.hotspots!.standard as WidgetModel)} />
      <div className='small-margin-bottom-2 medium-margin-bottom-3'></div>
      <TextColumns
        {...(HomeContent.textColumns!.featuresAndCapabilities as WidgetModel)}
      />
      <div className='small-margin-bottom-2 medium-margin-bottom-3'></div>
      <VideoScroll {...(HomeContent.videoScroll!.standard as WidgetModel)} />
      <div className='small-margin-bottom-2 medium-margin-bottom-3'></div>
      <Feed {...(HomeContent.feed!.blog as WidgetModel)} />
      <div className='small-margin-bottom-2 medium-margin-bottom-3'></div>
      <Text {...(HomeContent.text!.knowledge as WidgetModel)} />
      <div className='small-margin-bottom-2 medium-margin-bottom-3'></div>
      <DealerSearch {...(HomeContent.dealerSearch!.standard as WidgetModel)} />
      <Cta {...(HomeContent.cta!.flyIn as WidgetModel)} />
      <Carousel {...(HomeContent.carousel!.text as WidgetModel)} />
      <div className='small-margin-bottom-4 medium-margin-bottom-4'></div>
    </Layout>
  )
}
