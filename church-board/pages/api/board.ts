import {NextApiRequest, NextApiResponse} from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json([
        {
            key: '1',
            title: '앵귤러를 써야하는 이유',
            name: '앵짱봇',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            title: 'RxJS와 앵귤러',
            name: '앵짱봇',
            tags: ['cool', 'developer'],
        },
        {
            key: '3',
            title: '앵귤러가 짱이야!!!!!!!!!!!!',
            name: '앵짱봇',
            tags: ['loser', 'developer'],
        },
    ])
}
