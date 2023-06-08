import React from "react";

import "./index.scss"

function SectionDescribe({describe, notMargin}) {
  return (
      <p className={`section-describe ${notMargin ? "not-margin" : ""}`}>
        {Array.isArray(describe) ? describe.map((item, index) => {
          return <span className="section-describe-item" key={index}>{item}</span>
        }) : describe}
      </p>
  )
}

export default SectionDescribe;