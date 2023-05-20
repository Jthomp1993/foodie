const { drink } = require('./drinkData.json');

export default function handler(req, res) {
    const getDrink = drink.filter(x => x.slug === req.query.slug);

    if(req.method === 'GET') {
        res.status(200).json(getDrink);
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).json({ message: `Method ${req.method} is not allowed.`});
    }
}