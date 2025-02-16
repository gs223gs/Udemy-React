import { useEffect, useState, useLayoutEffect } from "react";

const Example = () => {
  const [isDisp, setIsDisp] = useState(true);

  return (
    <>
      {isDisp && <Timer />}
      <button onClick={() => setIsDisp((prev) => !prev)}>非表示</button>
    </>
  );
};

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  console.log(isRunning)
  useEffect(() => {
    // console.log('init');
    let intervalId = null;
    if (isRunning) {
      intervalId = window.setInterval(() => {
        // console.log('interval running');
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      window.clearInterval(intervalId);
      // console.log('end');
    };
  }, [isRunning]);

  useEffect(() => {
    // console.log('updated');

    document.title = "counter:" + time;
    window.localStorage.setItem("time-key", time);

    return () => {
      // debugger
      // console.log('updated end');
    };
  }, [time]);

  useLayoutEffect(() => {
    const _time = parseInt(window.localStorage.getItem("time-key"));
    if (!isNaN(_time)) {
      setTime(_time);
    }
  }, []);

  const running = () => {
    setIsRunning((prev) => !prev);
    console.log('running')
  };

  const reset = () => {
    window.localStorage.setItem("time-key", 0);
    setTime(0);
    setIsRunning(false);
    console.log('reset')
  };

  return (
    <>
      <h3>
        <time>{time}</time>
        <span>秒経過</span>
      </h3>
      <button onClick={running}>{isRunning ? "スタート" : "一時停止"}</button>
      <button onClick={reset}>リセット</button>
    </>
  );
};

export default Example;
