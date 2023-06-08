import React from "react";

import "./index.scss"

function MediaWithDescription({img, imgAlt, mediaRender, isMediaFullWidth, children}) {
  return (
      <div className={`media-with-des-wrapper ${isMediaFullWidth? "media-full-width" : "media-inset"}`}>
        <div className="media-with-des-media-content">
          {img ? <img src={img} alt={imgAlt} loading={"lazy"}/> : mediaRender ? mediaRender(): null}
        </div>
        <div className="media-with-des-content">
          {children}
        </div>
      </div>
  )
}

export default MediaWithDescription;