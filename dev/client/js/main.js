// Importações
import { global } from './modules/global.js';
import { data } from './modules/data.js';
import { template } from './modules/template.js';
import { render } from './modules/render.js';
/**
 *
 *
 *
**/
// Main

$(() => {
  const renderMain = () => {
    global.root('article#main');
    var index = "Teste";
    var content = /*#__PURE__*/React.createElement("div", null, index);
    root.render(content);
  }; // data.renderPlaylist('5Hg7hDtY7jtvV42xa2lq5R'); // Little Fire


  render.individualPlaylist('5MdH8lh5RAk1RGnYbL0xSo'); // Foguinho
  // data.renderPlaylist('3ScQ3tLNss0Nyf9pT3NpTP') // Rainy Night
});