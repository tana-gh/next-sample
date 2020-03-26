import * as Next   from 'next'
import * as Router from 'next/router'
import useSWR      from 'swr'
import Link        from 'next/link'
import Layout      from '../components/Layout'

interface PostLinkProps {
    id: string
}

const PostLink = (props: PostLinkProps) => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{ props.id }</a>
        </Link>
        <style jsx>{`
            li {
                list-style: none;
                margin: 5px 0;
            }

            a {
                text-decoration: none;
                color: blue;
                font-family: 'Arial';
            }

            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </li>
)

const Quote = () => {
    const { query } = Router.useRouter()
    const { data, error } = useSWR(
        `/api/randomQuote${query.author ? '?author=' + query.author : ''}`,
        (url: string) => fetch(url).then(r => r.json())
    )
    
    const author = data?.author
    let quote = data?.quote

    if (!data) quote = 'Loading...'
    if (error) quote = 'Failed to fetch the quote.'

    return (
        <main className="center">
            <div className="quote">{ quote }</div>
            { author && <span className="author">- { author }</span> }

            <style jsx>{`
                main {
                width: 90%;
                max-width: 900px;
                margin: 300px auto;
                text-align: center;
                }
                .quote {
                font-family: cursive;
                color: #e243de;
                font-size: 24px;
                padding-bottom: 10px;
                }
                .author {
                font-family: sans-serif;
                color: #559834;
                font-size: 20px;
                }
            `}</style>
        </main>
    );
}

const Index: Next.NextPage<{ userAgent: string }> = ({ userAgent }) => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            <PostLink id="hello-nextjs"/>
            <PostLink id="learn-nextjs"/>
            <PostLink id="deploy-nextjs"/>
        </ul>
        <p>{ userAgent }</p>
        <Quote/>
        <style jsx>{`
            h1,
            a {
                font-family: 'Arial';
            }

            ul {
                padding: 0;
            }

            li {
                list-style: none;
                margin: 5px 0;
            }

            a {
                text-decoration: none;
                color: blue;
            }

            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </Layout>
)

Index.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] ?? '' : navigator.userAgent
    return { userAgent }
}

export default Index
