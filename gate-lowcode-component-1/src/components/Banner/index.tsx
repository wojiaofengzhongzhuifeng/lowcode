import React from "react";
import "./index.scss";
import CenterContainer from "../Grid/CenterContainer";
import {BannerProps} from "./types";


const Banner = ({isPhone, newsList, BannerTitleList, title, subTitle, bannerImg}: BannerProps) => {
  const renderTitle = () => {
    if (BannerTitleList && BannerTitleList.length) {
      const list = () => {
        return BannerTitleList.map((item, index) => {
          return (
              <h1
                  className="Banner-One"
                  data-click-event="ftx_page_button_click"
                  data-collect-params={`{"button_name": ${item.title}}`}
                  key={`${item.title}:${index}`}
              >
                {item.title}
              </h1>
          );
        });
      };
      return <div className="Banner-button">{list()}</div>;
    }
  };

  return (
      <div className={`Banner ${window.g_lang === "ar" ? "Banner_ar" : ""}`}
           style={{backgroundImage: `url(${bannerImg})`}}
           id="exploreBanner"
      >
        <CenterContainer>
          {/* <Row span={[12, 0]} > */}
          <div className="banner-container">
            <time
                className="Banner-title"
                dateTime={
                  newsList && newsList.length > 0 ? newsList[0]?.release_time : ""
                }
            >
              {newsList && newsList.length > 0 && newsList[0]?.release_time}
            </time>
            {/* </Row> */}
            {renderTitle()}

            <h1 className="Banner-content" dangerouslySetInnerHTML={{__html: title}} />

            <p className="Banner-footer"  dangerouslySetInnerHTML={{__html: subTitle}} />
          </div>
        </CenterContainer>
      </div>
  );
};
export default Banner;
