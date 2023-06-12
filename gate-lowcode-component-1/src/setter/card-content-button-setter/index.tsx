import React, {useEffect, useState} from "react";
import {Button, Input, Switch} from "@alifd/next";
import {CardContentButtonProps, CardContentItemProps} from "../../components/CardContentButton/types";

interface ListSetterProps {
  value:  CardContentItemProps[];
  // 默认值
  defaultValue: string;
  // setter 唯一输出
  onChange: (val: CardContentItemProps[]) => void;
  // AltStringSetter 特殊配置
  placeholder: string;
}

const CardContentButtonSetter: React.FC<ListSetterProps> = ({
  onChange,
  value,
  defaultValue,
  placeholder,
})=>{
  const [list, setList] = useState<CardContentItemProps[]>(value)
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
    setList([...list, {title: '', description: '', button: []}])
  }

  const handleRemoveItem = (index1)=>{
    let newList = list.filter((item, index)=>{
      return index1 !== index;
    })
    setList(newList)
  }

  const handleChange = (key, newText, index1, index2?)=>{
    console.log('index2', index2);
    let newList = list.map((item, index11)=>{
      if(index11 === index1){

        let matchCardContentItem = list[index1]
        console.log('matchCardContentItem', matchCardContentItem);

        if(index2 === undefined){
          return  {...item, [key]: newText}
        } else {
          let newButton = matchCardContentItem.button.map((buttonItem, index22)=>{
            if(index22 === index2){
              return {...buttonItem, [key]: newText}
            } else {
              return {...buttonItem}
            }
          })
          console.log('newButton', newButton);
          return {...item, button: [...newButton]}
        }




      } else {
        return {...item}
      }
    })
    setList(newList)
  }

  const handleAddButtonItem = (index1)=>{
    let newList = list.map((cardContentItem, index)=>{
      if(index1 === index){
        return {...cardContentItem, button: [...cardContentItem.button, {buttonName: '', url: ''}]}
      } else {
        return {...cardContentItem}
      }
    })
    setList(newList)
  }
  const handleRemoveButton = (index1, index2)=>{
    const newList = list.map((cardContentItem, index11)=>{
      if(index1 === index11){
        let newButtonList = cardContentItem.button.filter((buttonItem, index22)=>{
          return index2 !== index22
        })
        return {...cardContentItem, button: newButtonList}
      } else{
        return {...cardContentItem}
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
                标题: <Input  key={index1} value={item.title} onChange={(newText)=>{handleChange('title', newText, index1)}}/>
              </div>

              <div >
                描述: <Input  key={index1} value={item.description} onChange={(newText)=>{handleChange('description', newText, index1)}}/>
              </div>


              <div>
                按钮属性: <Button  type="primary" text onClick={()=>{handleAddButtonItem(index1)}}>添加按钮 item</Button>

                <div>
                  {item.button.map((buttonItem, index2)=>{
                    const {buttonName, url} = buttonItem

                    return (
                      <div style={{ margin: '10px 0',boxShadow: '0px 1px 7px 0px rgba(0,0,0,0.75)', padding: "10px"}}>
                        <p>
                          按钮名称： <Input  key={`${index1}-${index2}`} value={buttonName} onChange={(newText)=>{handleChange('buttonName', newText, index1, index2)}}/>
                        </p>

                        <p>
                          按钮url： <Input  key={`${index1}-${index2}`} value={url} onChange={(newText)=>{handleChange('url', newText, index1, index2)}}/>
                        </p>

                        <Button type="primary" text onClick={()=>{handleRemoveButton(index1, index2)}}>删除按钮</Button>


                      </div>
                    )
                  })}
                </div>
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

export default CardContentButtonSetter
