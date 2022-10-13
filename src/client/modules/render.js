import{global}from"./global.js";import{data}from"./data.js";import{comp}from"./component.js";import{button}from"./button.js";const mainRoot=global.root("article#main");/**
 * @param {Function} individualPlaylist - Página da Playlist individual
 *
 *
**/const main=()=>{const obj={individualPlaylist:id=>{data.getPlaylist(id,data=>{mainRoot.render(/*#__PURE__*/React.createElement(comp.IndividualPlaylist,{data:data}))})},mainPagePlaylists:()=>{data.getUserData(user=>{data.getPlaylistList(list=>{var containers=[];for(let i of list){data.getPlaylist(i,data=>{containers.push(/*#__PURE__*/React.createElement(comp.PlaylistContainer,{key:i,id:i,data:data}))})}mainRoot.render(/*#__PURE__*/React.createElement(comp.MainPage,{bgData:user,component:containers}))})})}};return obj};export const render=main();
//# sourceMappingURL=render.js.map