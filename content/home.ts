import { WidgetModel } from '@lib/umbraco/types/widgetModel.type'
import blogImage1 from './media/blog/blog1.jpg'
import blogImage2 from './media/blog/blog2.jpg'
import blogImage3 from './media/blog/blog3.jpg'
import boatVideo1 from './media/boats/boat1.mp4'
import boatVideo2 from './media/boats/boat2.mp4'
import boatVideo3 from './media/boats/boat3.mp4'
import boatVideo4 from './media/boats/boat4.mp4'
import boatVideo6 from './media/boats/boat6.mp4'
import textCarousel1 from './media/boats/textCarousel1.jpg'
import textCarousel2 from './media/boats/textCarousel2.jpg'
import textCarousel3 from './media/boats/textCarousel3.jpg'
import heroDesktopImage from './media/home/hero.jpg'
import heroVideo from './media/home/heroVideo.mp4'
import AnchorIcon from './media/iconAnchor.svg'
import BrochureIcon from './media/iconBrochure.svg'
import PinIcon from './media/pin.svg'
// import textCarousel4 from './media/boats/textCarousel4.jpg'

export const HomeContent: NodeJS.Dict<NodeJS.Dict<WidgetModel>> = {
  banner: {
    imageLeftAligned: {
      widget: 'Banner',
      variant: 'Image',
      layout: 'LeftAligned',
      content: {
        text: `
                    <h1>The Ride of your life</h1>
                    <h2>starts with regulator</h2>
                `,
        // image: 'https://placehold.it/1774x974',
        image: heroDesktopImage,
      },
    },
    imageRightAligned: {
      widget: 'Banner',
      variant: 'Image',
      layout: 'RightAligned',
      content: {
        text: `
                    <h1>The Ride of your life</h1>
                    <h2>starts with regulator</h2>
                `,
        // image: 'https://placehold.it/1774x974',
        image: heroDesktopImage,
      },
    },
    videoLeftAligned: {
      widget: 'Banner',
      variant: 'Video',
      layout: 'LeftAligned',
      content: {
        text: `
                    <h1>The Ride of your life</h1>
                    <h2>starts with regulator</h2>
                `,
        // video: 'https://example.com/some-video.mp4',
        video: heroVideo,
      },
    },
    videoRightAligned: {
      widget: 'Banner',
      variant: 'Video',
      layout: 'RightAligned',
      content: {
        text: `
                    <h1>The Ride of your life</h1>
                    <h2>starts with regulator</h2>
                `,
        // video: 'https://example.com/some-video.mp4',
        video: heroVideo,
      },
    },
  },
  carousel: {
    boats: {
      widget: 'Carousel',
      variant: 'Boats',
      layout: 'Standard',
      content: {
        builderLink: 'https://google.com',
        initialValue: 3,
        items: [
          {
            video: boatVideo1,
            detailsLink: 'https://google.com',
            modelNumber: '24xo',
            stats: [
              {
                name: 'LOA',
                value: '24\' 7"',
              },
              {
                name: 'LOA w/ bracket & engines',
                value: '31\' 3"',
              },
              {
                name: 'Beam',
                value: '10\' 5"',
              },
              {
                name: 'Fuel Capacity',
                value: '400 gal',
              },
              {
                name: 'Dry weight w/ engines',
                value: '20,000 lbs',
              },
            ],
          },
          {
            video: boatVideo2,
            detailsLink: 'https://google.com',
            modelNumber: '26xo',
            stats: [
              {
                name: 'LOA',
                value: '24\' 7"',
              },
              {
                name: 'LOA w/ bracket & engines',
                value: '31\' 3"',
              },
              {
                name: 'Beam',
                value: '10\' 5"',
              },
              {
                name: 'Fuel Capacity',
                value: '400 gal',
              },
              {
                name: 'Dry weight w/ engines',
                value: '20,000 lbs',
              },
            ],
          },
          {
            video: boatVideo3,
            detailsLink: 'https://google.com',
            modelNumber: '30xo',
            stats: [
              {
                name: 'LOA',
                value: '30\' 7"',
              },
              {
                name: 'LOA w/ bracket & engines',
                value: '31\' 3"',
              },
              {
                name: 'Beam',
                value: '10\' 5"',
              },
              {
                name: 'Fuel Capacity',
                value: '400 gal',
              },
              {
                name: 'Dry weight w/ engines',
                value: '20,000 lbs',
              },
            ],
          },
          {
            video: boatVideo4,
            detailsLink: 'https://google.com',
            modelNumber: '41',
            stats: [
              {
                name: 'LOA',
                value: '41\' 7"',
              },
              {
                name: 'LOA w/ bracket & engines',
                value: '31\' 3"',
              },
              {
                name: 'Beam',
                value: '10\' 5"',
              },
              {
                name: 'Fuel Capacity',
                value: '400 gal',
              },
              {
                name: 'Dry weight w/ engines',
                value: '20,000 lbs',
              },
            ],
          },
          {
            video: boatVideo2,
            detailsLink: 'https://google.com',
            modelNumber: '37',
            stats: [
              {
                name: 'LOA',
                value: '37\' 7"',
              },
              {
                name: 'LOA w/ bracket & engines',
                value: '31\' 3"',
              },
              {
                name: 'Beam',
                value: '10\' 5"',
              },
              {
                name: 'Fuel Capacity',
                value: '400 gal',
              },
              {
                name: 'Dry weight w/ engines',
                value: '20,000 lbs',
              },
            ],
          },
          {
            video: boatVideo6,
            detailsLink: 'https://google.com',
            modelNumber: '34',
            stats: [
              {
                name: 'LOA',
                value: '34\' 7"',
              },
              {
                name: 'LOA w/ bracket & engines',
                value: '31\' 3"',
              },
              {
                name: 'Beam',
                value: '10\' 5"',
              },
              {
                name: 'Fuel Capacity',
                value: '400 gal',
              },
              {
                name: 'Dry weight w/ engines',
                value: '20,000 lbs',
              },
            ],
          },
          {
            video: boatVideo3,
            detailsLink: 'https://google.com',
            modelNumber: '31',
            stats: [
              {
                name: 'LOA',
                value: '31\' 7"',
              },
              {
                name: 'LOA w/ bracket & engines',
                value: '31\' 3"',
              },
              {
                name: 'Beam',
                value: '10\' 5"',
              },
              {
                name: 'Fuel Capacity',
                value: '400 gal',
              },
              {
                name: 'Dry weight w/ engines',
                value: '20,000 lbs',
              },
            ],
          },
          {
            video: boatVideo4,
            detailsLink: 'https://google.com',
            modelNumber: '28',
            stats: [
              {
                name: 'LOA',
                value: '28\' 7"',
              },
              {
                name: 'LOA w/ bracket & engines',
                value: '31\' 3"',
              },
              {
                name: 'Beam',
                value: '10\' 5"',
              },
              {
                name: 'Fuel Capacity',
                value: '400 gal',
              },
              {
                name: 'Dry weight w/ engines',
                value: '20,000 lbs',
              },
            ],
          },
          {
            video: boatVideo6,
            detailsLink: 'https://google.com',
            modelNumber: '23',
            stats: [
              {
                name: 'LOA',
                value: '23\' 7"',
              },
              {
                name: 'LOA w/ bracket & engines',
                value: '31\' 3"',
              },
              {
                name: 'Beam',
                value: '10\' 5"',
              },
              {
                name: 'Fuel Capacity',
                value: '400 gal',
              },
              {
                name: 'Dry weight w/ engines',
                value: '20,000 lbs',
              },
            ],
          },
        ],
      },
    },
    text: {
      widget: 'Carousel',
      variant: 'Text',
      layout: 'Standard',
      content: {
        items: [
          {
            text: `
                            <h3>Benefits of<br/><strong>center console boats</strong></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        `,
            link: {
              label: 'Learn More',
              url: 'https://google.com',
            },
            background: textCarousel1,
            imageAlt: 'boat',
          },
          {
            text: `
                            <h3>Things about<br/><strong>center console boats</strong></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        `,
            link: {
              label: 'View All',
              url: 'https://google.com',
            },
            background: textCarousel2,
            imageAlt: 'boat',
          },
          {
            text: `
                            <h3>Other bits<br/><strong>center console boats</strong></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        `,
            link: {
              label: 'Contact Us',
              url: 'https://google.com',
            },
            background: textCarousel3,
            imageAlt: 'boat',
          },
        ],
      },
    },
  },
  cta: {
    flyIn: {
      widget: 'Cta',
      variant: 'FlyIn',
      layout: 'Standard',
      content: {
        title: "It's a regulator thing",
        image: 'https://placehold.it/1920x1280',
        text: `
                    <h2>Be part of the<br/><strong>regulator community</strong></h2>
                `,
        link: {
          icon: 'fa-calendar',
          url: 'https://google.com',
          label: 'View <strong>events & boat shows</strong>',
        },
      },
    },
  },
  dealerSearch: {
    startJourney: {
      widget: 'DealerSearch',
      variant: 'Standard',
      layout: 'Standard',
      content: {
        background: 'https://placehold.it/1920x1280',
        text: `
                    <h2><strong>Start Your Journey</strong></h2>
                    <h3>Find your <strong>dealer</strong>
                `,
        searchPlaceholder: 'Enter Zipcode',
        searchTarget: 'https://google.com',
      },
    },
  },
  feed: {
    blog: {
      widget: 'Feed',
      variant: 'Blog',
      layout: 'Row',
      content: {
        items: [
          {
            thumbnail: blogImage1,
            tag: 'Center console boats 101',
            href: 'www.google.com',
            summary:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            thumbnail: blogImage2,
            tag: 'Topic Tag',
            href: 'www.google.com',
            summary:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            thumbnail: blogImage3,
            tag: 'Topic tag',
            href: 'www.google.com',
            summary:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
        ],
      },
    },
  },
  hotspots: {
    leftAligned: {
      widget: 'Hotspots',
      variant: 'Standard',
      layout: 'LeftAligned',
      content: {
        background: 'https://placehold.it/x278x857',
        hotspots: [
          {
            thumbnail: 'https://placehold.it/856x461',
            secondaryImage: 'https://placehold.it/138x232',
            name: 'Power performance',
            summary:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            hotspotX: 25.5,
            hotspotY: 90,
          },
          {
            thumbnail: 'https://placehold.it/856x461',
            secondaryImage: 'https://placehold.it/138x232',
            name: 'Power performance',
            summary:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            hotspotX: 25.5,
            hotspotY: 90,
          },
          {
            thumbnail: 'https://placehold.it/856x461',
            secondaryImage: 'https://placehold.it/138x232',
            name: 'Power performance',
            summary:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            hotspotX: 25.5,
            hotspotY: 90,
          },
          {
            thumbnail: 'https://placehold.it/856x461',
            secondaryImage: 'https://placehold.it/138x232',
            name: 'Power performance',
            summary:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            hotspotX: 25.5,
            hotspotY: 90,
          },
          {
            thumbnail: 'https://placehold.it/856x461',
            secondaryImage: 'https://placehold.it/138x232',
            name: 'Power performance',
            summary:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            hotspotX: 25.5,
            hotspotY: 90,
          },
          {
            thumbnail: 'https://placehold.it/856x461',
            secondaryImage: 'https://placehold.it/138x232',
            name: 'Power performance',
            summary:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            hotspotX: 25.5,
            hotspotY: 90,
          },
        ],
      },
    },
    rightAligned: {
      widget: 'Hotspots',
      variant: 'Standard',
      layout: 'RightAligned',
      content: {
        background: 'https://placehold.it/x278x857',
        hotspots: [
          {
            thumbnail: 'https://placehold.it/856x461',
            secondaryImage: 'https://placehold.it/138x232',
            name: 'Power performance',
            summary:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            hotspotX: 25.5,
            hotspotY: 90,
          },
          {
            thumbnail: 'https://placehold.it/856x461',
            secondaryImage: 'https://placehold.it/138x232',
            name: 'Power performance',
            summary:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            hotspotX: 25.5,
            hotspotY: 90,
          },
          {
            thumbnail: 'https://placehold.it/856x461',
            secondaryImage: 'https://placehold.it/138x232',
            name: 'Power performance',
            summary:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            hotspotX: 25.5,
            hotspotY: 90,
          },
          {
            thumbnail: 'https://placehold.it/856x461',
            secondaryImage: 'https://placehold.it/138x232',
            name: 'Power performance',
            summary:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            hotspotX: 25.5,
            hotspotY: 90,
          },
          {
            thumbnail: 'https://placehold.it/856x461',
            secondaryImage: 'https://placehold.it/138x232',
            name: 'Power performance',
            summary:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            hotspotX: 25.5,
            hotspotY: 90,
          },
          {
            thumbnail: 'https://placehold.it/856x461',
            secondaryImage: 'https://placehold.it/138x232',
            name: 'Power performance',
            summary:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            hotspotX: 25.5,
            hotspotY: 90,
          },
        ],
      },
    },
  },
  pinnedLinks: {
    top: {
      widget: 'PinnedLinks',
      variant: 'Standard',
      layout: 'Top',
      content: {
        links: [
          {
            icon: AnchorIcon,
            // icon: 'fa-anchor',
            label: '<strong>Build</strong> your boat',
            url: 'https://google.com',
          },
          {
            icon: BrochureIcon,
            // icon: 'fa-brochure', //This icon does not exist in font awesome
            label: 'View <strong>Brochures</strong>',
            url: 'https://google.com',
          },
          {
            icon: PinIcon,
            // icon: 'fa-marker', //This icon does not exist in font awesome
            label: 'Find your <strong>dealer</strong>',
            url: 'https://google.com',
          },
        ],
      },
    },
    bottom: {
      widget: 'PinnedLinks',
      variant: 'Standard',
      layout: 'Bottom',
      content: {
        links: [
          {
            icon: AnchorIcon,
            // icon: 'fa-anchor',
            label: '<strong>Build</strong> your boat',
            url: 'https://google.com',
          },
          {
            icon: BrochureIcon,
            // icon: 'fa-brochure',//This icon does not exist in font awesome
            label: 'View <strong>Brochures</strong>',
            url: 'https://google.com',
          },
          {
            icon: PinIcon,
            // icon: 'fa-marker',//This icon does not exist in font awesome
            label: 'Find your <strong>dealer</strong>',
            url: 'https://google.com',
          },
        ],
      },
    },
  },
  slideshow: {
    standard: {
      widget: 'Slideshow',
      variant: 'Standard',
      layout: 'Standard',
      content: {
        staticText: `
                    <h2>Built for</h2>
                `,
        items: [
          {
            background: 'https://placehold.it/1920x1080',
            subject: 'Fishing',
            videoThumbnail: 'https://placehold.it/360x215',
            video: 'https://example.com/video.mp4',
            link: {
              label: 'View <strong>fishing features</strong>',
              url: 'https://google.com',
            },
          },
          {
            background: 'https://placehold.it/1920x1080',
            subject: 'Leisure',
            videoThumbnail: 'https://placehold.it/360x215',
            video: 'https://example.com/video.mp4',
            link: {
              label: 'View <strong>leisure features</strong>',
              url: 'https://google.com',
            },
          },
          {
            background: 'https://placehold.it/1920x1080',
            subject: 'Durability',
            videoThumbnail: 'https://placehold.it/360x215',
            video: 'https://example.com/video.mp4',
            link: {
              label: 'View <strong>our standards</strong>',
              url: 'https://google.com',
            },
          },
          {
            background: 'https://placehold.it/1920x1080',
            subject: 'Entertaining',
            videoThumbnail: 'https://placehold.it/360x215',
            video: 'https://example.com/video.mp4',
            link: {
              label: 'View <strong>our features</strong>',
              url: 'https://google.com',
            },
          },
          {
            background: 'https://placehold.it/1920x1080',
            subject: 'You',
            link: {
              label: 'Build your <strong>dream boat</strong>',
              url: 'https://google.com',
            },
          },
        ],
      },
    },
  },
  text: {
    theFinest: {
      widget: 'Text',
      variant: 'Standard',
      layout: 'Narrow',
      content: {
        text: `
                    <h2>The finest</h2>
                    <h3>in offshore\nsportsfishing boats</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                `,
      },
    },
    aboveTheRest: {
      widget: 'Text',
      variant: 'Standard',
      layout: 'Narrow',
      content: {
        text: `
                    <h3>What puts Regulator</h3>
                    <h2>above the rest</h2>
                    <p>
                        <a class="outlineButton" href="https://google.com">Why <strong>Regulator</strong></a>
                    </p>
                `,
      },
    },
    knowledge: {
      widget: 'Text',
      variant: 'Standard',
      layout: 'Narrow',
      content: {
        text: `
                    <h3>Unleashing the power of</h3>
                    <h2><strong>knowledge</strong></h2>
                    <p>
                        <a class="outlineButton" href="https://google.com">View <strong>Resources</strong></a>
                    </p>
                `,
      },
    },
  },
  textColumns: {
    unmatchedQuality: {
      widget: 'TextColumns',
      variant: 'Standard',
      layout: 'ThinDivider',
      content: {
        items: [
          {
            text: `
                        <h5><strong>Unmatched quality</strong><br/>over 30 years of\nexpertise</h5>
                    `,
          },
          {
            text: `
                        <h5><strong>Design</strong><br/>award winning\ncenter consoles</h5>
                    `,
          },
          {
            text: `
                        <h5><strong>Source</strong><br/>best in class\nmaterials</h5>
                    `,
          },
        ],
      },
    },
    featuresAndCapabilities: {
      widget: 'TextColumns',
      variant: 'Standard',
      layout: 'ThickDivider',
      content: {
        items: [
          {
            text: `
                        <h3>What <strong>features &\ncapabilities</strong> do you\nfind important?</h3>
                    `,
          },
          {
            text: `
                        <h2>Let us help you find</h2>
                        <h1>The perfect boat</h1>
                        <p>Answer a few questions, and we'll recommend models that fits your needs.</p>
                        <a class="outlineButton" href="https://google.com">Boat <strong>selector</strong></a>
                    `,
          },
        ],
      },
    },
  },
  videoScroll: {
    standard: {
      widget: 'Video',
      variant: 'Standard',
      layout: 'ThickDivider',
      content: {
        upperText: `
                    <h3>Perfor exploring</h3>
                    <h1><strong>Above the water</strong></h1>
                `,
        lowerText: `
                    <h1>And <strong>below</strong></h1>
                `,
        backgroundVideo: 'https://example.com/video.mp4',
        videoThumbnail: 'https://placehold.it/640x369',
        video: 'https://example.com/example.mp4',
      },
    },
  },
}
