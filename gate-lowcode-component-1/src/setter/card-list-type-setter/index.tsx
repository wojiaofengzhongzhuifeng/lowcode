import React, {useEffect, useState} from "react";
import {Button, Input, Switch} from "@alifd/next";
import {CaseItemProps} from "../../components/CardListType1";

interface ListSetterProps {
  // 当前值
  value:  any[];
  // 默认值
  defaultValue: string;
  // setter 唯一输出
  onChange: (val: any[]) => void;
  // AltStringSetter 特殊配置
  placeholder: string;
}

const CardListTypeSetter: React.FC<ListSetterProps> = ({
  onChange,
  value,
  defaultValue,
  placeholder,
})=>{
  const [list, setList] = useState<CaseItemProps[]>(value)
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
    setList([...list, {img: '', title: '', content: '', imgAlt: '',href: '',buttonName: '',linkType: ''}])

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
                img: <Input  key={index1} value={item.img} onChange={(newText)=>{handleChange('img', newText, index1)}}/>
              </div>

              <div >
                title: <Input  key={index1} value={item.title} onChange={(newText)=>{handleChange('title', newText, index1)}}/>
              </div>

              <div >
                content: <Input  key={index1} value={item.content} onChange={(newText)=>{handleChange('content', newText, index1)}}/>
              </div>

              <div >
                imgAlt: <Input  key={index1} value={item.imgAlt} onChange={(newText)=>{handleChange('imgAlt', newText, index1)}}/>
              </div>

              <div >
                href: <Input  key={index1} value={item.href} onChange={(newText)=>{handleChange('href', newText, index1)}}/>
              </div>

              <div >
                buttonName: <Input  key={index1} value={item.buttonName} onChange={(newText)=>{handleChange('buttonName', newText, index1)}}/>
              </div>

              <div >
                linkType: <Input  key={index1} value={item.buttonName} onChange={(newText)=>{handleChange('linkType', newText, index1)}}/>
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

export default CardListTypeSetter
