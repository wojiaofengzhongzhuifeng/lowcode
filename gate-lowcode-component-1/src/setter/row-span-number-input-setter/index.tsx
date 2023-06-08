import * as React from "react";
import { Input } from "@alifd/next";
import {useEffect, useState} from "react";

interface RowSpanNumberInputSetterProps {
  // 当前值
  value: number | number[];
  // 默认值
  defaultValue: number | number[];
  // setter 唯一输出
  onChange: (val: number | number[]) => void;
  // AltStringSetter 特殊配置
  placeholder: string;
}



const RowSpanNumberInputSetter: React.FC<RowSpanNumberInputSetterProps> = ({
   onChange,
   value,
   defaultValue,
   placeholder,
}) => {
  const [valueState, setValueState] = useState(value)
  const [mounted, setMounted] = useState(false)

  useEffect(()=>{

    if(value && !mounted){
      setMounted(true)
      setValueState(value)
    }
  }, [value])

  useEffect(()=>{

    if(valueState !== undefined){
      console.log('valueState', valueState);
      // 尝试将用户输入的字符串转化为number[] or  number
      try{
        onChange((JSON.parse(valueState)))

      } catch (e) {

      }
    }
  }, [valueState])

  const renderValue = ()=>{

    if(valueState === undefined){return ''}

    if(typeof valueState === 'object'){

      return `[${valueState}]`
    } else {
      return valueState
    }
  }

  return (
    <div>
      <Input
        value={renderValue()}
        placeholder={placeholder || ''}
        onChange={(e) => {
          setValueState(e)
        }}
      />
    </div>
  );
};

RowSpanNumberInputSetter.displayName = 'RowSpanNumberInputSetter';

export default RowSpanNumberInputSetter;
