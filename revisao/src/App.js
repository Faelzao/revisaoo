import Imagem from "./img/images.jpg"
import ProfileImage from "./components/ProfileImage";
import './App.css';

function App() {
  return (
    <div className="App">

      < ProfileImage 
      imagem={Imagem}
      alt="um atleta de baixa estatura mas de um grande coração"

      titulo="Romário é um ex -jogador de futebol que conseguiu marcar a sua história tanto no Brasil quanto na 
      Europa devido a sua habilidade com a chuteira. Além disso, vale mencionar que a carreira do 
      astro durou cerca de 24 anos. Apesar de só ter 1,67cm ao entrar em campo, o atleta conseguiu se tornar um 
      verdadeiro gigante."
      />
     
    </div>
  );
}

export default App;
