import * as Next from 'next'
import * as App  from 'next/app'
import Header    from '../components/Header'
import Head      from '../components/Head'

const layoutStyle = {
    margin : 20,
    padding: 20,
    border : '1px solid #DDD'
}

interface Props {
    Component: Next.NextComponentType
    pageProps: {}
}

const _App = ({ Component, pageProps }: Props) => (
    <App.Container>
        <Head title="Next Sample App"/>
        <div style={layoutStyle}>
            <Header/>
            <Component {...pageProps}/>
        </div>
    </App.Container>
)

_App.getInitialProps = async ({ Component, ctx }: App.AppContext) => (
    { pageProps: await Component.getInitialProps?.(ctx) ?? {} }
)

export default _App
