import { useState } from "react";
import styled from "styled-components";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  const StyledButton = styled.button`
    margin: auto;
    border-radius: 9999px;
    border: none;
    display: block;
    width: 120px;
    height: 60px;
    font-weight: bold;
    cursor: pointer;
    background: ${({isSelected}) => isSelected ? "pink" : ""};
  `;

  const OrangeButton = styled(StyledButton)`
    background: ${({isSelected}) => isSelected ? "orange" : ""};
  `
  return (
    <>
    <StyledButton isSelected = { isSelected }onClick={clickHandler}>ボタン</StyledButton>
    <OrangeButton isSelected = { isSelected }onClick={clickHandler}>ボタン</OrangeButton>
      <button
        onClick={clickHandler}
      >
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
