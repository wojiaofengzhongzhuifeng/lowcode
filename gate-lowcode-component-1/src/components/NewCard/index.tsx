import React from 'react';
import './index.scss'
import {Row} from "./../Grid"
import SectionTitle from "../SectionTitle/index";
import WordEllipsis from "../WordEllipsis/index.js";
import ImageLoader from "../ImageLoader/index.js";

export interface NewListitemProps {
  abstract: string
  brief: string
  imgurl: string
  news_img: string
  news_url: string
  release_time: string
  source: string
  title: string
}

interface NewCardProps {
  title: string,
  isPhone: boolean,
  newsList: NewListitemProps[],
  id: string
}

export const initialNewsList = [
  {
    "title": "Bitcoin Prices Slip to 2-Month Lows As CoinDesk’s Bitcoin Trend Indicator Turns Neutral From Bullish",
    "news_url": "https://www.coindesk.com/markets/2023/05/12/btc-slips-to-2-month-low-as-coindesks-bitcoin-trend-indicator-sheds-bullish-bias/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    "news_img": "https://www.coindesk.com/resizer/mfZ4IjxxtNXEiupFvmMKX_7oI5E=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/RVKHAA2JQFHTXCRUVBJNMNHVR4.png",
    "abstract": "Prices fell to $26,160 soon before press time, reaching the lowest since March 17.",
    "source": "coindesk",
    "release_time": "2023-05-12",
    "imgurl": "https://www.coindesk.com/resizer/mfZ4IjxxtNXEiupFvmMKX_7oI5E=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/RVKHAA2JQFHTXCRUVBJNMNHVR4.png",
    "brief": "Prices fell to $26,160 soon before press time, reaching the lowest since March 17."
  }, {
    "title": "First Mover Asia: Bitcoin Regains $27K, but Investors Search for a Catalyst",
    "news_url": "https://www.coindesk.com/markets/2023/05/12/first-mover-asia-bitcoin-regains-27k-but-investors-search-for-a-catalyst/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    "news_img": "https://www.coindesk.com/resizer/ylz3XVpjXnhTblnxmk5SM85OhSs=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/K6VQF3QSLZB25CDK3BVFXXSGRM.jpg",
    "abstract": "ALSO: The CEO of Stablecorp says that bitcoin's recent dip is part of its growing pains. He says that the scalability of the bitcoin network and liquidity present challenges.",
    "source": "coindesk",
    "release_time": "2023-05-12",
    "imgurl": "https://www.coindesk.com/resizer/ylz3XVpjXnhTblnxmk5SM85OhSs=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/K6VQF3QSLZB25CDK3BVFXXSGRM.jpg",
    "brief": "ALSO: The CEO of Stablecorp says that bitcoin's recent dip is part of its growing pains. He says that the scalability of the bitcoin network and liquidity present challenges."
  }, {
    "title": "BTC price risks $27K loss as Bitcoin trend lines brew 'bullish cross'",
    "news_url": "https://cointelegraph.com/news/btc-price-risks-27k-loss-as-bitcoin-trend-lines-brew-bullish-cross",
    "news_img": "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=840/https://s3.cointelegraph.com/uploads/2023-05/29b905ca-da4e-4f2f-a1aa-f84be35ea0e4.jpg",
    "abstract": "BTC price action offers little relief to Bitcoin bulls despite U.S. macro data releases showing inflation subsiding.",
    "source": "cointelegraph",
    "release_time": "2023-05-11",
    "imgurl": "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=840/https://s3.cointelegraph.com/uploads/2023-05/29b905ca-da4e-4f2f-a1aa-f84be35ea0e4.jpg",
    "brief": "BTC price action offers little relief to Bitcoin bulls despite U.S. macro data releases showing inflation subsiding."
  }, {
    "title": "BTC price risks $27K loss as Bitcoin trend lines brew ‘bullish cross’",
    "news_url": "https://cointelegraph.com/news/btc-price-risks-27k-loss-as-bitcoin-trend-lines-brew-bullish-cross",
    "news_img": "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=840/https://s3.cointelegraph.com/uploads/2023-05/29b905ca-da4e-4f2f-a1aa-f84be35ea0e4.jpg",
    "abstract": "BTC price action offers little relief to Bitcoin bulls despite U.S. macro data releases showing inflation subsiding.",
    "source": "cointelegraph",
    "release_time": "2023-05-11",
    "imgurl": "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=840/https://s3.cointelegraph.com/uploads/2023-05/29b905ca-da4e-4f2f-a1aa-f84be35ea0e4.jpg",
    "brief": "BTC price action offers little relief to Bitcoin bulls despite U.S. macro data releases showing inflation subsiding."
  }, {
    "title": "Bitcoin Edges Below $27K as Latest Bank Crisis Fails to Trigger Price Increase",
    "news_url": "https://www.coindesk.com/markets/2023/05/11/bitcoin-edges-below-27k-as-latest-bank-crisis-fails-to-trigger-price-increase/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    "news_img": "https://www.coindesk.com/resizer/UuxMotNSCdd2JXha33Cek8jA88k=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/XJS45MY5GNF75CIZ7JFB3P4ZQQ.jpg",
    "abstract": "BTC has been trading largely below the psychologically important $30,000 mark since late April, as investors wrestle with recent bank sector debacles and other macroeconomic uncertainties.",
    "source": "coindesk",
    "release_time": "2023-05-11",
    "imgurl": "https://www.coindesk.com/resizer/UuxMotNSCdd2JXha33Cek8jA88k=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/XJS45MY5GNF75CIZ7JFB3P4ZQQ.jpg",
    "brief": "BTC has been trading largely below the psychologically important $30,000 mark since late April, as investors wrestle with recent bank sector debacles and other macroeconomic uncertainties."
  }]

export const initialNewCardProps: NewCardProps = {
  title: 'GBTC News Update: Is it a Trust or ETF Now?',
  isPhone: false,
  newsList: initialNewsList
}

const NewCard = ({title, isPhone, newsList, id}: NewCardProps) => {

  return (
    <div className='Card' id={id}>
      <SectionTitle title={title}/>
      <div className='Card-container'>
        <div className='Card-container-content'>
          <Row span={3} lg={2} md={2} sm={2} xs={1} gutter={'16px'} smGutter={'12px'} xsGutter={'6px'}>
            {
              newsList?.map((item, idx) => {
                console.log("render");
                if (idx < 3) {
                  return (<div className='Card-container-content-item Card-container-content-item0' key={item.title}
                               data-click-event="cosmos_latest_news_click"
                               data-collect-params={`{"news_name": "${item.title}"}`}
                               onClick={() => {
                                 window.open(item.news_url)
                               }}>
                    <ImageLoader src={item.imgurl} alt={item.title}/>
                    <div className='Card-container-content-item-block'>
                      <h3 className='Card-container-content-item-block-title'><a href={item.news_url}
                                                                                 rel="nofollow noopener noreferrer"
                                                                                 target='_blank'>{item.title}</a></h3>
                      <WordEllipsis
                        className={`${item.abstract === '' ? 'Card-empty' : ''} Card-container-content-item-block-content `}
                        text={item.abstract}/>

                      <div className="Card-container-content-item-block-link-wrapper">
                        <div className='Card-container-content-item-block-link'>
                          <span className='Card-container-content-item-block-link-btn'>
                            {item?.source}
                          </span>
                          <time className='Card-container-content-item-block-link-time' dateTime={item?.release_time}>
                            {item?.release_time}
                          </time>
                        </div>
                      </div>
                    </div>
                  </div>)
                }
              })
            }
          </Row>
        </div>
        {
          <div className='Card-container-wrap' style={isPhone ? {display: 'none'} : {}}>
            {
              newsList.map((item, idx) => {
                if (idx > 2) {
                  return (<a className='Card-container-wrap-item' key={item.title + Math.random()}
                             data-click-event="btc_halving_related_article_click"
                             data-collect-params={`{"article_name": "${item.title}"}`}
                             href={item.news_url}
                             title={item.title}
                  >
                    <Row span={[3.2, 6.8]}>
                      <ImageLoader src={item.imgurl} alt={item.title}/>
                      <div className='Card-container-wrap-item-block'>
                        <div className='Card-container-wrap-item-block-top'>
                          <h3 className='Card-container-wrap-item-block-top-title'>
                            <a href={item.news_url} target='_blank'> {item.title} </a>
                          </h3>
                          <WordEllipsis className={`Card-container-wrap-item-block-top-content `} text={item.abstract}/>
                        </div>
                        <div className='Card-container-wrap-item-block-link'>
													<span className='Card-container-wrap-item-block-link-btn'>
														{item?.source}
													</span>
                          <time className='Card-container-wrap-item-block-link-time' dateTime={item?.release_time}>
                            {item?.release_time}
                          </time>
                        </div>
                      </div>
                    </Row>
                  </a>)
                }
              })
            }
          </div>
        }
        {newsList && newsList.length > 0 &&
          <div className='Card-container-btn'>
            <a className='Card-container-btn-tex'
               href={`${window.lang_prefix}/page/live_news`}
               target='_blank'
               data-click-event="btc_halving_link_click"
               data-collect-params={`{"link_name": "Read the Latest Crypto News"}`}
            >Read the Latest Crypto News</a>
            <span className='Card-container-btn-down'>
                  <svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 4.00001L6 8L2 4" stroke="#2354E6" strokeWidth="2"/>
                  </svg>
                </span>
          </div>
        }
      </div>
    </div>
  )

}
export default NewCard;
