import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

export default () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
        <Link href="/lang">
            <a style={linkStyle}>Lang</a>
        </Link>
    </div>
)
