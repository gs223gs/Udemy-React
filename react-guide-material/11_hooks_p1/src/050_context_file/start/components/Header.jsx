import { useContext } from "react";
import { MyContext } from "../Example";
const Header = () => {

  const [theme,setTheme] = useContext(MyContext)
  const THEMES = ["light", "dark", "red"];

  const changeTheme = (e) => setTheme(e.target.value);
  return (
    <header className={`content-${theme}`}>
      {THEMES.map((THEME) => {
        return (
          <div key={THEME}>
            <input
              type="radio"
              value={THEME}
              name="themes"
              onChange={changeTheme}
            />
            <label>{THEME}</label>
          </div>
        );
      })}
    </header>
  );
};

export default Header;
