import React from 'react';
import SectionTitle from "../SectionTitle"
import SectionDescribe from "../SectionDescribe"
// @ts-ignore
import img from '../Article/Does-GBTC-track-the-price-of-Spot-Bitcoin.webp'
import './index.scss'


interface ArticleProps{
  title: string,
  imgAlt?: string,
  subTitle: string,
  imgUrl: string,
  subTitle2?: string,
  id: string,
  children?: React.DOMElement<any, any>,
}

export const initialArticleProps: ArticleProps = {
  title: 'GBTC vs Bitcoin Chart: Does GBTC track the price of Spot Bitcoin?',
  subTitle: 'Some may say this is close enough. But this no longer holds true when GBTC shares were trading at a discount close near 50% to the Bitcoins held by Grayscale.',
  imgUrl: 'https://i.niupic.com/images/2023/05/15/b6Ig.webp',
  id: "test"
}

const Article = ({title = initialArticleProps.title, imgAlt, subTitle, imgUrl, subTitle2, id, children}: ArticleProps) => {
  console.log('imgUrl', imgUrl);
  return (
      <div className='articles-wrapper' id={id}>
        <div className='articles-container'>
					<SectionTitle title={title}/>
          {subTitle ? <SectionDescribe describe={subTitle}/> : null}

          <div className='articles-container-img'>
            <img src={imgUrl} alt={imgAlt || title} loading='lazy'/>
          </div>
          {subTitle2 ? <SectionDescribe describe={subTitle2} notMargin={true}/> : null}
          {children && children}
        </div>
      </div>
  )

}
export default Article;
