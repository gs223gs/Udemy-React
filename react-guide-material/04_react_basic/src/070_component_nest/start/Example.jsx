import "./Example.css";
import {Child} from "./components/Child"
const Example = () => {
  return (
    <div className="component">
      <h3>Hello Component</h3>
      <Child />
    </div>
  );
};

export default Example;
