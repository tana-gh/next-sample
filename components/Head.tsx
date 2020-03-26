import Head  from 'next/head'

interface Props {
    title: string
}

export default (props: Props) => (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{ props.title }</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon"/>
    </Head>
)
