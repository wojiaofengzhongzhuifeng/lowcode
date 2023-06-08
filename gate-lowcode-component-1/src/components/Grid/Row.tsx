import React, {useEffect, useState, useRef} from 'react'
import classNames from "classnames";
// import {isArray, isNumber} from "../../utils";
// import {GridType, useQueryCurrentDeviceOfGridType} from "../../Hooks";




export type GridType = 'span' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
export const useQueryCurrentDeviceOfGridType = (callback: React.Dispatch<React.SetStateAction<GridType>>) => {
  //  自定义hooks  根据屏幕宽度实时判断当前是否是H5的宽度，配合栅格达到不刷新即可自适应
  const savedCallback = useRef<React.Dispatch<React.SetStateAction<GridType>>>();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    console.log(1)
    function getWidth() {
      const w = window.innerWidth
      if (savedCallback.current) {

        if (w >= 1440) {
          savedCallback.current('xl')
        } else if (w<1440 && w>=1200){
          savedCallback.current('lg')
        } else if (w<1200 && w >= 992) {
          savedCallback.current('md')
        } else if (w<992 && w >= 415) {
          savedCallback.current('sm')
        } else if (w<415) {
          savedCallback.current('xs')
        }
      }
    }
    getWidth()
    window.addEventListener('resize', getWidth)
    return () => window.removeEventListener('resize', getWidth)
  }, []);
};

export const isArray: (obj:any) => boolean = (obj) => {
  return Array.isArray(obj)
}
export const isNumber: (obj:any) => boolean = (obj) => {
  return Number.isFinite(obj)
}

export const initialRowProps = {

  xxl: [1, 1],
  xl: [7.8, 2.2],
  lg: [7.8, 2.2],
  md: [7.8, 2.2],
  sm: 1,
  xs: 1,
  span: [7.8, 2.2],

  xxlGutter: '48px',
  xlGutter: '24px',
  lgGutter: '12px',
  mdGutter: '12px',
  smGutter: '12px',
  xsGutter: '6px',
  gutter: '12px'

}

export interface RowProps {
  xxl?: number | number[]
  xl?: number | number[]
  lg?: number | number[]
  md?: number | number[]
  sm?: number | number[]
  xs?: number | number[]
  span?: number | number[]
  xxlGutter?: string
  xlGutter?: string
  lgGutter?: string
  mdGutter?: string
  smGutter?: string
  xsGutter?: string
  gutter?: string
  children: React.ReactNode
}

export interface RowStyles {
  gridTemplateColumns?: string
  gridGap?: string
}


const Row: React.FC<RowProps> = props => {
  const { children, xxl, xl, lg, md, sm, xs, span, xxlGutter, xlGutter, lgGutter, mdGutter, smGutter, xsGutter, gutter } = props

  console.log('props', props);
  const [currGridType, setCurrGridType] = useState<GridType>('span')
  const [rowStyle, setRowStyle] = useState({})

  useQueryCurrentDeviceOfGridType(setCurrGridType) // 动态获取当前容器是属于栅格的哪个大小

  const classes = classNames(`flex--grid--main`, {
    [`col-${span}`]: isNumber(span),
    [`col-xxl-${xxl}`]: isNumber(xxl),
    [`col-xl-${xl}`]: isNumber(xl),
    [`col-lg-${lg}`]: isNumber(lg),
    [`col-md-${md}`]: isNumber(md),
    [`col-sm-${sm}`]: isNumber(sm),
    [`col-xs-${xs}`]: isNumber(xs),
  })

  useEffect(()=>{
    const gridType = {
      span: span,
      xxl: xxl,
      xl: xl,
      lg: lg,
      md: md,
      sm: sm,
      xs: xs,
      xxlGutter: xxlGutter,
      xlGutter: xlGutter,
      lgGutter: lgGutter,
      mdGutter: mdGutter,
      smGutter: smGutter,
      xsGutter: xsGutter,
      gutter: gutter,
      spanGutter: gutter
    }


    let styles:RowStyles = {}


    console.log('currGridType', currGridType);
    if (currGridType && gridType[currGridType]) {
      const gridTypeValue = gridType[currGridType] // 获取当前栅格大小的配置
      const gridTypeGatterValue = gridType[`${currGridType}Gutter`]
      if (gridTypeGatterValue) {
          styles['gridGap'] = gridTypeGatterValue
      }
      if (gridTypeValue) { // 如果数据存在 并且是数组的话
        if (isArray(gridTypeValue)) {
          const gridTypeArrValue = gridTypeValue as number[] // 断言该数据是数组类型
          //设置栅格
          styles['gridTemplateColumns'] = `${gridTypeArrValue[0]}fr ${gridTypeArrValue[1]}fr`

        } else {
          // 当前栅格大小的配置数据存在，但是不是数组的情况下 清空栅格的行内样式，改用col-xx-xx的配置
          // setRowStyle({})
          delete styles['gridTemplateColumns']
        }
      }
    } else {
      // 如果只配置了span 而且是数组的话
      if (gridType['span'] && isArray(gridType['span'])) {
        const gridTypeArrValue = gridType['span'] as number[]
        let gridTypeArrValueStr: string = ''
        // styles['gridTemplateColumns'] = `${gridTypeArrValue[0]}fr ${gridTypeArrValue[1]}fr`
        gridTypeArrValue.forEach((item) => {
          gridTypeArrValueStr += `${item}fr `
        })
        styles['gridTemplateColumns'] = gridTypeArrValueStr
      }
      if (gridType['gutter']) {
        styles['gridGap'] = gridType['gutter']
      }
    }
    setRowStyle(styles)
  }, [currGridType, xxl, xl, lg, md, sm, xs, span, xxlGutter, xlGutter, lgGutter, mdGutter, smGutter, xsGutter, gutter])

  return <div className={classes} style={rowStyle}>{children}</div>
}

export default Row
