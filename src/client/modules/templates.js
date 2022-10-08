/**
 *
 *
 *
**/import{global}from"./global.js";import{data}from"./data.js";const main=()=>{const obj={individualPlaylist:data=>{var root=global.root("article#main");const content=/*#__PURE__*/React.createElement("div",{id:"playlistBg",style:{backgroundImage:`url(${data.playlistImg})`}},/*#__PURE__*/React.createElement("div",{id:"playlistBgGradient"},/*#__PURE__*/React.createElement("div",{id:"playlistSpace"},/*#__PURE__*/React.createElement("div",{id:"playlistImgSpace"},/*#__PURE__*/React.createElement("img",{src:data.playlistImg})),/*#__PURE__*/React.createElement("div",{id:"playlistDataSpace"},/*#__PURE__*/React.createElement("div",{id:"playlistName"},data.playlistName),/*#__PURE__*/React.createElement("div",{id:"playlistDescription"},data.playlistDescription)))));root.render(content)}};return{obj}};export const template=main().obj;
//# sourceMappingURL=templates.js.map