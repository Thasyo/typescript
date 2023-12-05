//9- Context Api
import { createContext } from 'react';

//4- importação de componentes
import FirstComponent from './components/FirstComponent';

//5- Desestruturando props
import SecondComponent from './components/SecondComponent';
import Desestructuring, {Category} from './components/Desestructuring';

//6- usestate
import State from './components/State';
import Context from './components/Context';

//8 - Types
type textOrNull = string | null;

//9- Context Api
interface IAppContext {
  language: string
  framework: string
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {

  //1- Variáveis
  const name: string = "Thasyo";
  const age: number = 21;
  const isWorking: boolean = true;



  //2- Funções
  const greeting = (name: string): string => {
    return `Olá, ${name}`;
  } 

  //8- types
  const myText: textOrNull = "Ainn Zé da manga";
  let myOtherText: textOrNull = null;

  //9- Context
  const contextValue: IAppContext = {
    language: "Javascript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
        <div className="App">
        <h1>React com Typescript</h1>
        <h2>Nome: {name}</h2>
        <h3>Idade: {age}</h3>
        <h3>{isWorking ? (
          <p>Está trabalhando!</p>
        ) : (
          <p>Não está trabalhando!</p>
        )}</h3>
        <h4>{greeting(name)}</h4>
        <FirstComponent/>
        <SecondComponent name="Jubireba"/>
        <Desestructuring 
          title="Ain Zé da manga"
          content="Não chupe manga com leite, senão você vai de comes e bebes!"
          commentsQty={1230}
          tags={["Youtube", "Tiktok", "Facebook", "Instagram"]}
          category={Category.TS}
        />
        <State/>
        {myText && (
          <p>{myText}</p>
        )}
        {myOtherText && (
          <p>{myOtherText}</p>
        )}
      </div>
      <Context/>
    </AppContext.Provider>
  );
}

export default App;
