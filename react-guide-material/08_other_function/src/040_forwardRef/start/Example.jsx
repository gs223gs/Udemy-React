import  {useState, useRef } from 'react'

const InputRef = ({ custamRef }) =>{
  return(
    <>
      <input type='text' ref={custamRef}/>
    </>
  )
}
const Example = () => {
  const ref = useRef()
  console.log(ref,'main')
  return (
    <div>
      {/* <input type="text" ref={ref}/> */}
      <InputRef custamRef={ref} />
      <button onClick={() => ref.current.focus()}> fucus </button>
    </div>
    
  )
}

export default Example