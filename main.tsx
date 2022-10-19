'use strict'
import { global } from './modules/global.jsx'
import { data } from './modules/data.jsx'
import { events } from './modules/events.jsx'
import { component } from './modules/component.jsx'
import { render } from './modules/render.jsx'
import { button } from './modules/button.jsx'


$(() => {// Main
    events;
    button;

    render.navegation();
    render.mainPagePlaylists();
});