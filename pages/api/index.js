// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import list from '../../data/list.json';

export default function handler(req, res) {
	res.status(200).json(list);
}
