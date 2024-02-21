import garminLogo from './media/garmin-logo.svg'
import Logo from './media/logo.svg'
import facebookIcon from './media/socialMediaIcons/icon-facebook.svg'
import instagramIcon from './media/socialMediaIcons/icon-instagram.svg'
import linkedinIcon from './media/socialMediaIcons/icon-linkedin.svg'
import tikTokIcon from './media/socialMediaIcons/icon-tikTok.svg'
import youtubeIcon from './media/socialMediaIcons/icon-youtube.svg'
import yamahaLogo from './media/yamaha-logo.svg'

export const HeaderContent = {
  // logo: "https://placehold.it/183x84",
  logo: Logo,
  secondaryLinks: [
    {
      label: 'Events & Boat Shows',
      url: 'https://google.com',
    },
    {
      label: 'Find Your Dealer',
      url: 'https://google.com',
    },
    {
      label: 'Store',
      url: 'https://google.com',
    },
    {
      label: 'Contact',
      url: 'https://google.com',
    },
  ],
  mainLinks: [
    {
      label: 'Boats',
      url: 'https://google.com',
    },
    {
      label: 'Build Your Boat',
      url: 'https://google.com',
    },
    {
      label: 'Discover',
      url: 'https://google.com',
    },
    {
      label: 'Ownership',
      url: 'https://google.com',
    },
    {
      label: 'About',
      url: 'https://google.com',
    },
  ],
  searchPlaceholder: 'Search',
}

export const FooterContent = {
  columns: [
    {
      label: 'Boats',
      innerColumns: [
        {
          links: [
            {
              label: '23',
              url: 'https://google.com',
            },
            {
              label: '28',
              url: 'https://google.com',
            },
            {
              label: '31',
              url: 'https://google.com',
            },
            {
              label: '34',
              url: 'https://google.com',
            },
            {
              label: '37',
              url: 'https://google.com',
            },
            {
              label: '41',
              url: 'https://google.com',
            },
          ],
        },
        {
          links: [
            {
              label: '24xo',
              url: 'https://google.com',
            },
            {
              label: '26xo',
              url: 'https://google.com',
            },
            {
              label: '30xo',
              url: 'https://google.com',
            },
          ],
        },
      ],
    },
    {
      label: 'Discover',
      innerColumns: [
        {
          links: [
            {
              label: 'New for 2024',
              url: 'https://google.com',
            },
            {
              label: 'Why Regulator',
              url: 'https://google.com',
            },
            {
              label: 'Fishing Features',
              url: 'https://google.com',
            },
            {
              label: 'Leisure Features',
              url: 'https://google.com',
            },
          ],
        },
        {
          links: [
            {
              label: 'Brochures',
              url: 'https://google.com',
            },
            {
              label: 'Warranty',
              url: 'https://google.com',
            },
            {
              label: 'Blog',
              url: 'https://google.com',
            },
          ],
        },
      ],
    },
    {
      label: 'Owners Resources',
      innerColumns: [
        {
          links: [
            {
              label: 'Manuals',
              url: 'https://google.com',
            },
            {
              label: 'How to Videos',
              url: 'https://google.com',
            },
            {
              label: 'FAQs',
              url: 'https://google.com',
            },
          ],
        },
      ],
    },
    {
      innerColumns: [
        {
          links: [
            {
              label: 'About',
              url: 'https://google.com',
            },
            {
              label: 'Careers',
              url: 'https://google.com',
            },
            {
              label: 'Events & Boat Shows',
              url: 'https://google.com',
            },
          ],
        },
      ],
    },
    {
      innerColumns: [
        {
          links: [
            {
              label: 'Contact',
              url: 'https://google.com',
            },
            {
              label: 'Find Your Dealer',
              url: 'https://google.com',
            },
            {
              label: 'Store',
              url: 'https://google.com',
            },
          ],
        },
      ],
    },
  ],
  socialMedia: [
    {
      icon: facebookIcon,
      url: 'https://facebook.com',
    },
    {
      icon: instagramIcon,
      url: 'https://instagram.com',
    },
    {
      icon: youtubeIcon,
      url: 'https://youtube.com',
    },
    {
      icon: linkedinIcon,
      url: 'https://linkedin.com',
    },
    {
      icon: tikTokIcon,
      url: 'https://tiktok.com',
    },
  ],
  dealerLoginLink: {
    label: '<strong>Dealer</strong> login',
    url: 'https://google.com',
  },
  subscribeLink: {
    label: '<strong>Subscribe</strong> to our news',
    url: 'https://google.com',
  },
  copyright: `
        <p>© Copyright Regulator Marine, Inc. All Rights Reserved. Specifications, standards, options and availability are subject to change.</p>
        <p>Regulator Marine and the Regulator Marine fish logo are registered trademarks of Regulator Marine, Inc.</p>
    `,
  baseLinks: [
    {
      label: 'Privacy Policy',
      url: 'https://google.com',
    },
    {
      label: 'Cookie Policy',
      url: 'https://google.com',
    },
    {
      label: 'Sitemap',
      url: 'https://google.com',
    },
  ],
  baseLogos: [
    {
      icon: yamahaLogo,
      url: 'https://google.com',
      // imageAlt: 'Yamaha',
    },
    {
      icon: garminLogo,
      url: 'https://google.com',
      // imageAlt: 'Garmin',
    },
  ],
}
