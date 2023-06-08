import React, {useEffect, useState} from "react";
import {Button, Input, Switch} from "@alifd/next";
import {LearnArticleListItemProps} from "../../components/LearnArticleList";

interface ListSetterProps {
  // 当前值
  value:  LearnArticleListItemProps[];
  // 默认值
  defaultValue: string;
  // setter 唯一输出
  onChange: (val: LearnArticleListItemProps[]) => void;
  // AltStringSetter 特殊配置
  placeholder: string;
}

const LearnArticleListSetter: React.FC<ListSetterProps> = ({
  onChange,
  value,
  defaultValue,
  placeholder,
})=>{
  const [list, setList] = useState<LearnArticleListItemProps[]>(value)
  const [mounted, setMounted] = useState(false)



  useEffect(()=>{

    if(value && !mounted){
      setMounted(true)
      setList(value)
    }
  }, [value])

  useEffect(()=>{
    if(list){
      onChange(list)
    }
  }, [list])





  const handleAddItem = ()=>{
    setList([...list, {Images: '', href: '', tit: '', color: '', subtitle: ''}])

  }

  const handleRemoveItem = (index1)=>{
    let newList = list.filter((item, index)=>{
      return index1 !== index;
    })
    setList(newList)
  }

  const handleChange = (key, newText, index1)=>{
    let newList = list.map((item, index2)=>{
      if(index2 === index1){
        return  {...item, [key]: newText}
      } else {
        return {...item}
      }
    })
    setList(newList)
  }

  return (
    <div>

      {
        list?.map((item, index1)=>{
          return (
            <div style={{ margin: '10px 0',boxShadow: '0px 1px 7px 0px rgba(0,0,0,0.75)', padding: "10px"}}  key={index1}>
              <div >
                封面图: <Input  key={index1} value={item.Images} onChange={(newText)=>{handleChange('Images', newText, index1)}}/>
              </div>

              <div >
                标签: <Input  key={index1} value={item.tit} onChange={(newText)=>{handleChange('tit', newText, index1)}}/>
              </div>


              <div >
                color: <Input  key={index1} value={item.color} onChange={(newText)=>{handleChange('color', newText, index1)}}/>
              </div>

              <div >
                标题: <Input  key={index1} value={item.subtitle} onChange={(newText)=>{handleChange('subtitle', newText, index1)}}/>
              </div>

              <div >
                链接: <Input  key={index1} value={item.href} onChange={(newText)=>{handleChange('href', newText, index1)}}/>
              </div>




              <Button onClick={()=>{handleRemoveItem(index1)}}  type="primary" text >删除 item </Button>

            </div>
          )
        })
      }

      <Button onClick={handleAddItem}>添加item</Button>
    </div>
  )
}

export default LearnArticleListSetter
