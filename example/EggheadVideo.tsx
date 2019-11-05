import * as React from "react"

const videoRatio = 9 / 16

export default function ({ src }) {
  const [iframeWidth, setIframeWidth] = React.useState(0)
  const iframeRef = React.useRef<HTMLIFrameElement | null>(null)

  const handleResize = React.useCallback(
    () => {
      if (iframeRef && iframeRef.current) {
        setIframeWidth(iframeRef.current.clientWidth)
      }
    },
    [iframeRef.current]
  )

  React.useLayoutEffect(() => {
    handleResize()
    window.addEventListener(`resize`, handleResize)

    return () => {
      window.removeEventListener(`resize`, handleResize)
    }
  }, [iframeRef.current])

  return (
    <>
      <iframe
        ref={iframeRef}
        width={736}
        height={iframeWidth * videoRatio}
        src={`${src}/embed`}
        allowFullScreen
      />
      <p>
        Video hosted on <a href={src}>egghead.io</a>.
      </p>
    </>
  )
}
