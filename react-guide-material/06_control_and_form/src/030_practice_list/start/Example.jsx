import Profile from './components/Profile'

const Example = () => {
  const humans = [
    {id:1, Name:'Geo', age:18, hobbys:['sports', 'music']},
    {id:2, Name:'Tom', age:19, hobbys:['movie', 'music']},
    {id:3, Name:'Lisa', age:20, hobbys:['sports', 'travel', 'game']},
  ];
  return (
    <>
      <ul>
        {humans.map((human) => (
          <li key={human.id}>
            <Profile name={human.Name} age={human.age} hobbys={human.hobbys} />
            
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
