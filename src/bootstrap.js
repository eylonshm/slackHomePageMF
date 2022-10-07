import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const mount = (el) => {
  const root = createRoot(el)
  root.render(<App />)
  //   return {}
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#home-page-dev')

  if (devRoot) {
    mount(devRoot)
  }
}

export { mount }
