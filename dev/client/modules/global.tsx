'use strict'
const main = () => {
    const obj = {
        // Variáveis
        __rootdir: "/media/veracrypt1/prog/reps/my/Central/apps/custom/devmyna_page/",
        // Funções
        root: (dir: any) => {// Definir Diretório Root
            //@ts-ignore
            return ReactDOM.createRoot(document.querySelector(dir));
        },
        convertHexToHTML: (data: any, content: string) => {
            const html = $.parseHTML(content)
            //@ts-ignore
            return $.text(html);
        }
    }
    return obj;
}
export const global = main();