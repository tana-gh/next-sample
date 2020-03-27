import * as Next from 'next'
import PostLink  from '../components/PostLink'

const Index: Next.NextPage<{ userAgent: string }> = ({ userAgent }) => (
    <>
        <h1>Next Sample Page</h1>
        <ul>
            <PostLink id="Hello Next.js"/>
            <PostLink id="Learn Next.js"/>
            <PostLink id="Deploy Next.js"/>
        </ul>
        <p>{ userAgent }</p>

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
    </>
)

Index.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] ?? '' : navigator.userAgent
    return { userAgent }
}

export default Index
