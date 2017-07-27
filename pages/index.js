import Layout from '../containers/layout'
import PortfolioCard from '../components/portfolio_card'

const IndexPage = () => (
  <Layout>
    <div className='hero'>
      <div className='container'>
        <h1 className='intro'>
          {'Hey — I’m Aricka, \
            a designer & researcher \
            based in Fayetteville, AR. '}
          <a className='pink-btn'>
            VIEW WORK
          </a>
        </h1>
      </div>
    </div>

    <div className='bio'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <img src="/static/images/headshot-bw-cutout.png"
               srcSet="/static/images/headshot-bw-cutout@2x.png 2x"
               className="headshot-cutout"/>
          </div>
          <div className='col-md-6 col-sm-12'>
            <h2 className='bio-header'>
              It’s nice to meet you.
            </h2>
            <div className='bio'>
              <p>
                I’m Aricka, a designer currently working in Enterprise UX at RevUnit.
              </p>

              <p>
                Two years out of college, I’m fortunate to have had the opportunity to explore advertising, marketing, user experience design, and design research. My focus at <a href='https://revunit.com' target='_blank' rel='nofollow'>RevUnit</a> is on workforce transformation.
              </p>

              <p>
                Outside of work I am a musician (shameless band plug <a href='#'>here</a>), volunteer, hobbyist photographer, and stumbling my way through adulthood.
              </p>

              <p>
                Currently navigating the intersection of design, technology, and race.
              </p>
              <div className='social-nav'>
                <a href='https://instagram.com/arickacl' target='_blank' rel='nofollow'>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href='https://twitter.com/arickacl' target='_blank' rel='nofollow'>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href='https://www.linkedin.com/in/arickaclewis/' target='_blank' rel='nofollow'>
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='connect'>
      <h2 className='connect-header'>
        Let’s connect.
      </h2>
      <p className='connect-blurb'>
        Thanks for stopping by. If you want to chat more, don’t hesitate to reach out.
        <br/>
        I want to hear from you!
      </p>

      <a className='pink-btn'>
        DROP A LINE
      </a>
    </div>

    <div className='portfolio'>
      <div className='container'>
        <div className='row'>
          <PortfolioCard
            src='/static/images/next-day-dumpsters.png'
            srcset='/static/images/next-day-dumpsters@2x.png 2x'
            title='Next Day Dumpsters'
            subtext='Dynamic Landing Page, UI/UX, Google Analytics'
          />
          <PortfolioCard
            src='/static/images/pet-ems.png'
            srcset='/static/images/pet-ems@2x.png 2x'
            title='PetEms'
            subtext='Branding, Identity, UI/UX'
          />
        </div>

        <div className='row'>
          <PortfolioCard
            src='/static/images/country-outfitter.png'
            srcset='/static/images/country-outfitter@2x.png 2x'
            title='Country Outfitter'
            subtext='Marketing, Art Direction, Web Design'
          />
          <PortfolioCard
            src='/static/images/dashboard-template.png'
            srcset='/static/images/dashboard-template@2x.png 2x'
            title='Dashboard Template'
            subtext='Enterprise, UI/UX'
          />
        </div>

        <div className='row'>
          <PortfolioCard
            src='/static/images/user-journey.png'
            srcset='/static/images/user-journey@2x.png 2x'
            title='User Journey Map'
            subtext='UX Research, Research Documentation'
          />
          <PortfolioCard
            src='/static/images/daily-ui-challenge-highlights.png'
            srcset='/static/images/daily-ui-challenge-highlights@2x.png 2x'
            title='DailyUI Highlights'
            subtext='UI Design, Design Challenge'
          />
        </div>
      </div>

      <div className= 'text-center'>
        <h2>Want to see more work?</h2>
        <a className='pink-btn wider'>
          CONTACT
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
