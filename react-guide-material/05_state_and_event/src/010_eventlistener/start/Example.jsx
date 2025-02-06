const Example = () => {
  const clickHandler = () =>{
    alert('clicked!');
  }
  return (
    <>
    <button onClick={clickHandler}>クリック</button>
    </>
  );
};

export default Example;
