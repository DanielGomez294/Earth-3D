import Spline from '@splinetool/react-spline';


function App() {

  return (
    <div className='bg-[#2D2E32]'>
      <header>
        <nav className='flex justify-between px-12 py-12'>
          <h1 className='text-white text-3xl  '>Earth.</h1>
          <ul className='flex justify-center gap-12 '>
            <li><a className='text-white text-lg' href="https://my.spline.design/untitled-916abef6f71c3fdf4a8187103822badd/">Our misions</a></li>
            <li><a className='text-white text-lg' href="https://my.spline.design/untitled-916abef6f71c3fdf4a8187103822badd/">Future projects</a></li>
            <li><a className='text-white bg-blue-500 p-3 rounded-lg px-6 text-lg' href="https://my.spline.design/untitled-916abef6f71c3fdf4a8187103822badd/">Join us</a></li>
          </ul>
        </nav>
      </header>
      <iframe
        className='h-screen'
        src="https://my.spline.design/untitled-916abef6f71c3fdf4a8187103822badd/"
        width="100%"
      >

      </iframe>

    </div>
  )
}

export default App
