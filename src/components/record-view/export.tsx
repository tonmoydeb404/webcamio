// import wasmURL from "@ffmpeg/core/wasm?url";
// import coreURL from "@ffmpeg/core?url";
// import { FFmpeg } from "@ffmpeg/ffmpeg";
// import { fetchFile, toBlobURL } from "@ffmpeg/util";
// import { useEffect, useRef, useState } from "react";
import Button from "../button";

type Props = { videoUrl?: string };

const Export = (props: Props) => {
  const { videoUrl } = props;

  // const [loaded, setLoaded] = useState(false);
  // const ffmpegRef = useRef(new FFmpeg());

  // const load = async () => {
  //   const ffmpeg = ffmpegRef.current;
  //   ffmpeg.on("log", ({ message }) => {
  //     console.log(message);
  //   });

  //   const isLoaded = await ffmpeg.load({
  //     coreURL: await toBlobURL(coreURL, "text/javascript"),
  //     wasmURL: await toBlobURL(wasmURL, "text/javascript"),
  //   });

  //   console.log({ isLoaded });

  //   setLoaded(isLoaded);
  // };

  // const cropVideo = async () => {
  //   if (!loaded) {
  //     console.error("FFmpeg not loaded");
  //     return;
  //   }

  //   const ffmpeg = ffmpegRef.current;

  //   ffmpeg.writeFile("input.mp4", await fetchFile(videoUrl));

  //   // Run FFmpeg commands to crop and scale the video
  //   await ffmpeg.exec([
  //     "-i",
  //     "input.mp4",
  //     "-vf",
  //     "crop=in_h*9/16:in_h,scale=300:534",
  //     "output.mp4",
  //   ]);

  //   const croppedFile = await ffmpeg.readFile("output.mp4");

  //   console.log({ croppedFile });

  //   const data = new Uint8Array(croppedFile as ArrayBuffer);
  //   const url = URL.createObjectURL(
  //     new Blob([data.buffer], { type: "video/mp4" })
  //   );

  //   console.log({ url });
  // };

  // useEffect(() => {
  //   load();
  // }, []);

  function downloadBlob(blobUrl: string, filename: string) {
    // Create a temporary anchor element
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = blobUrl;
    a.download = filename;

    // Append the anchor to the document
    document.body.appendChild(a);

    // Programmatically trigger a click on the anchor
    a.click();

    // Remove the anchor from the document
    document.body.removeChild(a);

    // Revoke the Blob URL to free up memory
    URL.revokeObjectURL(blobUrl);
  }

  if (!videoUrl) {
    return null;
  }

  return (
    <>
      <Button
        className="bg-purple-500 text-white hover:bg-purple-600"
        onClick={() => downloadBlob(videoUrl, Date.now().toString())}
      >
        Export
      </Button>
    </>
  );
};

export default Export;
