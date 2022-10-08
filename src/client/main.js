/**
 *
 *
 *
**/ // Importações
import{global}from"./modules/global.js";import{data}from"./modules/data.js";import{template}from"./modules/templates.js";// Main
$(()=>{const renderMain=()=>{global.root("article#main");var index="Teste";var content=/*#__PURE__*/React.createElement("div",null,index);root.render(content)};template.individualPlaylist({playlistImg:data.playlistImg,playlistName:data.playlistName})});
//# sourceMappingURL=main.js.map