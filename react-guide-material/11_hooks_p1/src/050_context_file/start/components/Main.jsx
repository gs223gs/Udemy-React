import { useContext } from "react";
import { MyContext } from "../Example";

const Main = () => {
  const [theme] = useContext(MyContext);
  return (
    <main className={`content-${theme}`}>
      <h1>テーマの切り替え</h1>
    </main>
  );
};

export default Main;
