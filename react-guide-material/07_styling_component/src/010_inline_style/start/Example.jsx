import { useState } from "react"

const Example = () => {
    const [isSelected, setIsSelected] = useState(false);

    const clickHandler = () => setIsSelected(prev => !prev);
    const button ={
        width: 300,
        height: 60,
    }
    return (
        <>
            <button onClick={clickHandler} style={button}>ボタン</button>
            <div>{isSelected && "クリックされました。"}</div>
        </>
    )
};

export default Example;
