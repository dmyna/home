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
          backgroundImage: `url(${data.images[0].url})`
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
        src: data.images[0].url
      })), /*#__PURE__*/React.createElement("div", {
        id: "playlistDataSpace"
      }, /*#__PURE__*/React.createElement("div", {
        id: "playlistName"
      }, data.name), /*#__PURE__*/React.createElement("div", {
        id: "playlistDescription"
      }, data.description))));
      return content;
    },
    mainPage: (data, component) => {
      const content = /*#__PURE__*/React.createElement("div", {
        id: "playlistsSpace"
      }, /*#__PURE__*/React.createElement("div", {
        id: "playlistsList"
      }, component));
      return content;
    },
    playlistContainer: data => {
      const content = (data, /*#__PURE__*/React.createElement("div", {
        className: "playlistContainer"
      }, /*#__PURE__*/React.createElement("div", {
        id: "playlistImageSpace"
      }, /*#__PURE__*/React.createElement("div", {
        id: "playlistImage",
        style: {
          backgroundImage: `url(${data.images[0].url})`
        }
      })), /*#__PURE__*/React.createElement("div", {
        id: "playlistDataSpace"
      }, /*#__PURE__*/React.createElement("div", {
        id: "playlistTitle"
      }, data.name), /*#__PURE__*/React.createElement("div", {
        id: "playlistDescription"
      }, data.description))));
      return content;
    }
  };
  return {
    obj
  };
};

export const template = main().obj;