import * as Router from 'next/router'

export default () => {
    const router = Router.useRouter()

    return (
        <>
            <h1>{ decodeURIComponent(router.query.id as string) }</h1>
            <p>This is the blog post content.</p>
        </>
    );
}
