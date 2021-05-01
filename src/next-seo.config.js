import {getConfig} from 'utilities/config'

const {title} =getConfig()

export default {
    titleTemplate:`%s - ${title}`,
    defaultTitle: title,
    openGraph: {
      type: 'next-website-starter',
      locale: 'pl-PL',
      url: 'https://www.example.com/',
      site_name: 'SiteName',
    },
    twitter: {
      handle: '@handle',
      site: '@site',
      cardType: 'summary_large_image',
    },
  };