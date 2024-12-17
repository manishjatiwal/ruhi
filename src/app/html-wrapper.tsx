type Props = {
    assets: any
    children: React.ReactNode
}
function HtmlWrapper({ assets, children }: Props) {
    const { links = [] } = assets
    return (
        <html lang='en'>
            <head>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link
                    type='image/png'
                    sizes='96x96'
                    rel='icon'
                    href='assets/favicon.ico'
                ></link>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossOrigin='anonymous'
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Rubik&display=swap'
                    rel='stylesheet'
                ></link>
                {links.map((href: string) => (
                    <link key={href} rel='stylesheet' href={href} />
                ))}

                <title>CrUX</title>
            </head>
            <body className='p-4'>
                {children}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `assetManifest = ${JSON.stringify(assets)};`
                    }}
                />
            </body>
        </html>
    )
}

export default HtmlWrapper
