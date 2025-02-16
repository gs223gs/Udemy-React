import { useState, useEffect, useLayoutEffect } from "react";

export const useTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  //isRunnigがTrueの時にTimeのカウントを進めるためのEffect
  useEffect(() => {
    let intervalId = null;

    if (isRunning) {
      intervalId = window.setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isRunning]);

  //timeが変更されたらローカスストレージに入れるためのEffect
  useEffect(() => {
    document.title = "counter:" + time;
    window.localStorage.setItem("time-key", time);

    return () => {};
  }, [time]);

  //ローカルストレージのtimeをintに変更後setTimeするためのEffect 最初に実行されたいため，Layout
  useLayoutEffect(() => {
    const _time = parseInt(window.localStorage.getItem("time-key"));
    if (!isNaN(_time)) {
      setTime(_time);
    }
  }, []);

  //timerの進行を管理するための関数
  const toggle = () => {
    setIsRunning((prev) => !prev);
  };

  //Timerをリセットするための関数
  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };
  return { time, isRunning, toggle, reset };
};

export default useTimer;
