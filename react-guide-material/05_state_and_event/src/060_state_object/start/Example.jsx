import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);
  return (
    <div>
      <p>Name:{person.name}</p>
      <p>Age: {person.age}</p>
      <input type="text"
        onChange={(e) => setPerson({name: e.target.value, age: person.age})}
      /><br />
      <input type="number"
        onChange={(e) => setPerson({...person, age: e.target.value})}
      /><br />
      <button onClick={() => setPerson({...person, name: '', age: ''})}>リセット</button>
    </div>
  );
};

export default Example;
