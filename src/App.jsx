import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    document.body.append(script);
  }, []);

  return (
    <>
      <div className="home-screen container-fluid" style={{ backgroundImage: "url('/images/bg.jpg'" }}>
        <div className="home-cover">
          <div id="menu-jk" className="header">
            <div className="container">
              <div className="row">
                <div className="col-md-3 logo">
                  {/* <img className="logo-wt" src="/images/face.png" alt="" /> */}

                  <a data-toggle="collapse" data-target="#menu" href="#menu">
                    <i className="fas d-block d-md-none small-menu fa-bars" />
                  </a>
                </div>
                <div id="menu" className="col-md-9 d-none d-md-block">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#about_me">About Me</a>
                    </li>
                    <li>
                      <a href="#contact_me">Contact Me</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row home-detail">
              <div className="col-md-7 mx-auto homexp">
                <h5>Hello I&apos;m</h5>
                <h2>Lily Li</h2>

                <p>Follow me trade</p>
                <div className="texda">
                  <a href="https://lilyli8.blogspot.com/">Read blog</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about_me" className="about-sestion container-fluid">
        <div className="container">
          <div className="session-title row">
            <h2>About Me</h2>
            {/* <p>The new common language will be more simple and regular than.</p> */}
          </div>
          <div className="about-row row">
            <div className="col-md-5">
              <img className="p-4" src="images/face.png" alt="" />
            </div>
            <div className="col-md-7">
              <p>
                If you want to be the trader you have always yearned to be, if you want to carve a unique second career,
                work remotely and independently across continents & time zones connected to network and to base, make
                money in all market conditions in the Malaysian equities market, learn my tested & proven trading
                strategy ... please complete the form below.
              </p>
              <p>
                I acquired tremendous knowledge thru my over 3 decades long career in the bank, driving business and
                leading people.The experience in each function area had been intense 365 degrees all-round, encompassing
                Retail Banking, Commercial & Corporate Lending, Risk Management & Legal Documentation. I thoroughly
                enjoyed doing business for the bank.
              </p>
              <p>
                Leveraging on my formal training in Credit and Risk Management, I employed the combined power of my
                proficiency in Fundamental Analysis with Technical Charts Analysis and am an independent trader in
                Malaysian equities. I trade following my price charts and chart setups.
              </p>
              <p>
                You will learn how to manage positions & risks, understand supply & demand dynamics, market psychology &
                business cycles. The sweetspot is in the sitting...... studying how much the wiggles and moves, the
                chart patterns and trendlines to catch where the money is, know when to scaleout on profit or cut
                position, wait to trade the setups.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="contact_me"
        data-tf-widget="ONUmAUhT"
        data-tf-opacity="100"
        data-tf-iframe-props="title=Contact Form"
        data-tf-transitive-search-params
        data-tf-medium="snippet"
        style={{ width: '100%', height: '500px' }}
      />
    </>
  );
}

export default App;
