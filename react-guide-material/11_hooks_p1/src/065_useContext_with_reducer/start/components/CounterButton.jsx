

const CounterButton = ({calcType, step, onClick}) => {
    
    return <button onClick={onClick} value={step}>{calcType}{step}</button>
}
export default CounterButton;