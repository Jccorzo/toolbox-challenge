import { reverse, validatePalindrome } from './helper';

const route = (app) => {
    app.get('/iecho', (req, res) => {
        try {
            const text = JSON.parse(req.query.text);
            if (text && typeof text === 'string') {
                const inverse = reverse(text)
                const palindrome = validatePalindrome(text, inverse)
                res.json({ text: inverse, palindrome: palindrome })
            } else {
                res.status(400).json({ error: "no text" })
            }
        } catch (e) {
            res.status(400).json({ error: "no text" })
        }
    })
}

export default route;