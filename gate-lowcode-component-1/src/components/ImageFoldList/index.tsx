import React, {useState} from "react";
import SectionTitle from "../SectionTitle"
import SectionDescribe from "../SectionDescribe"
import {useQueryCurrentThemeIsDark} from "./../../common-hooks"

import "./index.scss"


export const initialImageFoldListProps: ImageFoldListProps = {
  image: 'https://i.niupic.com/images/2023/05/15/b6If.webp',
  title: 'What is GBTC and What Makes it So Special?',
  describe: 'The Grayscale Bitcoin Trust (GBTC) is an investment vehicle allowing investors to buy and sell its shares via stock trading platforms. In January 2020, GBTC became the first digital currency trust reporting to the SEC reporting company.',
  foldListData: [
    {
      title: (`GBTC can be traded exactly like an individual stock`),
      describe: (`This is a more familiar process to most investors compared to attempting to learn the ropes from scratch in Bitcoin investment.`)
    },
    {
      title: (`Convenience in Bitcoin investment though stock trading platforms`),
      describe: (`This eliminates the need to set up and manage crypto wallets.`)
    },
    {
      title: (`Investors can have exposure to Bitcoin without legal complications`),
      describe: (`Securities law around stock market is clearer, whereas the laws surrounding the cryptocurrency market remains relatively muddled. In this sense, there is more clarity when an investor owns GBTC compared to Bitcoin.`)
    },
    {
      title: (`Bitcoin custodial storage and insurance against loss or theft is covered`),
      describe: (`As Grayscale operates as a trust holding Bitcoin on behalf of the investors, the management is also responsible for cryptocurrency custodial storage and insurance as well. This allows investors to bypass the relevant technical know-how in owning Bitcoin.`)
    }
  ],
  id: 'what-is-gbtc'
}

interface FoldListItem{
  title: string,
  describe: string
}

interface ImageFoldListProps{
  title: string,
  describe: string,
  image: string,
  imageAlt?: string,
  foldListData: FoldListItem[],
  id: string
}


function ImageFoldList({title, describe, image, imageAlt, foldListData, id}: ImageFoldListProps) {
  const [activeItem, setActiveItem] = useState(-1)
  const isDark = useQueryCurrentThemeIsDark()
  const listClickHandle = (idx) => {
    if (activeItem === idx) {
      setActiveItem(-1)
      return
    }
    setActiveItem(idx)
  }
  return (
      <div className="image-fold-list-wrapper" id={id}>
        <SectionTitle title={title}/>
        <SectionDescribe describe={describe}/>
        <div className="image-fold-list-content">
          <div className="image-fold-image">
            <img src={image} alt={imageAlt || title} loading="lazy"/>
          </div>
          <ul className="fold-list-content">
            {foldListData?.map((item, index) => {
              return (
                  <li className={`fold-list-content-item ${activeItem === index ? "fold-list-on" : ""}`} key={index} onClick={() => {
                    listClickHandle(index)
                  }}>
                    <h3 className={`fold-list-content-item-title`}>
                      <span className="fold-list-content-item-title-context">{item.title}</span>
                      <span className="fold-list-content-item-icon">
                        {activeItem === index ? (
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 10L8 5L13 10" stroke="#3366FF" strokeWidth="2" strokeLinecap="square"/>
                            </svg>
                        ) : isDark ? (
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_380_6913)">
                                <path d="M3 6L8 11L13 6" stroke="white" strokeWidth="2" strokeLinecap="square"/>
                              </g>
                              <defs>
                                <clipPath id="clip0_380_6913">
                                  <rect width="16" height="16" fill="white"
                                        transform="matrix(-5.50037e-08 1 1 3.47374e-08 0 0)"/>
                                </clipPath>
                              </defs>
                            </svg>
                        ) : (
                            <svg width="16" height="11" viewBox="0 0 16 11" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 3L8 8L13 3" stroke="#04091A" strokeWidth="2" strokeLinecap="square"/>
                            </svg>
                        )}
                      </span>
                    </h3>
                    <p className="fold-list-content-item-des">
                      {item.describe}
                    </p>
                    {foldListData.length - 1 !== index && <div className="fold-list-content-item-line"/>}
                  </li>
              )
            })}
          </ul>
        </div>
      </div>
  )
}

export default ImageFoldList
