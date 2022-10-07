import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { createBrowserHistory } from 'history'

const mount = (el) => {
  const history = createBrowserHistory()

  const root = createRoot(el)
  root.render(<App />)

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location
      if (pathname !== nextPathname) {
        history.push(nextPathname)
      }
    },
  }
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#home-page-dev')

  if (devRoot) {
    mount(devRoot)
  }
}

export { mount }
