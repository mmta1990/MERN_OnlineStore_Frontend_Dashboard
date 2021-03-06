import React from 'react'
import AppStateProvider from 'state/AppStateProvider'
function MyApp ({ Component, pageProps }) {
  return <AppStateProvider>
    <Component {...pageProps} />
  </AppStateProvider>
}
export default MyApp
