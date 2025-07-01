export default function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { city, userId } = req.body;
            console.log(`Голос от ${userId} за ${city}`);

            res.status(200).json({
                success: true,
                voted: city,
                winner: city
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ success: false });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
