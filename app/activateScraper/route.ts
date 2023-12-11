import { NextApiRequest } from "next";

type Body = {
    Search: string;
};

export async function POST(req: NextApiRequest) {
    const search = req.body.search;
}


// export async function GET(req: Request) {
//     return new Response("Teste GET API Next 13.2", {
//         status: 200,
//     });
// }