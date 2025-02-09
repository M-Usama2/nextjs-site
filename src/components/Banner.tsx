import './Banner.css'

const Banner = () => {
  return (
    <div className="py-3 text-center banner">
      <div className="container">
        <p className='text-md'>
          <span className='hidden sm:inline'>Introducing a completely redesigned interface - {""}</span>

          <a href="#" className="underline underline-offset-4 font-medium">
            Explore the demo
          </a>
        </p>
      </div>
    </div>
  )
}

export default Banner