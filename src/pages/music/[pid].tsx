import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = (await import('../../lib/data')).default;

    const { pid } = req.query;

    const content = data.getPlaylist(pid);

    res.status(200).json(content);
};
export default handler;