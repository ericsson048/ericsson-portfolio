    // pages/api/openApi.json.ts
    import { NextApiRequest, NextApiResponse } from "next";
    import { getApiDocs } from "../../lib/swagger"; // Adjust path as needed

    export default async function handler(req: NextApiRequest, res: NextApiResponse) {
      const spec = await getApiDocs();
      res.status(200).json(spec);
    }