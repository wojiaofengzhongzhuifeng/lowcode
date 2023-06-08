export const initialNewsItem = {
  author: "Gate.io Researcher: Peter L.",
  author_id: "9245799",
  brief: "[//]:content-type-MARKDOWN-DONOT-DELETE\n![](https://gimg2.gateimg.com/image/article/16838606220512.jpg)\n## 币圈每日摘要：投资者受银行业危机影响正寻求新的市场催化剂，以太坊已解决主网中断问题，英国央行的数字货币“Britcoin”面临信任挑战，埃...",
  cate: "11",
  cate_str: "市场前沿",
  id: "2608/第一行情-btc下跌迫使人们探寻新催化剂-马斯克辞去twitterceo职务-英国央行数字货币britcoin面临信任挑战",
  imgurl: "https://gimg2.gateimg.com/image/article/16838606220512.jpg",
  release_time: "2023-05-12",
  source: "Gate.blog",
  subtitle: "受银行业危机影响，BTC价格的下跌促使投资者迫切寻找新的市场催化剂。以太坊已解决主网中断问题。英国央行的数字货币“Britcoin”面临信任挑战。埃隆·马斯克辞去推特首席执行官职务。全球股市波动，避险资产需求旺盛。",
  title: "第一行情｜BTC下跌迫使人们探寻新催化剂，马斯克辞去TwitterCEO职务，英国央行数字货币“Britcoin”面临信任挑战",
  updated_d: "今天",
  updated_t: "09:47",
  views: "20"
}

export interface NewsItemProps {
  author: string
  author_id: string
  brief: string
  cate: string
  cate_str: string
  id: string
  imgurl: string
  release_time: string
  source: string
  subtitle: string
  title: string
  updated_d: string
  updated_t: string
  views: string
}

export const pcLightBannerImg = 'https://www.sesametest.co:8080/static_pages/ali-lowcode/test-image/gbtc/images/gbtc-vs-bitcoin-discount-to-nav-worth.webp'

export const pcDarkBannerImg = 'https://www.sesametest.co:8080/static_pages/ali-lowcode/test-image/gbtc/images/gbtc-vs-bitcoin-discount-to-nav-worth-dark.webp'

export const h5LightBannerImg = 'https://www.sesametest.co:8080/static_pages/ali-lowcode/test-image/gbtc/images/gbtc-vs-bitcoin-discount-to-nav-worth-h5.webp'

export const h5DarkBannerImg = 'https://www.sesametest.co:8080/static_pages/ali-lowcode/test-image/gbtc/images/gbtc-vs-bitcoin-discount-to-nav-worth-h5-dark.webp'


export const initialBannerProps: BannerProps = {
  isPhone: false,
  newsList: [initialNewsItem],
  BannerTitleList: [
    {title: 'GBTC vs Bitcoin'},
    {
      title: 'GBTC',
    },
  ],
  bannerImg: 'https://i.niupic.com/images/2023/05/15/b6Ie.webp',
  title: `GBTC vs Bitcoin:<br/>Is the Discount to NAV Worth the Drama for you as an Investor?`,
  subTitle: `GBTC is now trading at a steep discount to NAV, and one may be wondering if it is a good time to take advantage of this for an amplified ROI when the crypto bull market returns. However, with unhappy investors protesting and multiple lawsuits ongoing for Grayscale, is such discount worth it?`
}

export interface BannerTitleItemProps {
  title: string
}

export interface BannerProps {
  isPhone?: boolean,
  newsList: NewsItemProps[],
  BannerTitleList: BannerTitleItemProps[],
  bannerImg: string,
  pcLightBannerImg: string,
  pcDarkBannerImg: string,
  h5LightBannerImg: string,
  h5DarkBannerImg: string,
  title: string,
  subTitle: string,
}
