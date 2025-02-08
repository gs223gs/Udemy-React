import Profile from "./components/Profile";
import { useState } from "react";
const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];
const Example = () => {
  const [filter, setFilter] = useState("");
  const filteredPersons = persons.filter(
    (person) => person.name.indexOf(filter) !== -1
  );

  console.log(filteredPersons)
  return (
    <>
      <h3>練習問題</h3>
      <p>
        入力欄を設置して、入力値と名前が一致したもののみ表示する仕組みを作成してください。
      </p>
      <input type="text" onChange={(e) => setFilter(e.target.value)} />

      <ul>
        {filteredPersons.length > 0 ? (
          filteredPersons.map((person) => {
            return (
              <li key={person.name}>
                <Profile {...person} />
              </li>
            );
          })
        ) : (
          <li key="false">
            <p>一致するものがありません</p>
          </li>
        )}
      </ul>
    </>
  );
};

export default Example;
