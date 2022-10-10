import { global } from './global.js';
import { data } from './data.js';
/**
 *
 *
 *
**/

const main = () => {
  const obj = {
    background: (data, component) => {
      const content = /*#__PURE__*/React.createElement("div", {
        id: "playlistBg",
        style: {
          backgroundImage: `url(${data.playlistImg})`
        }
      }, /*#__PURE__*/React.createElement("div", {
        id: "playlistBgGradient"
      }, component));
      return content;
    },
    individualPlaylist: data => {
      const content = obj.background(data, /*#__PURE__*/React.createElement("div", {
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
      }, data.playlistDescription))));
      return content;
    },
    mainPage: data => {
      const content = obj.background(data, /*#__PURE__*/React.createElement("div", {
        id: "playlistsSpace"
      }));
      return content;
    }
  };
  return {
    obj
  };
};

export const template = main().obj;