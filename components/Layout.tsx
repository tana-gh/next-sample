import * as Next from 'next'
import * as App  from 'next/app'
import Header    from './Header'
import Head      from './Head'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

const Layout = (props: Props) => (
    <App.Container>
        <Head title="Next Sample"/>
        <div style={layoutStyle}>
            <Header/>
            { props.children }
        </div>
    </App.Container>
)

Layout.getInitialProps = async ({ Component, ctx }: { Component: Next.NextComponentType, ctx: Next.NextPageContext }) => (
    { pageProps: await Component.getInitialProps?.(ctx) ?? {} }
)

export default Layout
