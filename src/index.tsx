import ContentstackUIExtension, {
  Extension,
} from '@contentstack/ui-extensions-sdk'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './components/App/App'

ContentstackUIExtension.init().then((extension: Extension) => {
  // Extract config for component
  // const { URL, HEADERS } = extension.config

  ReactDOM.render(
    <React.StrictMode>
      <App extension={extension} />
    </React.StrictMode>,
    document.getElementById('root')
  )
})
