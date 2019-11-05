import * as React from "react";

const videoRatio = 9 / 16;

export default function({ src }) {
  const [iframeWidth, setIframeWidth] = React.useState(320);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);

  const handleResize = React.useCallback(() => {
    if (wrapperRef && wrapperRef.current) {
      setIframeWidth(wrapperRef.current.clientWidth);
    }
  }, [wrapperRef.current]);

  React.useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [wrapperRef.current]);

  return (
    <div ref={wrapperRef}>
      <iframe
        width={iframeWidth}
        height={iframeWidth * videoRatio}
        src={`${src}/embed`}
        allowFullScreen
        frameBorder="0"
      />
      <p>
        Video hosted on <a href={src}>egghead.io</a>.
      </p>
    </div>
  );
}
