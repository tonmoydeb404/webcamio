import useRecordingTimer from "../../hooks/recording-timer";
import { StatusMessages } from "../../lib/react-media-recorder";
import IconBtn from "../icon-btn";

type Props = {
  state: StatusMessages;
};

const Timer = (props: Props) => {
  const { state } = props;
  const { time } = useRecordingTimer(state);

  if (state === "recording" || state === "paused" || state === "stopped") {
    return (
      <IconBtn className="cursor-text rounded-2xl">{formatTime(time)}</IconBtn>
    );
  }
  return null;
};

export default Timer;

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};
