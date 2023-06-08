import React, {useEffect, useRef, useState} from 'react';
import './index.scss';

// @ts-ignore
import {FacebookShareButton, LinkedinShareButton, TelegramShareButton, TwitterShareButton,} from "react-share";


interface DirListItemProp{
  title: string
  active: boolean,
  id: string
}

export const initialDirList = [
  {
    title: ('What is GBTC?'),
    active: true,
    id: 'what-is-gbtc'
  },
  {
    title: (`GBTC vs Bitcoin Chart`),
    active: false,
    id: 'gbtc-vs-bitcoin-chart'
  },
  {
    title: (`Why is GBTC Trading at a Discount`),
    active: false,
    id: 'why-is-gbtc-trading-at-a-discount'
  },
  {
    title: (`The Redeem GBTC Campaign`),
    active: false,
    id: 'the-redeem-gbtc-campaign'
  },
  {
    title: (`GBTC vs Spot Bitcoin`),
    active: false,
    id: 'gbtc-vs-spot-bitcoin'
  },
  {
    title: (`GBTC News Updates`),
    active: false,
    id: 'gbtc-news-updates'
  },
  {
    title: (`FAQ about GBTC and Bitcoin`),
    active: false,
    id: 'faq-about-gbtc-and-bitcoin'
  },
  {
    title: (`GBTC and Bitcoin Related Article`),
    active: false,
    id: 'gbtc-and-bitcoin-related-article'
  },
]

interface SiderBarProps{
  dirList: DirListItemProp[]
}
export const initialSiderBarProps: SiderBarProps = [
  {
    title: ('What is GBTC?'),
    active: true,
    id: 'what-is-gbtc'
  },
  {
    title: (`GBTC vs Bitcoin Chart`),
    active: false,
    id: 'gbtc-vs-bitcoin-chart'
  },
  {
    title: (`Why is GBTC Trading at a Discount`),
    active: false,
    id: 'why-is-gbtc-trading-at-a-discount'
  },
  {
    title: (`The Redeem GBTC Campaign`),
    active: false,
    id: 'the-redeem-gbtc-campaign'
  },
  {
    title: (`GBTC vs Spot Bitcoin`),
    active: false,
    id: 'gbtc-vs-spot-bitcoin'
  },
  {
    title: (`GBTC News Updates`),
    active: false,
    id: 'gbtc-news-updates'
  },
  {
    title: (`FAQ about GBTC and Bitcoin`),
    active: false,
    id: 'faq-about-gbtc-and-bitcoin'
  },
  {
    title: (`GBTC and Bitcoin Related Article`),
    active: false,
    id: 'gbtc-and-bitcoin-related-article'
  },
]

const Dir = ({dirList}: SiderBarProps) => {

  const [activeindex, SetActiveindex] = useState(0);
  const Title = useRef();
  const [Height, SetHeight] = useState(0);
  const [isTop, SetIsTop] = useState(false);
  const [topH, SetTopH] = useState(0);
  useEffect(() => {
    // 大于等于的时候吸顶
    const TitleHeight = document.querySelector(`[id="exploreBanner"]`).clientHeight;
    const APP_Height = document.querySelector(`.APP_title`).offsetHeight;
    let i =(TitleHeight - 120)

    if (Height > i) {
      Title.current.style.position = 'sticky';
      Title.current.style.top = '64px';
      Title.current.style.left = '0';
      Title.current.style.right = '0';
      Title.current.style.zIndex = '10';

      SetTopH(69)
      SetIsTop(true);

      const DOMLIST = [];
			dirList.forEach((item) => {
        const height = GetHoeght(item.id);
        DOMLIST.push(height);
      })

			// 循环拿到的数据数组 判断当前的高度是否高亮
			DOMLIST.forEach((item, index) => {
				if (Height >= Number(item) - 70) {
					SetActiveindex(index);
				}
			})

    } else {
      // 不吸顶
      Title.current.style.position = 'unset';
      Title.current.style.top = 'unset';
      SetIsTop(false);
      SetTopH(0);
    }

  }, [Height, activeindex])


  const GetHoeght = (dom) => {
    let selectDom = document.querySelector(`[id="${dom}"`);
    let realTop = selectDom?.offsetTop;
    realTop += selectDom?.offsetParent?.offsetTop;
    return realTop;
  }


  const Scroll_title = (index, id) => {

    // const TitleHeight = document.querySelector(`[id="exploreBanner"]`).clientHeight;
    // const DOMLIST = [];
		// dirList.forEach((item) => {
    //   const height = document.querySelector(`[id=${item.id}]`).clientHeight;
    //   DOMLIST.push(height);
    // })
    // const Darr = DOMLIST.splice(0, index);

		window.scrollTo({
			top: index === 0 ? 400 : ( GetHoeght(id) - 70),
			behavior: "smooth"
		});


    setTimeout(() => {
      SetActiveindex(index);
    }, 500)
  }

  const sun = (arr) => {
    let s = 0;
    for (let index = 0; index < arr.length; index++) {
      s += arr[index];
    }
    return s;
  }

  useEffect(() => {
		window.addEventListener('scroll', () => {
			SetHeight(document.documentElement.scrollTop);
		})
		return () => {
			window.removeEventListener('scroll', () => {
				SetHeight(document.documentElement.scrollTop);
			})
		}
	}, [])

  return (
      <aside className="APP_title">
        <div className="APP_title_top" ref={Title}>
          <menu className="Banner_position">
            {
								dirList && dirList.map((item, index) => {
                  return (<a
                      key={item.id}
                      href={`#${item.id}`}
                      data-click-event="cosmos_page_button_click"
                      data-collect-params={`{"button_name": "${item.title}"} {"module_name" :"table_content"}`}
                      className={`Banner_position_item ${index === activeindex ? "Banner_position_active" : ""}`}
                      onClick={(e) => {
                        e.preventDefault()
                        Scroll_title(index, item.id)
                      }}
                  >
                    <li>{item.title}</li>
                  </a>)
                })
            }
          </menu>

          <div className='dir-share'>
            <TwitterShareButton
                url={'https://go.gate.io/w/15dVIEvm'}
            >
                    <span
                        className='dir-share-link share_twitter'
                        data-click-event="cosmos_page_button_click"
                        data-collect-params={`{"button_name": "Twitter"}`}
                    >
                    </span>
            </TwitterShareButton>
            <FacebookShareButton
                url={'https://go.gate.io/w/WLZxn6Z7'}
            >
                    <span
                        className='dir-share-link share_facebook'
                        data-click-event="cosmos_page_button_click"
                        data-collect-params={`{"button_name": "Facebook"}`}
                    >
                    </span>
            </FacebookShareButton>
            <TelegramShareButton
                url={'https://go.gate.io/w/dmJYCyhK'}
            >
                    <span
                        className='dir-share-link share_telegram'
                        data-click-event="cosmos_page_button_click"
                        data-collect-params={`{"button_name": "telegram"}`}
                    >
                    </span>
            </TelegramShareButton>
            <LinkedinShareButton
                url={'https://go.gate.io/w/SMwmp8xb'}
            >
                    <span
                        className='dir-share-link share_ins'
                        data-click-event="cosmos_page_button_click"
                        data-collect-params={`{"button_name": "instagram"}`}
                    >
                    </span>
            </LinkedinShareButton>
            <span
                className='dir-share-link share_link'
                data-click-event="cosmos_page_button_click"
                data-collect-params={`{"button_name": "复制链接"}`}
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href)
                }}
            >
                </span>
          </div>
          <div className='dir-is'></div>
        </div>

      </aside>
  )

}
export default Dir;
