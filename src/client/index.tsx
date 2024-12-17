import { hydrateRoot } from 'react-dom/client'

import App from 'app/index'
import HTML from 'app/html-wrapper'
import './styles.css'

hydrateRoot(
    document,
    <HTML assets={window.assetManifest}>
        <App />
    </HTML>
)
