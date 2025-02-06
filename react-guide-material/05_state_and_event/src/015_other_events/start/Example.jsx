import "./Example.css";

const Example = () => {
  const validationCheck = (e) => {
    for (let i = 0; i < e.length; i++) {
      // eに不正な文字が入っていないかチェック
      //不正な文字 <,>,(,),
      if (e[i] === "<" || e[i] === ">" || e[i] === "(" || e[i] === ")") {
        console.log("不正な文字が入力されています。");
        return;
      }
    }
  };
  
  return (
    <div>
      <h3>コンソールを確認してください。</h3>
      <label>
        入力値のイベント：
        <input
          type="text"
          onChange={() => console.log("onChange検知")}
          onBlur={() => console.log("onBlur検知")}
          onFocus={() => console.log("onFocus検知")}
        />
      </label>
      <div>
        <label>
          入力値を取得：
          <input type="text" onChange={(e) => validationCheck(e.target.value)} />
        </label>
      </div>
      {/* <div
        className="hover-event"
        onMouseEnter={() => console.log("カーソルが入ってきました。")}
        onMouseLeave={() => console.log("カーソルが出ていきました。")}
      >
        ホバーしてね！
      </div> */}
    </div>
  );
};

export default Example;
