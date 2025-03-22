import React from 'react'

function LandingPage() {
  return (
    // <main>
    <div className='landingPage'>
      <div className="container">
        <div className="row">

          <div className="bonusOffer text-light container p-3 col-6 col-offset-1 mx-2 col-lg-4 col-offset-3 col-md-8 col-md-2">
            <h3>Earn cash back </h3>
            <p>Earn $200 cash back after spending $1,500 in the first 6  <br /> months of account opening.</p>
            <button type="button" onClick={() => window.open('https://online.citi.com/US/ag/cards/application?app=UNSOL&ID=3131&HKOP=8ac2547fcb6ed5b878b09799728ec0af58f1456cd6336e02a71ef633f1311e16&intc=HP24_CC_App_STD_lowAPR25', "_blank")} className='btn btn-light text-dark' >See Offer</button>
          </div>
        </div>
      </div>
    </div>
    // {/* </main> */}
  )
}

export default LandingPage