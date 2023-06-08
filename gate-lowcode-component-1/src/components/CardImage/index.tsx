import React from 'react'
import './index.scss'
import { Row } from "../Grid"
import ImageLoader from "../ImageLoader/index.js";
import {CardImageProps} from "./types";
const CardImage = ({ CardImageList, title }: CardImageProps) => {
    return (
        <div className='CardCosmos'>
            <h2>{title}</h2>
            <div className='Card_Cont'>
                <Row span={3} gutter={'24px'} lg={3} md={3} sm={3} xs={1} smGutter={'24px'} xsGutter={'24px'}>
                    {
                        CardImageList.map((item, index) => {
                            return (
                                <div key={index} className="key_content">
                                    <div className="content_Img">
                                        <ImageLoader alt={item.ImageAlt} src={item.Image} />
                                    </div>
                                    <div className="content_Bot">
                                        <ul className="content_text">
                                            {
                                                item.descriptionList.map((itm) => {
                                                    return <li><span className="Text_Square"></span>{itm}</li>
                                                })
                                            }
                                        </ul>
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

export default CardImage;
