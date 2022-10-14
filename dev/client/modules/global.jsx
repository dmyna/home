'use strict'

const main = () => {
    const obj = {
        // Variáveis
        __rootdir: "/media/veracrypt1/prog/reps/my/Central/apps/custom/devmyna_page/",
        // Funções
        root: dir => {// Definir Diretório Root
            return ReactDOM.createRoot(document.querySelector(dir));
        },
        convertHTMLHex: (data, content) => {
            const html = $.parseHTML(content);

            return $.text(html);
        }
    }
    return obj;
}
export const global = main();