import React, {useEffect, useRef} from "react";
import * as echarts from 'echarts';


function ChartRender({ options }) {

  const chartRefs = useRef(null);
  let domInstance = null;

  useEffect(() => {
    if (Object.keys(options).length !== 0 && chartRefs.current !== null) {
      domInstance = echarts.init(chartRefs.current);
      domInstance.clear();
      domInstance.setOption(options);
    }
    return () => {
      domInstance && domInstance.dispose();
    };
  }, [options]);

  useEffect(()=>{
    window.addEventListener('resize',()=>{
      domInstance && domInstance.resize()
    })
    return () => {
      window.removeEventListener('resize', ()=>{
        domInstance && domInstance.resize()
      })
    }
  }, [])

  return (
      <div
          className="chart-box"
          ref={chartRefs}
          style={{ width: "100%", height: "200px"}}
      >
      </div>
  );
}

export default ChartRender