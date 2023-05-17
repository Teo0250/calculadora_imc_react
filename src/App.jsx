import { useState } from 'react'
import './global.css'

function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [result, setResult] = useState()

  const weightValue = (e) => {
    setWeight(e.target.value)
  }

  const heightValue = (e) => {
    setHeight(e.target.value)
  }

  const calcIMC = (e) => {
    e.preventDefault()
    
    const imc = weight / ((height / 100) ** 2)
    setResult(imc.toFixed(2))
  }

  return (
    <div className='container'>
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calcIMC}>
        <input type="number" value={weight} onChange={weightValue} placeholder='Digite seu peso: '/> 
        <input type="number" value={height} onChange={heightValue} placeholder='Digite sua altura: '/> 
        <br />
        <button type='submit'>Calcular</button>
      </form>
      {result && (
        <div className='result'>
          <h2>Resultado: {result}</h2> 
          <h3>Tabela IMC:</h3>
          <table>
            <tr>
              <td className={result <= 16.9 ? 'result-row' : ''}>
                Multo abaixo do peso: Menor que 16,9
              </td>
            </tr>
            <tr>
              <td className={result >= 17 && result < 18.5 ? 'result-row' : ''}>
                Abaixo do peso: 17 - 18,4
              </td>
            </tr>
            <tr className={result >= 18.5 && result < 25 ? 'result-row' : ''}>
              <td>
                Peso normal: 18,5 a 24,9
              </td>
            </tr>
            <tr>
              <td className={result >= 25 && result < 30 ? 'result-row' : ''}>
                Acima do peso: 25 - 29,9
              </td>
            </tr>
            <tr>
              <td className={result >= 30 && result < 35 ? 'result-row' : ''}>
                Obesidade grau 1: 30 - 34,9
              </td>
            </tr>
            <tr className={result >= 35 && result < 40 ? 'result-row' : ''}>
              <td>
                Obesidade grau 2: 35 - 40
              </td>
            </tr>
            <tr className={result >= 40 ? 'result-row' : ''}>
              <td>
                Obesidade grau 3: Maior que 40
              </td>
            </tr>
          </table>
        </div>  
      )}
    </div>
  )
}

export default App
