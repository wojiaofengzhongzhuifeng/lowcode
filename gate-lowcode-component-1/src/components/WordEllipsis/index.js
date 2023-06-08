import React, {useEffect, useState, useRef} from "react";
import "./index.scss"

function WordEllipsis({text, className}) {
  const ref = useRef(null);
  const [lineCount, setLineCount] = useState(2);
  const [padding, setPadding] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const height = ref.current.clientHeight;
    const lineHeight = parseInt(window.getComputedStyle(ref.current).lineHeight);
    const boxLineCount = Math.floor(height / lineHeight);
    const BoxPadding = height - boxLineCount * lineHeight;
    setLineCount(boxLineCount);
    setPadding(padding > 0 ? padding : BoxPadding);
  }, [ref.current])

  return (
    <p className={`${className} word-ellipsis`} ref={ref} style={{
      marginBottom: `${padding}px`,
      WebkitLineClamp: lineCount,
    }}>
      {text}
    </p>
  );
}

export default WordEllipsis;