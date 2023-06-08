import React, {useEffect, useState} from 'react'
import SectionTitle from "../SectionTitle/index";
import './index.scss'
import {TimeLineVerticalProps} from "./types";
// @ts-ignore
import { event } from '@alilc/lowcode-engine';



function TimeLineVertical({title, isPhone, timeData, id}: TimeLineVerticalProps) {



  return (
      <div className='TimeLineVertical-wrapper' id={id}>
        <SectionTitle title={title} />
        <div className='TimeLineVertical-container'>
          <div className='TimeLineVertical-container-ex'>
            {
              timeData.map((item, idx) =>
                  <div className="TimeLineVertical-container-ex-item" key={item.time} >
                    <div className="TimeLineVertical-container-ex-item-block">
                      <div className={`TimeLineVertical-container-ex-item-block-right `}
                           style={idx === timeData.length - 1 ? { border: 'none' } : {}}>
                        <h3 className="TimeLineVertical-container-ex-item-block-right-title">{item.title}</h3>
                        {isPhone ? <div className='TimeLineVertical-time'>{item.time}</div> : null}
                        <div className="TimeLineVertical-container-ex-item-block-right-content" >
                          {
                            item.contentList.map((context, index) =>
                                <p key={index}>{context}</p>
                            )
                          }
                        </div>
                      </div>
                    </div>
                    {isPhone ? null : <div className='TimeLineVertical-time'>{item.time}</div>}
                  </div>
              )
            }
          </div>
        </div>
      </div>
  )
}

export default TimeLineVertical
