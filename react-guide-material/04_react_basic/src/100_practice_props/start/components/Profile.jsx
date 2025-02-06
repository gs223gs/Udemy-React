import "./Profile.css";

const Profile = ({name='JonDoe', age = '??', country='Japan', color = 'red'}) => {
  return (
    // <div className={`profile ${color}`}>
    <div className={'profile ' + color}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>From: {country}</p>
      <p>color: {color}</p>
    </div>
  );
};

export default Profile;
