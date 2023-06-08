import React from "react";

import "./index.scss";
import MediaWithDescription from "../MediaWithDescription";
import ChartRender from "../ChartRender/index.js";
import {ChartCardProps} from "./types";


function ChartCard({data}: ChartCardProps) {
  return (
      <div className="chart-card-wrapper">
        {data && data.length > 0 && data.map((item, index) => {
          return (
              <div className="chart-card-item" key={index}>
                <MediaWithDescription mediaRender={() => <ChartRender options={item?.options || {}}/>}>
                  <div className="chart-card-item-content">
                    <h3 className="chart-card-item-content-title">{item.title}</h3>
                    <p className="chart-card-item-content-describe">
                      <span className="chart-card-item-content-describe-item" dangerouslySetInnerHTML={{__html: item.describe}}/>
                    </p>

                    <a className='chart-card-item-content-button' href={item.href} target='_blank'
                       data-click-event="btc_halving_button_click"
                       data-collect-params={`{"button_name": "${item.buttonName}"}`}>{item.buttonName}</a>
                  </div>
                </MediaWithDescription>
              </div>
          )
        })}
      </div>
  )
}

export default ChartCard
