/**
 *
 *
 *
**/
import { global } from './global.jsx';
import { data } from './data.jsx';
const mainRoot = global.root('article#main');

const main = () => {
  const obj = {
    test: data => {
      const obj = /*#__PURE__*/React.createElement("div", {
        id: "playlistSpace"
      }, /*#__PURE__*/React.createElement("div", {
        id: "playlistImgSpace"
      }, /*#__PURE__*/React.createElement("img", {
        src: data.playlistImg
      })), /*#__PURE__*/React.createElement("div", {
        id: "playlistDataSpace"
      }, /*#__PURE__*/React.createElement("div", {
        id: "playlistName"
      }, data.playlistName), /*#__PURE__*/React.createElement("div", {
        id: "playlistDescription"
      }, data.playlistDescription)));
      return {
        obj
      };
    },
    individualPlaylist: data => {
      const content = /*#__PURE__*/React.createElement("div", {
        id: "playlistBg",
        style: {
          backgroundImage: `url(${data.playlistImg})`
        }
      }, /*#__PURE__*/React.createElement("div", {
        id: "playlistBgGradient"
      }, obj.test(data).obj));
      mainRoot.render(content);
    },
    mainPage: data => {
      const content = /*#__PURE__*/React.createElement("div", {
        id: "playlistBg",
        style: {
          backgroundImage: `url(${data.playlistImg})`
        }
      }, /*#__PURE__*/React.createElement("div", {
        id: "playlistBgGradient"
      }));
    }
  };
  return {
    obj
  };
};

export const template = main().obj;