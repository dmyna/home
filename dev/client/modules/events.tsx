'use strict'

const main = () => {
    const obj = {
        mousePosition: (callback: Function) => {
            $(window).on('click', (e) => {
                var mouse = {
                    page: {
                        x: e.pageX,
                        y: e.pageY
                    },
                    client: {
                        x: e.clientX,
                        y: e.clientY
                    }
                }
                callback(mouse);
            });
        },
    }
    return obj;
}
export const events = main();