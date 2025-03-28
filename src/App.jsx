import { useState } from "react"
import Input from "./components/input"

function App() {
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")
  const [customSize, setCustomSize] = useState(12)
  const [showInput, setShowInput] = useState(false)

  const passwordSize = showInput ? customSize : 8
  function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPassword = ""
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setPassword(newPassword)
    setCopyText("Copiar")
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado")
  }

  return (
    <div>
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="showInput">Customizar o Tamanho:</label>
        <input
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowInput(currentState => !currentState)}
        />

      </div>
      {/* se for verdadeiro ira exibir o input se for falso ira exibir null */}
      {showInput ? (
        <div>
          <label htmlFor="passwordSize">Tamanho:</label>
          <Input passwordSize={customSize} setPasswordaSize={setCustomSize} />
        </div>
      ) : null}

      <button onClick={generate}>Gerar senha de {passwordSize} caracteres! </button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div>{password}</div>
    </div>
  )
}

export default App