import Test from "./components/Test";

const Example = () => {
  console.log('pearent 再レンダリングされました');
  return (
    <>
    <Test num = {1}/>
    <Test num = {2}/>
    <Test num = {3}/>
    <Test num = {4}/>
    </>
  );
};

export default Example;
