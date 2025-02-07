const animals = [
  {key:10, animal:"Dog"}, 
  {key:20, animal:"Cat"}, 
  {key:30, animal:"Rat"}
];

// 重複チェック
const keys = animals.map(animal => animal.key);
const hasDuplicates = keys.length !== new Set(keys).size;
console.log("重複があるか:", hasDuplicates);

const Example = () => {

  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {animals.map((animal) => <li key={animal.key}>{animal.animal}</li>)}
      </ul>
    </>
  );
};

export default Example;
