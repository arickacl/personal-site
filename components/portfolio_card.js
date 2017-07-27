const PortfolioCard = ({ src, srcset, title, subtext }) => (
  <div className='col-sm-12 col-md-6 portfolio-card'>
    <img src={src}
         srcSet={srcset}
         className='portfolio-img'/>
    <h3 className='portfolio-title'>
      {title}
    </h3>
    <p className='portfolio-subtext'>
      {subtext}
    </p>
  </div>
)

export default PortfolioCard
