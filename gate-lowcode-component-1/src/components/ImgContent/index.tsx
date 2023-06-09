import React from 'react'
import './index.scss'
import {ImgContentProps} from "./types";

export default function ImgContent({ ImgContentList}: ImgContentProps) {

    return (<div>
        {
            ImgContentList.map((item, index) => {
                return <div className='CosmosExplaine_Content' key={index}>
                    <div className={`CosmosExplaine_Box position_${item.ImgPosition}`} >
                        <div className='Box_Img'><img src={item.Image} loading="lazy" alt={item.ImageAlt} /></div>
                        <div className='Box_Content'>
                            <h3>{item.title}</h3>
                            {
                                item.description.map((itm)=>{
                                    return <p>{itm}</p>
                                })
                            }

                        </div>
                    </div>
                </div>
            })
        }
    </div>

    )
}

