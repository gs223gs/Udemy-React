import CounterResult from "./CounterResult"
import CounterButton from "./CounterButton"
import { useCounter, useUpdateCounter } from "../context/CountContext"

const Counter = () => {
    const state = useCounter()
    const [countUp,] = useUpdateCounter()
    const [ ,countDown] = useUpdateCounter()
    return (
        <>
            <CounterResult state={state} />
            <CounterButton step={2} calcType="+" onClick={countUp}/>
            <CounterButton step={2} calcType="-" onClick={countDown}/>
            <CounterButton step={20} calcType="+" onClick={countUp}/>
            <CounterButton step={20} calcType="-" onClick={countDown}/>
        </>
    )
}
export default Counter;