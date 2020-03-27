import * as Router from 'next/router'
import useSWR      from 'swr'

export default () => {
    const { query } = Router.useRouter()
    const { data, error } = useSWR(
        `/api/findLangs${query.word ? '?word=' + query.word : ''}`,
        (url: string) => fetch(url).then(r => r.json())
    )
    
    const name = data?.name
    let since  = data?.since

    if (!data) since = 'Loading...'
    if (error) since = 'Failed to fetch the lang.'

    return (
        <main className="center">
            <div className="name">Programming Lnguage { name }</div>
            { since && <span className="since">- since { since }</span> }

            <style jsx>{`
                main {
                    width: 90%;
                    max-width: 900px;
                    margin: 300px auto;
                    text-align: center;
                }
                .name {
                    font-family: cursive;
                    color: #e243de;
                    font-size: 24px;
                    padding-bottom: 10px;
                }
                .since {
                    font-family: sans-serif;
                    color: #559834;
                    font-size: 20px;
                }
            `}</style>
        </main>
    );
}
