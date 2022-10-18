'use strict';

import { global } from './global.js';
import { button } from './button.js';
const main = () => {
  const obj = {
    main: {
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
        return /*#__PURE__*/React.createElement(obj.main.Background, {
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
          }, global.convertHexToHTML(p.data, p.data.description))))
        });
      },
      MainPage: p => {
        return /*#__PURE__*/React.createElement(obj.main.Background, {
          data: p.bgData,
          component: /*#__PURE__*/React.createElement("div", {
            id: "playlistsSpace"
          }, p.component)
        });
      },
      pages: {
        AllPlaylists: p => {
          return /*#__PURE__*/React.createElement("div", {
            id: "allPlaylists"
          }, p.component);
        }
      },
      PlaylistContainer: class PlaylistContainer extends React.Component {
        constructor(props) {
          super(props);
          this.id = props.id;
          this.data = props.data;
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
          }, /*#__PURE__*/React.createElement("p", null, global.convertHexToHTML(this.data, this.data.description)))));
        }
      }
    },
    nav: {
      Navegation: class navegation extends React.Component {
        constructor(props) {
          super(props);
          this.data = props.data;
        }
        render() {
          return /*#__PURE__*/React.createElement("nav", {
            id: "navegation"
          }, /*#__PURE__*/React.createElement("div", {
            className: "navTopDivision"
          }, /*#__PURE__*/React.createElement("a", {
            className: "asdLogo",
            href: "https://www.instagram.com/minatiuu"
          }, /*#__PURE__*/React.createElement("img", {
            src: "https://i.imgur.com/jPLx8fi.png"
          }))), /*#__PURE__*/React.createElement("hr", {
            className: "asdHr"
          }), /*#__PURE__*/React.createElement("div", {
            className: "navCenterDivision"
          }, /*#__PURE__*/React.createElement(obj.nav.AllAsdButtons, {
            data: this.data
          })), /*#__PURE__*/React.createElement("div", {
            className: "navBottomDivision"
          }));
        }
      },
      AsdButton: props => {
        return /*#__PURE__*/React.createElement("div", {
          id: props.id,
          className: "asdButton"
        }, /*#__PURE__*/React.createElement("a", null, props.index));
      },
      AllAsdButtons: props => {
        var container = [];
        const selectLogo = (i, element) => {
          container.push( /*#__PURE__*/React.createElement(obj.nav.AsdButton, {
            key: i.id,
            id: i.id,
            index: element
          }));
        };
        for (let i of props.data.nav.items) {
          if (i.image) {
            selectLogo(i, /*#__PURE__*/React.createElement("img", {
              src: i.image[0].url
            }));
          } else if (i.symbol) {
            selectLogo(i, /*#__PURE__*/React.createElement("p", null, i.symbol));
          }
        }
        return container;
      },
      navMenu: class navMenu extends React.Component {
        constructor(props) {
          super(props);
          this.id = props.id;
          this.style = props.style;
          this.className = props.className;
        }
        componentWillUnmount() {
          $('body').off('click');
        }
        render() {
          return /*#__PURE__*/React.createElement("div", {
            id: this.id,
            className: "navFloatingMenu",
            style: this.style
          });
        }
      }
    }
  };
  return obj;
};
export const component = main();