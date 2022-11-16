export const handler = (req: any, res: any) => {
    const data = require('/modules/data');

    const { pid } = req.query;
    res.end(pid);
}