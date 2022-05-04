import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
//import MarvelService from "./components/services/MarvelService";
import './style/style.scss';

//const marvelService = new MarvelService();
//marvelService.getAllCharacters().then(res => console.log(res) );
/*marvelService.getCharacter(1011052).then(res => console.log(res) );*/

//marvelService.getAllCharacters().then(res =>
    //res.data.results.forEach(item => console.log(item.name)));

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
