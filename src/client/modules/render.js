"use strict";import{global}from"./global.js";import{data}from"./data.js";import{component}from"./component.js";import{button}from"./button.js";// Root's
const mainRoot=global.root("article#main");const fbox=global.root("div.floatBoxesController");const asdRoot=global.root("aside");/**
 * @param {Function} individualPlaylist - Página da Playlist individual
 *
 *
**/const main=()=>{const obj={individualPlaylist:id=>{data.getPlaylist(id,data=>{mainRoot.render(/*#__PURE__*/React.createElement(component.main.IndividualPlaylist,{data:data}))})},mainPagePlaylists:()=>{data.getPlaylistList(list=>{var containers=[];for(let i of list){data.getPlaylist(i,data=>{containers.push(/*#__PURE__*/ //@ts-ignore
React.createElement(component.main.PlaylistContainer,{key:i,id:i,data:data}))})}data.getUserData(user=>{mainRoot.render(/*#__PURE__*/React.createElement(component.main.MainPage,{bgData:user,component:/*#__PURE__*/React.createElement(component.main.pages.AllPlaylists,{component:containers})}))})})},navegation:()=>{asdRoot.render(/*#__PURE__*/React.createElement(component.nav.Navegation,null))},navMenu:()=>{const obj={unmount:()=>{fbox.render(null)},mount:id=>{//@ts-ignore
fbox.render(/*#__PURE__*/React.createElement(component.nav.navMenu,{id:id,className:"navFloatingMenu",style:{//@ts-ignore
left:$("aside").width()+$("aside").width()/100*15,//@ts-ignore
top:document.querySelector(`#${id}`).getBoundingClientRect().top}}));const tOut=setTimeout(()=>{button.clickOutside(`.navFloatingMenu`,()=>{render.navMenu().unmount();clearInterval(tOut)})},50)}};return obj}};return obj};export const render=main();
//# sourceMappingURL=render.js.map