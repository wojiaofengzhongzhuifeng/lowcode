import React, {useEffect, useState} from "react";
import {Button, Input, Switch} from "@alifd/next";
import {CaseItemProps} from "../../components/CardListType1";
import {initialNewsList, NewListitemProps} from "../../components/NewCard";
import {initialLearnArticleListProps} from "../../components/LearnArticleList";

interface ListSetterProps {
  // 当前值
  value:  NewListitemProps[];
  // 默认值
  defaultValue: string;
  // setter 唯一输出
  onChange: (val: NewListitemProps[]) => void;
  // AltStringSetter 特殊配置
  placeholder: string;
}

const NewCardListSetter: React.FC<ListSetterProps> = ({
  onChange,
  value,
  defaultValue,
  placeholder,
})=>{
  const [list, setList] = useState<NewListitemProps[]>(value)
  const [mounted, setMounted] = useState(false)



  useEffect(()=>{

    console.log('12333333', value);
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
    setList([...list, {...initialNewsList[0]}])

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
    console.log('newList', newList);
    setList(newList)
  }

  return (
    <div>

      {
        list?.map((item, index1)=>{
          return (
            <div style={{ margin: '10px 0',boxShadow: '0px 1px 7px 0px rgba(0,0,0,0.75)', padding: "10px"}}  key={index1}>

              <div >
                封面图片地址: <Input  key={index1} value={item.imgurl} onChange={(newText)=>{handleChange('imgurl', newText, index1)}}/>
              </div>

              <div >
                标题: <Input  key={index1} value={item.title} onChange={(newText)=>{handleChange('title', newText, index1)}}/>
              </div>

              <div >
                简介: <Input  key={index1} value={item.abstract} onChange={(newText)=>{handleChange('abstract', newText, index1)}}/>
              </div>

              <div >
                新闻来源: <Input  key={index1} value={item.source} onChange={(newText)=>{handleChange('source', newText, index1)}}/>
              </div>

              <div >
                发布时间: <Input  key={index1} value={item.release_time} onChange={(newText)=>{handleChange('release_time', newText, index1)}}/>
              </div>

              {/*<div >*/}
              {/*  brief: <Input  key={index1} value={item.brief} onChange={(newText)=>{handleChange('brief', newText, index1)}}/>*/}
              {/*</div>*/}



              {/*<div >*/}
              {/*  news_img: <Input  key={index1} value={item.news_img} onChange={(newText)=>{handleChange('news_img', newText, index1)}}/>*/}
              {/*</div>*/}

              <div >
                新闻链接地址: <Input  key={index1} value={item.news_url} onChange={(newText)=>{handleChange('news_url', newText, index1)}}/>
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

export default NewCardListSetter
