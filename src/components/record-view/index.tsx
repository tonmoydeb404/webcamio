import { useEffect, useState } from "react";
import { FaPause, FaPlay, FaRotate, FaStop } from "react-icons/fa6";
import { LuMic, LuMicOff } from "react-icons/lu";

import { getRatio } from "../../constants/ratio";
import { useReactMediaRecorder } from "../../lib/react-media-recorder";
import Button from "../button";
import IconBtn from "../icon-btn";
import SelectQuality from "../select-quality";
import SelectRatio from "../select-ratio";
import Export from "./export";
import VideoOutput from "./output";
import VideoPreview from "./preview";
import Timer from "./timer";

const RecordView = () => {
  const [layout, setLayout] = useState(720);
  const [ratio, setRatio] = useState(9 / 16);

  const {
    status,
    startRecording,
    pauseRecording,
    muteAudio,
    unMuteAudio,
    isAudioMuted,
    resumeRecording,
    stopRecording,
    mediaBlobUrl,
    previewStream,
    resetMediaStream,
  } = useReactMediaRecorder({
    video: { aspectRatio: ratio, width: layout },
    askPermissionOnMount: true,
    mediaRecorderOptions: {},
  });

  useEffect(() => {
    console.log({ layout, ratio });
    resetMediaStream();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layout, ratio]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-3 py-10">
      <div className="flex items-center justify-center gap-3 mb-10">
        {status === "idle" && (
          <Button
            className="bg-purple-500 hover:bg-purple-600 text-white"
            onClick={startRecording}
          >
            <FaPlay />
            Record
          </Button>
        )}

        {status === "recording" && (
          <Button
            className="bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-900"
            onClick={pauseRecording}
          >
            <FaPause />
            Pause
          </Button>
        )}

        {status === "paused" && (
          <Button
            className="bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-900"
            onClick={resumeRecording}
          >
            <FaPlay />
            Resume
          </Button>
        )}

        {(status === "paused" || status === "recording") && (
          <Button
            className="bg-red-500 hover:bg-red-600 text-white"
            onClick={stopRecording}
          >
            <FaStop />
            Stop
          </Button>
        )}

        {status === "stopped" && (
          <Button
            className="bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-900"
            onClick={resetMediaStream}
          >
            <FaRotate />
            Clear
          </Button>
        )}

        <Export videoUrl={mediaBlobUrl} />
      </div>

      <div
        className="w-full bg-black mb-16 rounded-xl overflow-hidden [&_video]:w-full [&_video]:h-full [&_video]:object-fill"
        style={{ aspectRatio: ratio, maxWidth: getRatio(ratio)?.width }}
      >
        {mediaBlobUrl ? (
          <VideoOutput blob={mediaBlobUrl} />
        ) : (
          <VideoPreview stream={previewStream} />
        )}
      </div>

      <div className="flex items-center justify-center gap-3">
        <Timer state={status} />

        {!isAudioMuted && (
          <IconBtn onClick={muteAudio}>
            <LuMic size={22} />
          </IconBtn>
        )}

        {isAudioMuted && (
          <IconBtn
            onClick={unMuteAudio}
            className="bg-red-100 text-red-600 hover:bg-red-200 hover:text-red-600"
          >
            <LuMicOff size={22} />
          </IconBtn>
        )}
        {status === "idle" && <SelectRatio value={ratio} setValue={setRatio} />}
        {status === "idle" && (
          <SelectQuality value={layout} setValue={setLayout} />
        )}
      </div>
    </div>
  );
};

export default RecordView;
