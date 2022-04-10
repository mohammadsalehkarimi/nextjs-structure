import * as React from "react"
import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import store from "../src/redux/store"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
const queryClient = new QueryClient()

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store().store}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </Provider>
  )
}
export default MyApp
