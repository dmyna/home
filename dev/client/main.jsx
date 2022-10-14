'use strict'
import { global } from './modules/global.js'
import { data } from './modules/data.js'
import { events } from './modules/events.js'
import { component } from './modules/component.js'
import { render } from './modules/render.js'
import { button } from './modules/button.js'


/**
 *
 *
 *
**/

// Main
$(() => {
    events;
    button;
    render.mainPagePlaylists();
});