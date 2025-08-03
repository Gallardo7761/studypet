import '@/css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import Header from '@/components/layout/Header'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Container fluid>

      </Container>
      <Footer />
    </>
  )
}

export default App
