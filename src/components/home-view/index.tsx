import Button from "../button";

type Props = {
  onStart: () => void;
};

const HomeView = (props: Props) => {
  const { onStart } = props;
  return (
    <header className="flex flex-col items-center justify-center w-full min-h-screen">
      <img src="/logo.svg" width={100} height={100} className="mb-6" />
      <h1 className="text-gray-900 text-2xl md:text-3xl font-extrabold mb-3 text-center">
        Effortless Webcam Capture & Recording
      </h1>
      <p className="text-gray-700 max-w-3xl text-center mb-10">
        Record high-quality videos, take snapshots, and share your moments
        effortlessly—all from your browser. No installs, no hassle. Just click,
        capture, and create with WebCamio!
      </p>

      <Button
        className="bg-purple-500 hover:bg-purple-600 text-white"
        onClick={onStart}
      >
        Continue Recording
      </Button>
    </header>
  );
};

export default HomeView;
