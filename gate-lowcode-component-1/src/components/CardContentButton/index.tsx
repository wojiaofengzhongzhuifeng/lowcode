import React, { useState } from 'react';
import './index.scss'
import { Row } from "../Grid"
import {CardContentButtonProps} from "./types";

// todo setter 有问题
const CardContentButton = ({ CardContentList }: CardContentButtonProps) => {

  console.log('CardContentList', CardContentList);

  return (
    <div className='CardContentButton' >
      <Row span={3} xxl={3} xl={3} lg={2} md={2} sm={2} xs={1} gutter={'24px'} smGutter={'24px'} xsGutter={'24px'}>
        {
          CardContentList.map((item, index) => {
            return (
              <div key={index} className='Card_Block'>
                <h5 className='Block_title'>{item.title}</h5>
                <p className='Block_text'>{item.description}</p>
                {
                  item.button ? <>
                    {
                      item.button.map((btn, idx) => {
                        return <a className='Block_btn' href={btn.url} rel="nofollow noopener noreferrer" target='_blank' >{btn.buttonName}</a>
                      })
                    }</> : null
                }
              </div>
            )
          })
        }
      </Row>
    </div>
  )

}
export default CardContentButton;
