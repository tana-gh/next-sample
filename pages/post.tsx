import * as Router from 'next/router'
import Layout      from '../components/Layout'

export default () => {
  const router = Router.useRouter()

    return (
        <Layout>
            <h1>{router.query.title}</h1>
            <p>This is the blog post content.</p>
        </Layout>
    )
}
