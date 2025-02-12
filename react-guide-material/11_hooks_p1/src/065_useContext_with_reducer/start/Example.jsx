import { CountProvider } from "./context/CountContext";
import Counter from "./components/Counter";
const Example = () => {
  return (
    <CountProvider>
      <Counter />
    </CountProvider>
  );
};

export default Example;
