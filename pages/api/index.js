// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { demoList } from '../../data/demoList';

export default function handler(req, res) {
	if (req.method === 'GET') {
		for (let i = 1; i <= 100000; i++) {
			demoList.push({
				listener: `Listener ${i}`,
				playlist: `PlayList ${i}`,
				favourite: `Favourite ${i}`,
			});
		}
		res.status(200).json(demoList);
	}
}
