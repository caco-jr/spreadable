// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  if (req.method === 'POST') {
    res.json({ author: 'Carlos Costa Jr' });
  } else {
    // Handle any other HTTP method
    res.json({ author: 'Carlos Costa Jr' });
  }

  res.statusCode = 200;
};

export default handler;
