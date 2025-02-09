import { useState } from "react";
import { createPortal } from "react-dom";
import Toast from "./components/Toast";

const Example = () => {
  const [toastOpen, setToastOpen] = useState(false);
  const TostPortal = ({ children }) => {
    const target = document.querySelector(".container.start");
    return createPortal(children, target);
  };
  return (
    <div>
      <h3>トーストの作成（createPortal）</h3>
      <p>
        ボタンを押すと.container.start要素にマウントされて、表示されるトーストを作成してください。トーストにはToastコンポーネントを使用してください。
      </p>

      <div className="container start"></div>

      <button
        type="button"
        onClick={() => setToastOpen(true)}
        disabled={toastOpen}
      >
        トーストを表示する
      </button>
      {toastOpen && (
        <TostPortal>
          <Toast
            visible={toastOpen}
            handleCloseClick={() => setToastOpen(false)}
          />
        </TostPortal>
      )}
    </div>
  );
};

export default Example;
