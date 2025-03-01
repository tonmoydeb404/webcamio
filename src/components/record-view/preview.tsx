import { useEffect, useRef } from "react";

type Props = { stream: MediaStream | null };

const VideoPreview = (props: Props) => {
  const { stream } = props;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  if (!stream) {
    return null;
  }

  return <video ref={videoRef} autoPlay disablePictureInPicture />;
};

export default VideoPreview;
