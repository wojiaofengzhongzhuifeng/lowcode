import React from "react";




interface BannerProps{
  test: string
  children?: React.ReactNode

}

const DivContainer = ({test, children}: BannerProps) => {


  return (
      <div>
        {children}
      </div>
  );
};
export default DivContainer;
