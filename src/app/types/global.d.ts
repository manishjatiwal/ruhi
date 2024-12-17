export {}

declare global {
    const __CLIENT__: boolean
    const __HOST__: string
    const __SERVER__: boolean

    interface Window {
        assetManifest: {
            links: string[]
        }
    }
}
