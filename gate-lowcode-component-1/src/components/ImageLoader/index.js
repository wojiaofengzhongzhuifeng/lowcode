import React, {useEffect, useState} from 'react';
import {useQueryCurrentThemeIsDark} from "../../common-hooks"
import errorSrc from './imageLoadingError.webp';
import errorDarkSrc from './imageLoadingErrorDark.webp';

function ImageLoader({ src, alt }) {
  const [isError, setIsError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);
  const isDark = useQueryCurrentThemeIsDark();


  console.log('src ImageLoader', src);

  useEffect(()=>{
    setImageSrc(src)
  }, [src])

  const handleImageLoad = () => {
    setIsError(false);
  };

  const handleImageError = () => {
    setIsError(true);
    setImageSrc(errorSrc);
  };

  return (
      <>
        <img src={imageSrc} alt={alt} onLoad={handleImageLoad} onError={handleImageError} loading="lazy"/>
        {isError && <img src={isDark ? errorDarkSrc :errorSrc} alt={alt} loading="lazy"/>}
      </>
  );
}

export default ImageLoader;
