import Link from 'next/link'

const Header = () => (
  <div className='header'>
    <div className='container'>
      <img src="/static/images/aricka-logo-white.png"
         srcset="/static/images/aricka-logo-white@2x.png 2x"
         className="aricka-logo"/>
      <div className='text-right'>
        <nav>
          <a href="#">
            ABOUT
          </a>
          <a href="#">
            PORTFOLIO
          </a>
          <a href="#">
            RESUME
          </a>
          <a href="#">
            {'LET\'S CHAT'}
          </a>
        </nav>
      </div>
    </div>
  </div>
)

export default Header
