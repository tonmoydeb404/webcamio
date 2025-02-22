import { useCallback, useEffect, useState } from "react";
import { StatusMessages } from "../lib/react-media-recorder";

const useRecordingTimer = (status: StatusMessages) => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timerInterval: number | null = null;

    if (status === "recording") {
      setIsActive(true);
      timerInterval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (
      status === "paused" ||
      status === "stopped" ||
      status === "stopping"
    ) {
      setIsActive(false);
      if (timerInterval) clearInterval(timerInterval);
    } else {
      setIsActive(false);
      setTime(0);
      if (timerInterval) clearInterval(timerInterval);
    }

    return () => {
      if (timerInterval) clearInterval(timerInterval);
    };
  }, [status]);

  const resetTimer = useCallback(() => setTime(0), []);

  return { time, isActive, resetTimer };
};

export default useRecordingTimer;
