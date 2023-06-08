import React from 'react'
import {Row} from '../Grid'
import Vs from './vs.png'
import './index.scss'
import {CompareModuleProps} from "../CompareModule";





function CompareModuleClassic({compareData, span}: CompareModuleProps) {

  console.log('compareData', compareData);


  return (
      <div className='compare-module-classic-container'>
        <Row span={span||2} gutter={"0"} sm={1} xs={1} xsGutter={"0"}>
          <div className='compare-classic-a'>
            <div className='compare-module-classic-card-wrapper'>
              <div className='compare-module-classic-card-header'>
                <h3 className='compare-module-classic-header-title'>
                  {compareData?.a?.title}
                </h3>
              </div>
              <div className='compare-module-classic-hr'/>
              <div className='compare-module-classic-content'>
                {compareData?.a?.list?.map((col, index) => {
                  return (
                      <div className='compare-module-classic-card-container' key={Math.random() + index}>
                        <ul className='compare-module-classic-item-box'>
                          {col?.map((item, idx) => {
                            return (
                                <li className='compare-module-classic-item' key={Math.random() + idx}>
                                  <div className='compare-module-classic-item-prefix'>
                                    {
                                      item?.icon ? <img src={item?.icon} alt=""/> : item?.iconType === "yes" ? (
                                          <svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.4241 3.44933L4.73147 10.1419L0.576172 5.98673L1.63682 4.92606L4.73146 8.02063L10.3634 2.38867L11.4241 3.44933Z" fill="#17E6A1"/>
                                          </svg>

                                      ) : (
                                          <svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.81848 3.03066L8.96996 2.18213L5.99984 5.15225L3.03017 2.18258L2.18164 3.0311L5.15131 6.00077L2.18173 8.97035L3.03026 9.81888L5.99984 6.8493L8.96987 9.81933L9.81839 8.9708L6.84837 6.00077L9.81848 3.03066Z" fill="#ADB5CC"/>
                                          </svg>
                                      )
                                    }
                                    </div>
                                  <div className='compare-module-classic-item-context'>
                                    {item?.context}
                                  </div>
                                </li>
                            )
                          })}
                        </ul>
                      </div>
                  )
                })}

              </div>
            </div>
          </div>
          <div className='compare-classic-b'>
            <div className={'vs-img-pic-classic'}>
              <img loading="lazy" src={compareData?.vsIcon ? compareData?.vsIcon : Vs} alt=""/>
            </div>
            <div className='compare-module-classic-card-wrapper un-Right-classic'>
              <div className='compare-module-classic-card-header'>
                <h3 className='compare-module-classic-header-title'>
                  {compareData?.b?.title}
                </h3>
              </div>
              <div className='compare-module-classic-hr compare-module-classic-right-hr'/>
              <div className='compare-module-classic-content'>
                {compareData?.b?.list?.map((col, index) => {
                  return (
                      <div className='compare-module-classic-card-container' key={Math.random() + index}>
                        <ul className='compare-module-classic-item-box'>
                          {col?.map((item, idx) => {
                            return (
                                <li className='compare-module-classic-item' key={Math.random() + idx}>
                                  <div className='compare-module-classic-item-prefix'>
                                    {
                                      item?.icon ? <img src={item?.icon} alt=""/> : item?.iconType === "yes" ? (
                                          <svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4241 3.44933L4.73147 10.1419L0.576172 5.98673L1.63682 4.92606L4.73146 8.02063L10.3634 2.38867L11.4241 3.44933Z" fill="#17E6A1"/>
                                          </svg>

                                      ) : (
                                          <svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.81848 3.03066L8.96996 2.18213L5.99984 5.15225L3.03017 2.18258L2.18164 3.0311L5.15131 6.00077L2.18173 8.97035L3.03026 9.81888L5.99984 6.8493L8.96987 9.81933L9.81839 8.9708L6.84837 6.00077L9.81848 3.03066Z" fill="#ADB5CC"/>
                                          </svg>
                                      )
                                    }
                                  </div>
                                  <div className='compare-module-classic-item-context'>
                                    {item?.context}
                                  </div>
                                </li>
                            )
                          })}
                        </ul>
                      </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Row>
      </div>
  )
}

export default CompareModuleClassic
