// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { demoList } from '../../data/demoList';

export default function handler(req, res) {
	const { amount = 500 } = req.query;
	if (req.method === 'GET') {
		demoList.length = 0;
		for (let i = 1; i <= parseInt(amount); i++) {
			demoList.push({
				listener: `Listener ${i}`,
				playlist: `PlayList ${i}`,
				favourite: `Favourite ${i}`,
			});
		}
		res.status(200).json(demoList);
	}
}
