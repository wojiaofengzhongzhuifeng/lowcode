import React from 'react'
import './index.scss'
import { Row } from "../Grid"
import {TimelineHorizontalProps} from "./types";
import {useCheckIsPhone} from './../../common-hooks'
function TimelineHorizontal({ TimelineHorizontalList }: TimelineHorizontalProps) {
    const active = TimelineHorizontalList.length
    const {isPhone} = useCheckIsPhone()

    return (
        <div className='How' id='growth'>
            {
                isPhone ? <div className='How-container'>
                    <div className='How-container-ex'>
                        <div className='How-container-ex-border'>
                        </div>
                        {
                            TimelineHorizontalList.map((item, idx) =>
                                <div className="How-container-ex-item" key={item.date} id={item + idx}>
                                    <div className="How-container-ex-item-block">
                                        <div className="How-container-ex-item-block-right">
                                            <div className="How-container-ex-item-block-right-title">{item.date}</div>
                                            <h3 className="How-container-ex-item-block-right-date">{item.title}</h3>
                                            <div className="How-container-ex-item-block-right-content"
                                                style={idx === TimelineHorizontalList.length - 1 ? { marginBottom: '0' } : {}}
                                            >{item.content}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div> :
                    <div className='How-image'>
                        <div className='How-image-back'>
                            <div className='How-image-back-one'></div>
                            <div className='How-image-back-two'></div>
                        </div>
                        <Row span={active} xxl={active} xl={active} lg={active} md={active} sm={active} xs={active} gutter={'24px'} smGutter={'12px'} xsGutter={'6px'} >
                            {
                                TimelineHorizontalList.map((item, index) => {
                                    return (
                                        <div key={index} >
                                            <div className='How-image-round'><span className='How-image-round-item-box'></span></div>
                                            <div className='How-image-content'>{item.date}</div>
                                            <div className='How-image-footer'>
                                                <h3 className={`How-image-footer-title`}>{item.title}</h3>
                                                <div className='How-image-footer-content'>{item.content}</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Row>
                    </div >
            }
        </div>
    )
}
export default TimelineHorizontal;
