import * as Next from "next"
import allLangs from '../../json/langs.json'

export default (req: Next.NextApiRequest, res: Next.NextApiResponse) => {
    const { word } = req.query
    let langs = allLangs

    if (word) {
        langs = langs.filter(lang => lang.name.toLowerCase().includes((decodeURIComponent(<string>word)).toLowerCase()))
    }
    
    if (!langs.length) {
        res.status(200).json({})
        return
    }

    const lang = langs[Math.floor(Math.random() * langs.length)]

    res.status(200).json(lang)
}
