import Input from "./components/Input";
import Result from "./components/Result";
import Select from "./components/Select";
import { CalcProvider } from "./contexts/ClacContext";
const Example = () => {
  return (
    <>
      <CalcProvider>
        <Input name="a" />
        <Input name="b" />
        <Select />
        <Result />
      </CalcProvider>
    </>
  );
};

export default Example;
