import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

function App() {
  const [textoFrase, setTextoFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        'Siga os Bons e aprenda com eles.',
        'O bom-senso vale mais que muito conhecimento',
        'O riso é a menor distância entre duas pessoas',
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossivel.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso.',
      ]
    },

    {
      id: 2,
      nome: "Bom dia",
      frases: [
        'Acordar de bem com a vida é o primero passo para um dia abençoado! Bom dia Família!',
        'A melhor forma de acordar é pular da cama e se preparar para correr atrás de todos os seus sonhos! Bom dia, mundo!',
        'Escreva em seu coração: todo dia é o melhor dia do ano.',
        'Bom dia! Não se esqueça que sua alma é o reflexo do sol, tão forte e brilhante quanto um girassol.',
      ]
    }
  ]

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index)
  }

  function gerarFrase() {
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
    <>
      <div className='container'>
       <img src={logoImg} alt="Logo Frases" />

       <h2 className='titile'>Categorias</h2>
       <section className='categoryArea'>
        {allFrases.map( (item, index) => (
          <button
          key={item.id} 
          style={{
            borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
            borderColor: "#1fa4db"

          }}

          onClick={() => handleSwitchCategory(index)}

          className='categoryButton'>
            {item.nome}
            </button>
        ))}
        
       </section>
       <button className='buttonFrase' onClick={gerarFrase}>Gerar Frase</button>

       {textoFrase !== '' && <p className='textoFrase'>{textoFrase}</p>}

       

      </div>
    </>
  )
}

export default App
