import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const data = require('/modules/data');

    const { pid } = req.query;

    const content = data.getPlaylist(pid);

    res.status(200).json(content);
};
export default handler;