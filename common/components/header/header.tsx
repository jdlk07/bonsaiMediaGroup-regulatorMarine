import Link from '@components/links/link'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useState } from 'react'
// import MainLogo from '../../../content/media/logo.svg'
import SearchIcon from '../../../content/media/search.svg'
import styles from './header.module.scss'

gsap.registerPlugin(ScrollTrigger)

export type BasicLink = {
  label: string
  url: string
}
export type HeaderModel = {
  logo: string
  secondaryLinks: BasicLink[]
  mainLinks: BasicLink[]
  startTransparent?: boolean
}

export default function Header(model: HeaderModel) {
  const headerRef = useRef<HTMLDivElement>(null)
  const bgContainerRef = useRef<HTMLDivElement>(null)

  const [isOpen, setIsOpen] = useState(false)

  let { startTransparent } = model

  useGSAP(
    () => {
      if (startTransparent) {
        gsap.from(headerRef.current, {
          '--background-opacity': 0,
          duration: 0.35,
          scrollTrigger: {
            start: 50,
            toggleActions: 'play none none reverse',
            onEnter: () =>
              headerRef.current?.classList.remove(styles.transparent),
            onLeaveBack: () =>
              headerRef.current?.classList.add(styles.transparent),
          },
        })
      }
    },
    { dependencies: [startTransparent] }
  )

  const Logo = model.logo

  return (
    <div className={styles.header} ref={headerRef}>
      <div className={styles.container} ref={bgContainerRef}>
        <Link href={'/'} className={styles.logoLink}>
          <Logo />
        </Link>
        <div className={styles.links}>
          <ul className={`${styles.secondaryLinks} noBullet`}>
            {model.secondaryLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <ul className={`${styles.mainLinks} noBullet`}>
            {model.mainLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.url}>{link.label}</Link>
              </li>
            ))}
            <li>
              <a>
                <SearchIcon
                // className={styles.searchIcon}
                // src={SearchIcon}
                // alt='Search'
                />
              </a>
            </li>
          </ul>
        </div>
        <button
          className={`${styles.mobileNavigationButton} ${
            isOpen ? styles.isOpen : ''
          }`}
          onClick={() => setIsOpen((s) => !s)}
        >
          <span className={styles.navSpan1} />
          <span className={styles.navSpan2} />
        </button>
      </div>
    </div>
  )
}

// import Image from 'next/image';
// import styles from './header.module.scss';
// import InlineList from '../inline-list/inline-list';
// import FlexibleLink from '../links/flexibleLink';
// import Link from '../links/link';
// import { CommonData } from '../../../lib/umbraco/types/commonData.type';
// import { getAbsoluteMediaUrl } from '../../../lib/umbraco/util/helpers';
// import { useState } from 'react';
// import HamburgerToggle from './hamburgerToggle';
// import DropdownLink from '@components/links/dropdownLink';
// import SearchBox from '@components/searchBox/searchBox';
// import LanguageSelector, { CultureOption } from '@components/languageSelector/languageSelector';
// import { useRouter } from 'next/router';
// import PageCultureInfo from '@lib/umbraco/types/pageCultureInfo';
// import isLocal from 'common/util/isLocal';
// import isLocalExplicit from 'common/util/isLocaleExplicit';
// import BasicDialog from '@components/dialogs/basicDialog';

// export type HeaderModel = {
//     data: CommonData,
//     startTransparent: boolean
// }

// export default function Header({data, startTransparent}: HeaderModel) {
//     const [open, setOpen] = useState(false);
//     const [searchOpen, setSearchOpen] = useState(false);
//     const router = useRouter();

//     const toggleOpen = () => {
//         setOpen(!open);
//     }

//     const closeMenu = () => {
//         setOpen(false);
//     }

//     const childCultures = data.homeCultures.map<CultureOption>(item => {return {culture: item.culture, label: item.label}});

//     const handleCultureChange = function(culture : string) {
//         var url = data.cultures.find(item => item.culture === culture)?.url;
//         if (!url) {
//             url = data.homeCultures.find(item => item.culture)?.url;
//         }
//         if (url) {
//             if (isLocalExplicit(url, router.locale)) {
//                 const uri = new URL(url);
//                 router.push(uri.pathname);
//             }
//             else {
//                 location.href = url;
//             }
//         }
//     }

//     return (
//         <>
//             <header className={styles.header + (open ? ' ' + styles.menuOpen : '') + (data.secondaryLinks ? ' ' + styles.hasSecondary : ' ' + styles.noSecondary)}>
//                 <div className={`${styles.container} grid-container`}>
//                     <div className={styles.logoContainer}>
//                         <Link href={data.homeUrl} className={styles.logo}>
//                             <Image src={getAbsoluteMediaUrl(data.logo.url)} fill={true} alt={data.logo.name} />
//                         </Link>
//                     </div>
//                     <div className="hide-for-xxlarge hide-for-print">
//                         <HamburgerToggle className={styles.hamburgerToggle} active={open} toggle={toggleOpen} />
//                     </div>
//                     <div className={styles.main + ' hide-for-print'}>
//                         <div className={styles.links}>
//                             {data.secondaryLinks &&
//                                 <div className={styles.secondaryLinks}>
//                                     <InlineList restrict="xxlarge" className={styles.secLinks + ' narrow'}  divider={true} items={data.secondaryLinks.map(item =>
//                                         <DropdownLink className={styles.dropdownLink} {...item} />
//                                     )} />
//                                     {childCultures && childCultures.length > 1 &&
//                                         <LanguageSelector className={styles.cultures} cultures={childCultures} onChange={handleCultureChange} />
//                                     }
//                                     {!!data.searchPlaceholder && data.searchTarget &&
//                                         <div className={styles.searchContainer + ' show-for-xxlarge'}>
//                                             <a className={styles.searchButton + " bmg-icon bmg-icon-search"} onClick={() => setSearchOpen(!searchOpen)}></a>
//                                             <BasicDialog className={styles.alertDialog} open={searchOpen} sx={{
//                                                 '.MuiDialogContent-root': {
//                                                     padding: '0',
//                                                 },
//                                                 '.MuiDialog-paper': {
//                                                     borderRadius: '25px',
//                                                     backgroundColor: 'transparent'
//                                                 }
//                                             }} onClose={() => setSearchOpen(false)}>
//                                                 <SearchBox autoFocus={true} onSubmit={() => setSearchOpen(false)} className={styles.searchBox} placeholder={data.searchPlaceholder} targetPage={data.searchTarget} />
//                                             </BasicDialog>
//                                         </div>
//                                     }
//                                 </div>
//                             }
//                             <div className={styles.mainLinks}>
//                                 <InlineList restrict="xxlarge" gutterSize={2} items={data.mainLinks.map(item =>
//                                     <DropdownLink className={styles.dropdownLink} {...item} />
//                                 )}/>
//                                 {data.buttons &&
//                                     <div className={styles.buttonsContainer}>
//                                         <InlineList items={data.buttons.map((item, index) =>
//                                             <FlexibleLink className={"button buttonSmall" + (index % 2 === 1 ? " purpleButton" : "")} link={item} />
//                                         )}/>
//                                     </div>
//                                 }
//                                 {!!data.searchPlaceholder && data.searchTarget &&
//                                     <SearchBox className={styles.mobileSearch + ' hide-for-xxlarge'} autoFocus={true} onSubmit={() => setOpen(false)} placeholder={data.searchPlaceholder} targetPage={data.searchTarget} />
//                                 }
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={styles.overlay} onClick={closeMenu}></div>
//             </header>
//             <div className={styles.spacer + (startTransparent ? '' : ' ' + styles.active)}></div>
//         </>
//     )
// }
