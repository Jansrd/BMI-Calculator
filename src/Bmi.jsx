import React, { useState } from 'react'
import './style/Bmi.css'

const Bmi = () => {
    const [result, setResult] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')

    const calculateBmi = () => {
        if (height === '' && weight === '') {
            alert('Molimo vas da ispunite potrebna polja')
        } else {
            setResult((weight / (height * height) * 10000).toFixed(2))
        }

    }

    const clear = () => {
        setHeight('')
        setWeight('')
        setResult('')
    }

    return (
        <div className="container">
            <div className="height">
                <label>Enter your height (cm)</label>
                <input
                    type="text"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    pattern='[0-9]*'
                />
            </div>
            <div className="weight">
                <label>Enter your weight (kg)</label>
                <input
                    type="text"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    pattern='[0-9]*'
                />
            </div>
            <button onClick={calculateBmi}>Compute BMI</button>
            <div className="result">
                <label>Your BMI:</label>
                <input type="text" value={result} />
                <button onClick={clear}>X</button>
            </div>
        </div>
    )
}

export default Bmi