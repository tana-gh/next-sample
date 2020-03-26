import * as Next from "next"
import allQuotes from '../../json/quotes.json'

export default (req: Next.NextApiRequest, res: Next.NextApiResponse) => {
    const { author } = req.query
    let quotes = allQuotes

    if (author) {
        quotes = quotes.filter(quote => quote.author.toLowerCase().includes((<string>author).toLowerCase()))
    }
    if (!quotes.length) {
        quotes = allQuotes.filter(quote => quote.author.toLowerCase() === 'unknown')
    }

    const quote = quotes[Math.floor(Math.random() * quotes.length)]

    res.status(200).json(quote)
}
