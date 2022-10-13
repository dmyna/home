import { global } from './global.js';
import { data } from './data.js';
import { button } from './button.js';
/**
 *
 *
 *
**/

const main = () => {
  const obj = {
    Background: p => {
      return /*#__PURE__*/React.createElement("div", {
        id: "playlistBg",
        style: {
          backgroundImage: `url(${p.data.images[0].url})`
        }
      }, /*#__PURE__*/React.createElement("div", {
        id: "playlistBgGradient"
      }, p.component));
    },
    IndividualPlaylist: p => {
      return /*#__PURE__*/React.createElement(obj.Background, {
        data: p.data,
        component: /*#__PURE__*/React.createElement("div", {
          id: "playlistSpace"
        }, /*#__PURE__*/React.createElement("div", {
          id: "playlistImgSpace"
        }, /*#__PURE__*/React.createElement("img", {
          src: p.data.images[0].url
        })), /*#__PURE__*/React.createElement("div", {
          id: "playlistDataSpace"
        }, /*#__PURE__*/React.createElement("div", {
          id: "playlistName"
        }, p.data.name), /*#__PURE__*/React.createElement("div", {
          id: "playlistDescription"
        }, global.convertHTMLHex(p.data, p.data.description))))
      });
    },
    MainPage: p => {
      return /*#__PURE__*/React.createElement(obj.Background, {
        data: p.bgData,
        component: /*#__PURE__*/React.createElement("div", {
          id: "playlistsSpace"
        }, /*#__PURE__*/React.createElement("div", {
          id: "playlistsList"
        }, p.component))
      });
    },
    PlaylistContainer: class PlaylistContainer extends React.Component {
      constructor(p) {
        super(p);
        this.id = p.id;
        this.data = p.data;
      }

      componentDidMount() {
        button.individualPlaylist(this.id);
      }

      render() {
        return /*#__PURE__*/React.createElement("div", {
          key: this.key,
          id: this.id,
          className: "playlistContainer"
        }, /*#__PURE__*/React.createElement("div", {
          className: "playlistLeftSpace"
        }, /*#__PURE__*/React.createElement("div", {
          className: "playlistImage",
          style: {
            backgroundImage: `url(${this.data.images[0].url})`
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "playlistRightSpace"
        }, /*#__PURE__*/React.createElement("div", {
          className: "playlistTitle"
        }, this.data.name), /*#__PURE__*/React.createElement("div", {
          className: "playlistDescription"
        }, global.convertHTMLHex(this.data, this.data.description))));
      }

    }
  };
  return obj;
};

export const comp = main();