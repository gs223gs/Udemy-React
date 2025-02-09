const Chiled = ({ num }) =>{
  return <div>{ num += 1 }</div>
}

const Example = () => {
  return (
    <>
      <Chiled num={ 1 } />
      <Chiled num={ 2 } />
      <Chiled num={ 3 } />
    </>
  );
};

export default Example;
