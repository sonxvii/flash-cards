import { useState } from "react";
import { Card } from "./Card";
export function Set() {
    const cards = require('../data'); //подключить данные с data.json
    const [step, setStep] = useState(0);
    const handleNext = () => {
        if (step < cards.length - 2) {
            setStep(step + 1)
        }
    }
    const handlePrev = () => {
        if (step > 0) {
            setStep(step - 1)
        }
    }
    return (
        <div>
            <h2>Название набора</h2>
            <Card
                key={cards[step].id}
                front={cards[step].front}
                back={cards[step].back}
            />
            <div className="control-panel">
                <button disabled ={step == 0 ? true : false} onClick={handlePrev}> &lt; </button>
                <p> {step+1} / {cards.length} </p>
                <button disabled ={step == cards.length -1 ? true : false}onClick={handleNext}> &gt; </button>
            </div>
        </div>
    );
}