// import { useState } from 'react'
// import './App.css'

// const App = () => {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1>Superhero Wiki</h1>
        
//       {allHeroes.map((heroInfo, index) => {
//         return <heroeCard key={indesx}>Hello />
//       })}
      
//     </>
//   )
// }

// export default App

// import { useState } from 'react';
// import {allHeroes} from './HeroData'
// import './App.css'
 
// function App() {
//   const [show, setShow] = useState(false)
 
//   return (
//       <div>
//       <h1>SuperHero Wiki</h1>
      
//       {allHeroes.map((heroInfo, index) => {
//         return <HeroCard key={index} heroObj={heroInfo}/>
//       })}
//       </div>
 
//   )
// };

// const HeroCard = (props) => {
//   return (
//     <>
//       <p>Hero: {props.heroObj.hero}</p>
      
//       {show && (
//         <div>
      
//       <p>Hero: {props.heroObj.info}</p>
//       <p>Hero: {props.heroObj.villains}</p>
//     </div>
//   )
// } 
//     <button> onClick={() => setShow(!show)}>SHOW INFO</button>
//   </>
//   )
// };
 
// export default App;

// import { useState } from 'react';
// import {allHeroes} from './HeroData'
// import './App.css'
 
// function App() {

//   const [favourites, setFavourites] = useState([]);
 
//   return (
//       <div>
//       <h1>SuperHero Wiki</h1>

//       <div>
//         <h3>FAVOURITES LIST</h3>

//       </div>

//             {allHeroes.map((heroInfo, index) => {
//         return <HeroCard key={index} heroObj={heroInfo}/>
//       })}
//       </div>
 
//   )
// };
 
// const HeroCard = (props) => {
//   const [show, setShow] = useState(false)
//   return (
//     <>
//     <p>HERO: {props.heroObj.hero}</p>
//     { show && (
//         <div>
//         <p>TRIVIA: {props.heroObj.info}</p>
//         <p>VILLAIN: {props.heroObj.villain}</p>
//         </div>
//     )
//     }
   
//     <button onClick={() =>setShow(!show)}>{show ? "HIDE INFO" : "SHOW INFO"}SHOW INFO</button></>
//   )
// }
 
// export default App
 

import { useState } from 'react';
import './App.css';
import {allHeroes} from "./HeroData";
 
const App = () => {
  const [favourites, setFavourites] = useState([]);

  const handleAddToFav = (hero) => {
    let newFavArr = []
  }
 
  return (
    <>
      <h1>Superhero Wiki</h1>
 
      <div>
        <h3>Favourite Heroes</h3>
        {favourites.map((favHero, index) => {
          return <Favourites key={index} favHeroData={favHero}/>
        })}
      </div>
 
      {allHeroes.map((heroInfo, index) => {
        return <HeroCard key={index} heroObj={heroInfo}/>
      })}
    </>
  );
};
 
const Favourites = (props) => {
  return(
    <div>
      <p>Fav Hero</p>
    </div>
  )
}
 
const HeroCard = (props) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <p>HERO: {props.heroObj.hero}</p>
 
      {show && (
        <div>
          <p>INFO: {props.heroObj.info}</p>
          <p>VILLAIN: {props.heroObj.villain}</p>
        </div>
      )}
 
      <button onClick={() => setShow(!show)}>{show ? "Hide Info" : "Show Info"}</button>
      <button>Add to favourites</button>
    </>
  );
};
 
export default App;