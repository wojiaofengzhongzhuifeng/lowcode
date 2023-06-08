import React from 'react'
import { Row } from "./../Grid"
import './index.scss'
import SectionTitle from "../SectionTitle/index";
import ImageLoader from "../ImageLoader/index.js";

export const initialLearnArticleListProps: LearnArticleListProps = {
  title: 'GBTC and Bitcoin Related Articles',
  learnArticleList: [
    {
      Images: `https://s3.ap-northeast-1.amazonaws.com/gimg.gateimg.com/learn/5311f319ec00017f591e5356feac8513efd1ff29.jpg`,
      tit: 'Beginner',
      color: 'green',
      subtitle: (`What is Bitcoin (BTC)?`),
      href: `${window.lang_prefix}/learn/articles/what-is-bitcoin/169`
    },
    {
      Images: `https://s3.ap-northeast-1.amazonaws.com/gimg.gateimg.com/learn/535631b61cb7269bb43a682e8e564a6423d9b6a5.jpg`,
      tit: 'Beginner',
      color: 'green',
      subtitle: (`What is a Bitcoin ETF?`),
      href: `${window.lang_prefix}/learn/articles/what-is-a-bitcoin-etf/218`
    },
    {
      Images: `https://s3.ap-northeast-1.amazonaws.com/gimg.gateimg.com/learn/73f83c02f95247e84a1e5e086046cf08eee538bc.jpg`,
      tit: 'Beginner',
      color: 'green',
      subtitle: (`What is Spot Trading?`),
      href: `${window.lang_prefix}/learn/articles/what-is-spot-trading/93`
    },
  ],
  id: 'test'
}

export interface LearnArticleListItemProps{
  Images: string
  tit: string
  color: string
  subtitle: string
  href: string
}

interface LearnArticleListProps{
  title: string,
  learnArticleList: LearnArticleListItemProps[],
  id: string
}
export default function LearnArticleList({title, learnArticleList, id}: LearnArticleListProps) {

  const handClick = (href) => {
    window.open(href)
  }

  return (
      <div className='Body_Learn' id={id}>
        <SectionTitle title={title} />
        <div className='Learn_Content'>
          <Row span={3} xxl={3} xl={3} lg={2} md={2} sm={2} xs={1} gutter={'24px'} smGutter={'24px'} xsGutter={'24px'}>
            {
              learnArticleList.map((item, index) => {
                return (
                    <div key={index} className='Learn_Box'
                         data-click-event="cosmos_related_article_click"
                         data-collect-params={`{"article_name": "${item.subtitle}"}`} onClick={() => { handClick(item.href) }}>
                      <div className='Learn_Img'>
                        <ImageLoader src={item.Images} alt={item.subtitle}/>
                      </div>
                      <div className='Learn_Footer'>
                        <p className={`Learn_tit Learn_${item.color}`}><span className={`Learn_${item.color}`}></span>{item.tit}</p>
                        <h3 className='Learn_subtitle'><a href={item.href} title={item.subtitle} target='_blank'>{item.subtitle}</a></h3>
                      </div>
                    </div>
                )
              })
            }
          </Row>
        </div>
      </div>
  )
}
