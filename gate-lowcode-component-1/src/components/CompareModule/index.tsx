import React from 'react'
import Vs from './vs.png'
// import dui from '../../image/dui.png'
// import cuo from '../../image/cuo.png'
import './index.scss'

// todo compareModuleH5 和 compareModuleClassic 没有处理
export const initialCompareModuleProps = {
  compareData: {
    a: {
      title: 'Buying GBTC',
      list: [
        [
          {
            icon: null,
            iconType: "no",
            context: 'Own shares of GBTC only instead of actual Bitcoin'
          },
          {
            icon: null,
            iconType: "no",
            context: 'High management fees at 2%, reducing overall ROI'
          },
          {
            icon: null,
            iconType: "no",
            context: 'Share redemption process is unecessarily restrictive'
          },
          {
            icon: null,
            iconType: "no",
            context: 'Limited liquidity, making entry and exit points less accurate'
          },
          {
            icon: null,
            iconType: "no",
            context: 'Undergoing stakeholders and management conflict'
          },
        ],
      ]
    },
    b: {
      title: ("Buying Spot Bitcoin"),
      list: [
        [
          {
            icon: null,
            iconType: "yes",
            context: ("Ownership of actual Bitcoin instead of a derivative product with no intrinsic value")
          },
          {
            icon: null,
            iconType: "yes",
            context: ("Valuation is much more straightforward to understand")
          },
          {
            icon: null,
            iconType: "yes",
            context: ("Significantly bigger market cap than GBTC shares, making it easy to trade in the market")
          },
          {
            icon: null,
            iconType: "yes",
            context: ("Can be traded via trusted centralized exchanges (CEX) with proof of reserves")
          },
          {
            icon: null,
            iconType: "yes",
            context: ("Zero trading fee")
          },
        ]
      ]
    },
    vsIcon: null
  }
}

export interface CompareModuleListItemProps{
  icon: string,
  iconType: 'yes' | 'no',
  context:string
}
export interface CompareModuleItemProps{
  title: string,
  list: CompareModuleListItemProps[][]
}

export interface CompareModuleProps{
  compareData: {
    a: CompareModuleItemProps
    b: CompareModuleItemProps
    vsIcon?: string
  }
}

function CompareModule({compareData}: CompareModuleProps) {
  return (
      <div className='compare-module-container'>
        <div className='compare-a'>
          <div className='compare-module-card-wrapper'>
            <div className='compare-module-card-header'>
              <h3 className='compare-module-header-title'>
                {compareData?.a?.title}
              </h3>
            </div>
            <div className='compare-module-hr' />
            <div className='compare-module-content'>
              {compareData?.a?.list?.map((col, index)=>{
                return (
                    <div className='compare-module-card-container' key={Math.random()+index}>
                      <ul className='compare-module-item-box'>
                        {col?.map((item,idx)=>{
                          return (
                              <li className='compare-module-item' key={Math.random()+idx}>
                                <div className='compare-module-item-prefix'>
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
                                <div className='compare-module-item-context'>
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
        <div className='compare-b'>
          <div className='compare-module-card-wrapper'>
            <div className='un-Right'>
              <div className='compare-module-card-header'>
                <h3 className='compare-module-header-title'>
                  {compareData?.b?.title}
                </h3>
              </div>
              <div className='compare-module-hr compare-module-right-hr' />
              <div className='compare-module-content'>
                {compareData?.b?.list?.map((col, index)=>{
                  return (
                      <div className='compare-module-card-container' key={Math.random()+index}>
                        <ul className='compare-module-item-box'>
                          {col?.map((item,idx)=>{
                            return (
                                <li className='compare-module-item' key={Math.random()+idx}>
                                  <div className='compare-module-item-prefix'>
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
                                  <div className='compare-module-item-context'>
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
        </div>
        <div className={'vs-img-pic'}>
          <img loading="lazy" src={compareData?.vsIcon ? compareData?.vsIcon : Vs} alt="" />
        </div>
      </div>
  )
}

export default CompareModule
