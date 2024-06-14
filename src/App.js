import {useState} from  'react';
import './App.css';
import { FiSearch } from 'react-icons/fi'
import api from './services/api';
function App() {
const [cep,setCep] = useState("")
const[input, setInput] = useState("")
 async function handleSearch(){
  if (input===''){
    alert("Preencha algum cep")
    return;
  }
  try{
const response = await api.get(`${input}/json`);
setCep(response.data);
console.log(response.data)
setInput("");
  }catch{
alert("Erro ao buscar cep")
setInput("")
  }
}
  return (
    <div className='container'>
      <h1 className='title'>Buscador de cep</h1>


      <div className='container-input'>
        <input type='text'
        placeholder='Digite seu cep...'
        value={input}
        onChange={(e) =>setInput(e.target.value)}
        ></input>
        

        <button className='btn' onClick={handleSearch}
        ><FiSearch size={25} color='#FFF'/></button>
      </div>
    {Object.keys(cep).length > 0 && (
      <main className='main'>
      <h2>CEP: {cep.cep}</h2>
      <span>{cep.logradouro}</span>
      <span>{cep.bairro}</span>
      <span> {cep.localidade} - {cep.uf}</span>
      </main>
    )}


    
<div className='footer'>
  <footer>Desenvolvido por Matttdev</footer>
</div>




    </div>
  )
}
export default App;
