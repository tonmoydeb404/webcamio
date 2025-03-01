import { useRef } from "react";

type Props = { blob: string | undefined };

const VideoOutput = (props: Props) => {
  const { blob } = props;
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!blob) {
    return null;
  }

  return (
    <video
      ref={videoRef}
      src={blob}
      autoPlay
      controls
      disablePictureInPicture
    />
  );
};

export default VideoOutput;
