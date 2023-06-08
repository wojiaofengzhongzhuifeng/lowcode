import React, {useEffect, useState} from "react";
import {Button, Input, Switch, Radio} from "@alifd/next";
import {CompareModuleListItemProps, CompareModuleProps} from "../../components/CompareModule";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const RadioGroup = Radio.Group;



// fake data generator
const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `item ${k}`
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250,
  position: "relative"
});

const queryAttr = "data-rbd-drag-handle-draggable-id";

const App = (props) => {
  const [placeholderProps, setPlaceholderProps] = useState({});
  const [items, setItems] = useState(getItems(3));

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    setPlaceholderProps({});
    setItems((items) =>
      reorder(items, result.source.index, result.destination.index)
    );
  };

  const onDragUpdate = (update) => {
    if (!update.destination) {
      return;
    }
    const draggableId = update.draggableId;
    const destinationIndex = update.destination.index;

    const domQuery = `[${queryAttr}='${draggableId}']`;
    const draggedDOM = document.querySelector(domQuery);

    if (!draggedDOM) {
      return;
    }
    const { clientHeight, clientWidth } = draggedDOM;

    const clientY =
      parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
      [...draggedDOM.parentNode.children]
        .slice(0, destinationIndex)
        .reduce((total, curr) => {
          const style = curr.currentStyle || window.getComputedStyle(curr);
          const marginBottom = parseFloat(style.marginBottom);
          return total + curr.clientHeight + marginBottom;
        }, 0);

    setPlaceholderProps({
      clientHeight,
      clientWidth,
      clientY,
      clientX: parseFloat(
        window.getComputedStyle(draggedDOM.parentNode).paddingLeft
      )
    });
  };

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  return (
    <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
            {/* <CustomPlaceholder snapshot={snapshot} /> */}
            <div
              style={{
                position: "absolute",
                top: placeholderProps.clientY,
                left: placeholderProps.clientX,
                height: placeholderProps.clientHeight,
                background: "tomato",
                width: placeholderProps.clientWidth
              }}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};


interface CompareItemProps {
  // 当前值
  value:  CompareModuleListItemProps[][];
  // 默认值
  defaultValue: [];
  // setter 唯一输出
  onChange: (val: CompareModuleListItemProps[][]) => void;
  // AltStringSetter 特殊配置
  placeholder: string;
}

const CompareItemSetter: React.FC<CompareItemProps> = ({
  onChange,
  value,
  defaultValue,
  placeholder,
  ...props
})=>{
  console.log('props', props.itemSetter.props.itemSetter.props.config.items[1].setter.initialValue);
  console.log('component value', value, defaultValue);

  const [initialValue, setInitialValue] = useState('')

  const [compareItemList, setCompareItemList] = useState<CompareModuleListItemProps[]>()
  const [mounted, setMounted] = useState(false)



  // const handleAddFAQItem = ()=>{
  //   setCompareItemList([...compareItemList, {icon: '', iconType: "yes", context: ""}])
  //
  // }

  useEffect(()=>{
    try{
      console.log('value', );
      const value = props.itemSetter.props.itemSetter.props.config.items[1].setter.initialValue
      setInitialValue(value)
    }catch (e){
      console.log(e);
      setInitialValue('no')

    }
  }, [])

  useEffect(()=>{
    if(value && !mounted){
      setMounted(true)
      console.log('fdfdfdf', value);
      setCompareItemList(value[0])
    }
  }, [value])

  useEffect(()=>{



    if(compareItemList){
      console.log('compareItemList onchange', compareItemList);
      onChange([compareItemList])
    }

  }, [compareItemList])

  const handleChangeIconUrl = (newIconUrl: string, index1: number)=>{
    let newComapreItemList = compareItemList.map((compareItem, index2)=>{
      if(index2 === index1){
        return  {...compareItem, icon: newIconUrl}
      } else {
        return {...compareItem}
      }
    })
    setCompareItemList(newComapreItemList)
  }

  const handleChangeIconType = (newIconType: string, index1: number)=>{
    let newComapreItemList = compareItemList.map((compareItem, index2)=>{
      if(index2 === index1){
        return  {...compareItem, iconType: newIconType}
      } else {
        return {...compareItem}
      }
    })
    setCompareItemList(newComapreItemList)
  }

  const handleChangeContext = (newContext: string, index1: number)=>{
    let newComapreItemList = compareItemList.map((compareItem, index2)=>{
      if(index2 === index1){
        return  {...compareItem, context: newContext}
      } else {
        return {...compareItem}
      }
    })
    setCompareItemList(newComapreItemList)
  }

  const handleAddItem = ()=>{

    setCompareItemList([...compareItemList, {icon: "", iconType: initialValue, context: ""}])
  }

  const handleRemoveItem = (index1)=>{
    let newCompareItemList = compareItemList.filter((item, index2)=>{
      if(index1 === index2){
        return false
      } else {
        return true
      }
    })
    setCompareItemList(newCompareItemList)
  }

  return (
    <div>
      {/*<App />*/}
      {
        compareItemList?.map((compareItem, index1)=>{
          return (
            <div style={{ margin: '10px 0',boxShadow: '0px 1px 7px 0px rgba(0,0,0,0.75)', padding: "10px"}} key={index1}>
              <div >
                icon: <Input
                key={index1}
                value={compareItem.icon}
                onChange={(newTitle)=>{handleChangeIconUrl(newTitle, index1)}}
              />
              </div>

              <div >
                iconType:

                <RadioGroup
                  dataSource={
                    [
                      {
                        value: "yes",
                        label: "yes",
                      },
                      {
                        value: "no",
                        label: "no"
                      },

                    ]
                  }
                  value={compareItem.iconType}
                  onChange={(newIconType)=>{handleChangeIconType(newIconType, index1)}}

                />

              </div>

              <div >
                context: <Input
                key={index1}
                value={compareItem.context}
                onChange={(newContext)=>{handleChangeContext(newContext, index1)}}
              />
              </div>

              <Button onClick={()=>{handleRemoveItem(index1)}}  type="primary" text >删除本 item </Button>
            </div>
          )
        })
      }

      <Button onClick={handleAddItem}>添加 item </Button>
    </div>
  )
}

export default CompareItemSetter
