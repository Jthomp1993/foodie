const { drink } = require('./drinkData.json');

export default function handler(req, res) {
    res.status(200).json(drink);
}