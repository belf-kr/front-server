import { NextApiRequest, NextApiResponse } from "next";

export default function ping(_req: NextApiRequest, res: NextApiResponse): void {
  res.status(200).end();
}
