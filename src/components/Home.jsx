import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {
  return (
    <div className="mx-auto">
      <Navbar />

      <div className="text-center my-8 mx-6">
        <h1 className="text-6xl font-bold ">
          🏵️{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-warning to-sky-500 ">
            DaisyUI Menu
          </span>
        </h1>
        <p className="mt-4 max-w-md mx-auto">
          Silahkan pilih menu dibawah ini untuk melihat penggunaan dan percobaan
          komponen DaisyUI
        </p>
        <div className="divider max-w-sm mx-auto"></div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mx-40 md:mx-20 gap-6">
        <Link to="/actions">
          <img className="img-menu " src="/images/Frame1.jpg" alt="menu1" />
        </Link>
        <Link to="/data-display">
          <img className="img-menu " src="/images/Frame2.jpg" alt="menu2" />
        </Link>

        <Link to="/data-input">
          <img className="img-menu" src="/images/Frame3.jpg" alt="menu3" />
        </Link>

        <Link to="/layout">
          <img className="img-menu " src="/images/Frame4.jpg" alt="menu4" />
        </Link>
        <Link to="/navigation">
          <img className="img-menu" src="/images/Frame5.jpg" alt="menu5" />
        </Link>
        <Link to="/">
          <img className="img-menu" src="/images/Frame6.jpg" alt="menu6" />
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Home
