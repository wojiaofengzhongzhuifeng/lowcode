import React, {useEffect, useState} from "react";
import {Button, Input} from "@alifd/next";
import {CardPictureContentItemProps} from "../../components/CardPictureContent/types";

interface ListSetterProps {
  // todo 修改 CardPictureContentItemProps
  value:  CardPictureContentItemProps[];
  // 默认值
  defaultValue: string;
  // setter 唯一输出
  // todo 修改 CardPictureContentItemProps
  onChange: (val: CardPictureContentItemProps[]) => void;
  // AltStringSetter 特殊配置
  placeholder: string;
}
// todo 修改 CardPictureContentSetter
const CardPictureContentSetter: React.FC<ListSetterProps> = ({
  onChange,
  value,
  defaultValue,
  placeholder,
})=>{
  // todo 修改 CardPictureContentItemProps
  const [list, setList] = useState<CardPictureContentItemProps[]>(value)
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




  // todo 修改 {Images: '', ImagesAlt: '', title: '', listA: [], listB: [], button: [], linkText: [], ImgPosition: ''}
  const handleAddItem = (options)=>{
    const {index1, key1, newItem} = options
    if(index1 === undefined){
      setList([...list, {...newItem}])
    } else {
      let newList = list.map((item, index)=>{
        if(index1 === index){
          return {...item, [key1]: [...item[key1], {...newItem}]}
        } else {
          return {...item}
        }
      })
      setList(newList)
    }
  }

  const handleRemoveItem = (options)=>{
    const {index1, index2, key2} = options

    if(index2 === undefined){
      let newList = list.filter((item, index)=>{
        return index1 !== index;
      })
      setList(newList)
    } else {
      const newList = list.map((cardContentItem, index11)=>{
        if(index1 === index11){
          let newButtonList = cardContentItem[key2].filter((buttonItem, index22)=>{
            return index2 !== index22
          })
          return {...cardContentItem, [key2]: newButtonList}
        } else{
          return {...cardContentItem}
        }
      })
      setList(newList)
    }


  }

  const handleChange = (options)=>{

    const {key, newText, index1, index2,  key2} = options
    let newList = list.map((item, index11)=>{
      if(index11 === index1){

        let matchCardContentItem = list[index1]

        if(index2 === undefined){
          return  {...item, [key]: newText}
        } else {
          let newButton = matchCardContentItem[key2].map((buttonItem, index22)=>{
            if(index22 === index2){
              return {...buttonItem, [key]: newText}
            } else {
              return {...buttonItem}
            }
          })
          console.log('newButton', newButton);
          return {...item, [key2]: [...newButton]}
        }
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
                图片: <Input  key={index1} value={item.Images} onChange={(newText)=>{handleChange({key: 'Images', newText, index1})}}/>
              </div>

              <div >
                图片alt: <Input  key={index1} value={item.ImagesAlt} onChange={(newText)=>{handleChange({key: 'ImagesAlt', newText, index1})}}/>
              </div>


              <div >
                图片标题: <Input  key={index1} value={item.title} onChange={(newText)=>{handleChange({key: 'title', newText, index1})}}/>
              </div>

              <div>
                A 列属性：
                <Button
                  type="primary"
                  text
                  onClick={()=>{handleAddItem({index1, key1: 'listA', newItem: {  icon: '', iconType: '', description: ''}})}}
                >
                  添加 item
                </Button>
                <div>
                  {
                    item.listA.map((listItem, index2)=>{
                      const {icon,iconType, description} = listItem
                      return (
                        <div style={{ margin: '10px 0',boxShadow: '0px 1px 7px 0px rgba(0,0,0,0.75)', padding: "10px"}}>
                          <p>
                            自定义 icon url： <Input  key={`${index1}-${index2}`} value={icon} onChange={(newText)=>{handleChange({key: 'icon', newText, index1, index2, key2: 'listA'})}}/>
                          </p>
                          <p>
                            icon 类型： <Input  key={`${index1}-${index2}`} value={iconType} placeholder='填入 yes or no ' onChange={(newText)=>{handleChange({key: 'iconType', newText, index1, index2, key2: 'listA'})}}/>
                          </p>
                          <p>
                            描述： <Input  key={`${index1}-${index2}`} value={description} onChange={(newText)=>{handleChange({key: 'description', newText, index1, index2, key2: 'listA'})}}/>
                          </p>
                          <Button type="primary" text onClick={()=>{handleRemoveItem({index1, index2, key2: 'listA'})}}>删除本列</Button>
                        </div>
                      )
                    })
                  }
                </div>
              </div>

              <div>
                B 列属性：
                <Button
                  type="primary"
                  text
                  onClick={()=>{handleAddItem({index1, key1: 'listB', newItem: {  icon: '', iconType: '', description: ''}})}}
                >
                  添加列A item
                </Button>
                <div>
                  {
                    item.listB.map((listItem, index2)=>{
                      const {icon,iconType, description} = listItem
                      return (
                        <div style={{ margin: '10px 0',boxShadow: '0px 1px 7px 0px rgba(0,0,0,0.75)', padding: "10px"}}>
                          <p>
                            自定义 icon url： <Input  key={`${index1}-${index2}`} value={icon} onChange={(newText)=>{handleChange({key: 'icon', newText, index1, index2, key2: 'listB'})}}/>
                          </p>
                          <p>
                            icon 类型： <Input  key={`${index1}-${index2}`} value={iconType} placeholder='填入 yes or no ' onChange={(newText)=>{handleChange({key: 'iconType', newText, index1, index2, key2: 'listB'})}}/>
                          </p>
                          <p>
                            描述： <Input  key={`${index1}-${index2}`} value={description} onChange={(newText)=>{handleChange({key: 'description', newText, index1, index2, key2: 'listB'})}}/>
                          </p>
                          <Button type="primary" text onClick={()=>{handleRemoveItem({index1, index2, key2: 'listB'})}}>删除本列</Button>
                        </div>
                      )
                    })
                  }
                </div>
              </div>


              <div>
                按钮属性：
                <Button
                  type="primary"
                  text
                  onClick={()=>{handleAddItem({index1, key1: 'button', newItem: {  url: '', buttonText: ''}})}}
                >
                  添加 item
                </Button>
                <div>
                  {
                    item.button.map((listItem, index2)=>{
                      const {url, buttonText} = listItem
                      return (
                        <div style={{ margin: '10px 0',boxShadow: '0px 1px 7px 0px rgba(0,0,0,0.75)', padding: "10px"}}>
                          <p>
                            按钮链接： <Input  key={`${index1}-${index2}`} value={url} onChange={(newText)=>{handleChange({key: 'url', newText, index1, index2, key2: 'button'})}}/>
                          </p>
                          <p>
                            按钮文字： <Input  key={`${index1}-${index2}`} value={buttonText}  onChange={(newText)=>{handleChange({key: 'buttonText', newText, index1, index2, key2: 'button'})}}/>
                          </p>
                          <Button type="primary" text onClick={()=>{handleRemoveItem({index1, index2, key2: 'button'})}}>删除本列</Button>
                        </div>
                      )
                    })
                  }
                </div>
              </div>


              <div>
                文字属性：
                <Button
                  type="primary"
                  text
                  onClick={()=>{handleAddItem({index1, key1: 'linkText', newItem: {  text: '', linkName: '', url: ''}})}}
                >
                  添加 item
                </Button>
                <div>
                  {
                    item.linkText.map((listItem, index2)=>{
                      const {text, linkName, url} = listItem
                      return (
                        <div style={{ margin: '10px 0',boxShadow: '0px 1px 7px 0px rgba(0,0,0,0.75)', padding: "10px"}}>
                          <p>
                            纯文本： <Input  key={`${index1}-${index2}`} value={text} onChange={(newText)=>{handleChange({key: 'text', newText, index1, index2, key2: 'linkText'})}}/>
                          </p>
                          <p>
                            按钮文本： <Input  key={`${index1}-${index2}`} value={linkName}  onChange={(newText)=>{handleChange({key: 'linkName', newText, index1, index2, key2: 'linkText'})}}/>
                          </p>
                          <p>
                            按钮链接： <Input  key={`${index1}-${index2}`} value={url}  onChange={(newText)=>{handleChange({key: 'url', newText, index1, index2, key2: 'linkText'})}}/>
                          </p>
                          <Button type="primary" text onClick={()=>{handleRemoveItem({index1, index2, key2: 'linkText'})}}>删除本列</Button>
                        </div>
                      )
                    })
                  }
                </div>
              </div>



              <div >
                图片位置: <Input  key={index1} value={item.ImgPosition} placeholder='Right or Left' onChange={(newText)=>{handleChange({key: 'ImgPosition', newText, index1})}}/>
              </div>


              <Button onClick={()=>{handleRemoveItem({index1})}}  type="primary" text >删除 item </Button>

            </div>
          )
        })
      }



      <Button onClick={()=>{handleAddItem({newItem: {Images: '', ImagesAlt: '', title: '', listA: [], listB: [], button: [], linkText: [], ImgPosition: ''}})}}>添加item</Button>
    </div>
  )
}

export default CardPictureContentSetter
