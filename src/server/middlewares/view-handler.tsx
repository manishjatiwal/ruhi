import { renderToPipeableStream } from 'react-dom/server'
import type { Request, Response } from 'express'

import App from 'app/index'
import HTML from 'app/html-wrapper'

// @ts-ignore: Because it dosen't pre exist in repo at the time of deployment.
import resources from '../resources.json'

async function render(request: Request, response: Response) {
    const { pipe } = renderToPipeableStream(
        <HTML assets={{ links: [resources['app.css']] }}>
            <App />
        </HTML>,
        {
            bootstrapScripts: [resources['external.js'], resources['app.js']],
            onShellReady() {
                response.setHeader('content-type', 'text/html')
                pipe(response)
            }
        }
    )
}

export default render
