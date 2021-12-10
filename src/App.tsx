import { BrowserRouter as Router } from "react-router-dom"

import { AuthProvider } from "./hooks/use-auth"
import Routes from "./routes"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes />
      </AuthProvider>

      <GlobalStyle />
    </Router>
  )
}

export default App
