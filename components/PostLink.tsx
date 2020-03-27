import Link from 'next/link'

interface Props {
    id: string
}

export default (props: Props) => (
    <li>
        <Link href="/post/[id]" as={`/post/${encodeURIComponent(props.id)}`}>
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
