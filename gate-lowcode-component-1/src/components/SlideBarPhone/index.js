import React, {useEffect, useRef, useState} from 'react';
import './index.scss';

const SlideBarPhone = ({list}) => {
	const [activeindex, SetActiveindex] = useState(0);
	const [text, setText] = useState(list?.length > 0 ? list[0].title : '')
	const [clickValue, setClickValue] = useState(false)
	const Title = useRef();
	const [Height, SetHeight] = useState(0);
	const [isTop, SetIsTop] = useState(false);
	const [topH, SetTopH] = useState(0);
	const [highLight,setHighLight] = useState(-1);

	useEffect(() => {
		window.addEventListener("scroll", onScroll)
		return () => {
			window.removeEventListener("scroll", onScroll)
		}
	}, [])

	useEffect(() => {
		// 大于等于的时候吸顶
		const TitleHeight = document.querySelector(`[id="exploreBanner"]`).clientHeight;
		const APP_Height = document.querySelector(`.APP_title`).offsetHeight;
		if (Height > TitleHeight) {
			Title.current.style.position = 'sticky';
			Title.current.style.top = '0px';
			Title.current.style.left = '0px';
			Title.current.style.right = '0px';
			Title.current.style.zIndex = '10';

			SetTopH(69)
			SetIsTop(true);

			const DOMLIST = [];
			list.forEach((item, index) => {
				const height = GetHoeght(item.id);
				DOMLIST.push(height);
			})

				// 循环拿到的数据数组 判断当前的高度是否高亮
				DOMLIST.forEach((item, index) => {
					if (Height >= Number(item) - 120) {
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

	}, [Height, activeindex, text])


	const GetHoeght = (dom) => {
		let selectDom = document.querySelector(`[id="${dom}"`);
		let realTop = selectDom.offsetTop;
		realTop += selectDom.offsetParent.offsetTop;
		return realTop;
	}

	const onScroll = () => {
		let scroll = document.documentElement.scrollTop || document.body.scrollTop;
		if (scroll > 73) {
			setHighLight(1)
		}
		if (scroll < 73) {
			setHighLight(-1)
		}
	}


	const Scroll_title = (title, index) => {

		const TitleHeight = document.querySelector(`[id="exploreBanner"]`).clientHeight;
		const s = document.querySelector(`[id="root"]`).clientHeight;
		setText(title)
		const DOMLIST = [];
		list.forEach((item) => {
			const height = document.querySelector(`[id=${item.id}]`).clientHeight;
			DOMLIST.push(height);
		})
		const Darr = DOMLIST.splice(0, index);
		window.scrollTo({
			top: index === 0 ? 230 : (Number(TitleHeight) + Number(sun(Darr)) + 35),
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

	useEffect(()=>{
		window.addEventListener("scroll", function () {
			SetHeight(document.documentElement.scrollTop)
		})
		return () => {
			window.removeEventListener("scroll", function () {
				SetHeight(document.documentElement.scrollTop)
			})
		}
	}, [])

	return (
			<div className="APP_title Drawer" style={highLight < 0 ? { display: 'none' } : {}}>
				<div className='Drawer-text' onClick={() => { setClickValue(clickValue => !clickValue) }} >
					{
						list.map((item, index) => {
							return <>
								{index === activeindex ?  item.title: null}
							</>
						})
					}

					<span className={`Drawer_Icon ${clickValue ? "drawer-icon-up" : "drawer-icon-down"}`}></span>
				</div>
				<div className={`APP_title_top ${clickValue ? '' : 'isMobile_None'}`} ref={Title}>
					<menu className="Banner_position">
						{
								list && list.map((item, index) => {
									return (<a
											key={item.id}
											href={`#${item.id}`}
											data-click-event="cosmos_page_button_click"
											data-collect-params={`{"button_name": "${item.title}"} {"module_name" :"table_content"}`}
											className={`Banner_position_item ${index === activeindex ? "Banner_position_active" : ""}`} >
										<li onClick={() => { Scroll_title(item.title, index); }} >
											{item.title}
										</li>
									</a>)
								})
						}
					</menu>
				</div>
			</div >
	)


}
export default SlideBarPhone;
