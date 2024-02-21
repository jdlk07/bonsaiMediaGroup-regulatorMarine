import { BasicLink } from '@components/header/header'
import ScrollLink from '@components/links/link'
import { useIsMobile } from 'common/util/useIsMobile'
import styles from './footer.module.scss'

export type IconLink = {
  icon: string
  url: string
}

export type LogoLink = {
  icon: string
  url: string
}

export type InnerLinkColumn = {
  links: BasicLink[]
}

export type LinkColumn = {
  label?: string
  innerColumns: InnerLinkColumn[]
}

export type FooterModel = {
  columns: LinkColumn[]
  socialMedia: IconLink[]
  dealerLoginLink: BasicLink
  subscribeLink: BasicLink
  copyright: string
  baseLinks: BasicLink[]
  baseLogos: LogoLink[]
}

export default function Footer(model: FooterModel) {
  const isMobile = useIsMobile()

  return (
    <footer className={styles.footer}>
      {isMobile ? <MobileFooter {...model} /> : <DesktopFooter {...model} />}
    </footer>
  )
}

const DesktopFooter = ({
  columns,
  socialMedia,
  dealerLoginLink,
  subscribeLink,
  copyright,
  baseLinks,
  baseLogos,
}: FooterModel) => (
  <>
    <div className={styles.topContainer}>
      <LinkColumnComponent {...{ columns }} />
    </div>
    <div className={styles.middleContainer}>
      <SocialMediaLinks {...{ socialMedia }} />
      <a
        href={dealerLoginLink.url}
        className='outlineButton white'
        dangerouslySetInnerHTML={{ __html: dealerLoginLink.label }}
      />
      <a
        href={subscribeLink.url}
        className='outlineButton white'
        dangerouslySetInnerHTML={{ __html: subscribeLink.label }}
      />
    </div>
    <div className={styles.bottomContainer}>
      <div className={styles.leftContainer}>
        <div
          className={styles.copyrightContainer}
          dangerouslySetInnerHTML={{ __html: copyright }}
        />
        <BaseLinksComponents {...{ baseLinks }} />
      </div>
      <BaseLogosComponents {...{ baseLogos }} />
    </div>
  </>
)

const MobileFooter = ({
  columns,
  socialMedia,
  dealerLoginLink,
  subscribeLink,
  copyright,
  baseLinks,
  baseLogos,
}: FooterModel) => (
  <>
    <SocialMediaLinks {...{ socialMedia }} />
    <LinkColumnComponent {...{ columns }} />
    <div className={styles.mobileOutlineButtonsContainer}>
      <a
        href={dealerLoginLink.url}
        className='outlineButton white'
        dangerouslySetInnerHTML={{ __html: dealerLoginLink.label }}
      />
      <a
        href={subscribeLink.url}
        className='outlineButton white'
        dangerouslySetInnerHTML={{ __html: subscribeLink.label }}
      />
    </div>
    <BaseLogosComponents {...{ baseLogos }} />
    <div
      className={styles.copyrightContainer}
      dangerouslySetInnerHTML={{ __html: copyright }}
    />
    <BaseLinksComponents {...{ baseLinks }} />
  </>
)

/**
 * Shared Components
 */

const LinkColumnComponent = ({
  columns,
}: {
  columns: FooterModel['columns']
}) => (
  <>
    {columns.map(({ label: columnLabel, innerColumns }, i) => (
      <div
        key={i}
        className={`${styles.linksColumn} ${
          columnLabel ? '' : styles.standalone
        }`}
      >
        {columnLabel && <h5 className={styles.columnLabel}>{columnLabel}</h5>}
        <div className={styles.innerColumnsWrapper}>
          {innerColumns.map(({ links }, i) => (
            <div key={i} className={styles.innerColumn}>
              {links.map(({ label, url }, i) => (
                <ScrollLink
                  key={i}
                  href={url}
                  className={columnLabel ? '' : styles.standaloneLink}
                >
                  {label}
                </ScrollLink>
              ))}
            </div>
          ))}
        </div>
      </div>
    ))}
  </>
)

const SocialMediaLinks = ({
  socialMedia,
}: {
  socialMedia: FooterModel['socialMedia']
}) => (
  <div className={styles.socialMediaLinks}>
    {socialMedia.map(({ icon: Icon, url }, i) => (
      <a key={i} href={url} className={styles.socialMediaLink}>
        <Icon />
      </a>
    ))}
  </div>
)

const BaseLogosComponents = ({
  baseLogos,
}: {
  baseLogos: FooterModel['baseLogos']
}) => (
  <div className={styles.baseLogosContainer}>
    {baseLogos.map(({ icon: Icon, url }, i) => (
      <a key={i} href={url} className={styles.baseLogoLink}>
        <Icon />
      </a>
    ))}
  </div>
)

const BaseLinksComponents = ({
  baseLinks,
}: {
  baseLinks: FooterModel['baseLinks']
}) => (
  <div className={styles.baseLinks}>
    {baseLinks.map(({ label, url }, i) => (
      <ScrollLink key={i} href={url}>
        {label}
      </ScrollLink>
    ))}
  </div>
)
