import React from "react";
import {Row} from "../Grid";
import "./index.scss"
import WordEllipsis from "../WordEllipsis/index.js";
import ImageLoader from "../ImageLoader/index.js";
import caseImg1 from './Will-Terra-Luna-Recover.webp'


export interface CaseItemProps{
  img: string
  title: string
  content: string
  imgAlt: string
  href: string
  buttonName: string
  linkType: string
}

export const initialCaseItemProps = {
  img: caseImg1,
  title: 'Terra Luna',
  content: `Two major products of the project, LUNA and UST, crashed more than 99% in just a short span of three days, triggering a series of liquidation in the crypto market. And Bitcoin price is no exception to this.`,
  imgAlt: 'Will Terra Luna Recover?',
  href: `${window.lang_prefix}/explore/terra-luna`,
  buttonName: 'Will Terra Luna Recover?',
  linkType: "inSet"
}
interface CardListType1Props{
  list: CaseItemProps[]
  dataClickEvent: string
}

function CardListType1({list, dataClickEvent}: CardListType1Props) {
  return (
      <div className='cardListType1-wrapper'>
        <div className='cardListType1-wrapper-group'>
          <Row span={3} gutter={'16px'} lg={3} md={3} sm={2} xs={1} smGutter={'16px'} xsGutter={'16px'}>
            {
              list?.map((item, index) =>
                  <div className='cardListType1-wrapper-group-item' key={`${item.title}:${index}`}>
                    <div className='CardListType1-wrapper-group-item-sec'>
                      <ImageLoader alt={item.imgAlt} src={item.img}/>
                    </div>
                    <div className='CardListType1-wrapper-group-item-content'>
                      <h3 className='cardListType1-wrapper-group-item-title'>{item.title}</h3>
                      <WordEllipsis className="cardListType1-wrapper-group-item-des" text={item.content}/>
                      {/*<p className='cardListType1-wrapper-group-item-des'>{item.content}</p>*/}
                      <div className="cardListType1-wrapper-content-button-box">
                        <a className='cardListType1-wrapper-content-button' href={item.href} target='_blank' rel={item.linkType === "inSet" ? "" :'nofollow noopener noreferrer'}
                           data-click-event={dataClickEvent}
                           data-collect-params={`{"button_name": "${item.buttonName}", "module_name":"mainpage"}`}
                           title={item.buttonName}
                        >{item.buttonName}</a>
                      </div>

                    </div>

                  </div>
              )
            }
          </Row>
        </div>
      </div>
  )
}

export default CardListType1;
