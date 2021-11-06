function Layout({ children }) {
    return (
        <main className="container">{children}</main>
    )
}

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}