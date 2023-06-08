import * as React from "react";
import { Switch } from "@alifd/next";
import {useEffect} from "react";
import { event } from '@alilc/lowcode-engine';

const SETTER_NAME = 'SetterA';

interface BooleanSetterProps {
  // 当前值
  value: boolean;
  // 默认值
  defaultValue: boolean;
  // setter 唯一输出
  onChange: (val: boolean) => void;
  // AltStringSetter 特殊配置
  placeholder: boolean;
}



const BooleanSetter: React.FC<BooleanSetterProps> = ({
   onChange,
   value,
   defaultValue,
   placeholder,
  ...props
}) => {

  console.log('props BooleanSetter', BooleanSetter);

  const bindEvent = (...test)=>{
    console.log('bindEvnet', test);
  }

  useEffect(() => {
    if (value == undefined && defaultValue) {
      onChange(defaultValue);
    }
  }, []);

  useEffect(()=>{
    // 这里由于面板上会有多个 setter，使用 field.id 来标记 setter 名
    // this.emitEventName = `${SETTER_NAME}-${this.props.field.id}`;
    event.on(`common:${SETTER_NAME}.bindEvent`, bindEvent)
    return ()=>{
      event.off(`common:${SETTER_NAME}.bindEvent`, bindEvent)
    }
  }, [])

  useEffect(()=>{
    setInterval(()=>{
      console.log('setInterval', );
      onChange(!value)
    }, 2000)
  }, [])

  return (
    <Switch
      checked={value}
      placeholder={placeholder || false}
      onChange={(e) => {
        onChange(e)
      }}
      style={{border: '1px solid red'}}
    />
  );
};

BooleanSetter.displayName = 'BooleanSetter';

export default BooleanSetter;
