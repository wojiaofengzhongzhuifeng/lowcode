import React, {useEffect} from 'react'
import './index.scss'
import { Row } from "../Grid"
import {BrandIconProps} from "./types";
import {useQueryCurrentThemeIsDark} from '../../common-hooks'
export default function BrandIcon({ BrandIconList, title }: BrandIconProps) {
  const isDark = useQueryCurrentThemeIsDark()

  useEffect(()=>{
    console.log('isDark BrandIcon', isDark);
  }, [isDark])

  return (
        <div className='Icon'>
            <h2>{title}</h2>
            <div className='Icon_Components'>
                <Row span={5} gutter={'24px'} xl={5} lg={5} md={5} sm={4} xs={2} smGutter={'16px'} xsGutter={'16px'}>
                    {
                        BrandIconList.map(item =>
                            <div className='Components_Img'>
                                <img src={isDark ? item.darkIcon : item.Icon} alt={item.alt} loading="lazy" />
                            </div>
                        )
                    }
                </Row>
            </div>
        </div>
    )
}
