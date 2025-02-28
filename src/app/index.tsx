import { useState } from "react";
import HomeView from "../components/home-view";
import RecordView from "../components/record-view";

type Props = {};

const App = (props: Props) => {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <>
      {!isStarted && <HomeView onStart={() => setIsStarted(true)} />}
      {isStarted && <RecordView />}
    </>
  );
};

export default App;
