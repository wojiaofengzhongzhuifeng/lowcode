import React from 'react'
import './index.scss'
import {CardPictureContentProps} from "./types";

// todo 设置器有问题
export default function CardPictureContent({ CardPictureContentList, title }: CardPictureContentProps) {


  return (
    <div className='CosmosCompetitors'>
      <h2>{title}</h2>
      <div className='Competitors_Block'>
        {
          CardPictureContentList.map((item, index) => {
            return <div key={index} className={`Competitors_Content Competitors_Img${item.ImgPosition}`}>
              <div className='Content_Img'><img src={item.Images} loading="lazy" alt={item.ImagesAlt} /></div>
              <div className='Content_Right'>
                <h3 className='Right_h3'>{item.title}</h3>
                <div className='Right_Content'>
                  <div className='Right_Content_Left'>
                    {
                      item.listA.map((itself) => {
                        return <div className='Right_text'>
                          <div className='Right_Img'>
                            {
                              itself?.icon ? <img src={itself?.icon} alt="" /> : itself?.iconType === "yes" ? (
                                <img src="https://gimg2.gateimg.com/image/1682497766262884595dui.png" alt="" />

                              ) : (
                                <img src="https://gimg2.gateimg.com/image/1682497766262884595dui.png" alt="" />
                              )
                            }
                          </div>
                          <p>{itself.description}</p>
                        </div>
                      })
                    }
                  </div>
                  <div className='Right_Content_Right'>
                    {
                      item.listB.map((emerged) => {
                        return <div className='Right_text'>
                          <div className='Right_Img'>
                            {
                              emerged?.icon ? <img src={emerged?.icon} alt="" /> : emerged?.iconType === "yes" ? (
                                <img src="https://gimg2.gateimg.com/image/1682497766819720177cuo.png" alt="" />

                              ) : (
                                <img src="https://gimg2.gateimg.com/image/1682497766819720177cuo.png" alt="" />
                              )
                            }
                          </div>
                          <p>{emerged.description}</p>
                        </div>
                      })
                    }
                  </div>
                </div>

                <div className='Right_Button'>
                  {
                    item.button.map((btn) => {
                      return <a className='Right_Btn' target='_blank' href={btn.url} title={btn.buttonText}
                        data-click-event="cosmos_page_button_click"
                        data-collect-params={`{"button_name": "${btn.btn}"} {"module_name":"mainpage"}`} >{btn.buttonText}</a>
                    })
                  }
                  {
                    item.linkText.map((txt) => {
                      return <p>
                        <span>{txt.text}</span>
                        <a href={txt.url} title={txt.text} target='_blank'
                          data-click-event="cosmos_page_button_click"
                          data-collect-params={`{"button_name": "${txt.linkName}"} {"module_name":"link"}`} >{txt.linkName}</a>
                      </p>
                    })
                  }
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}
