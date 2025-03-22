import React from 'react'

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <footer >
        <div className="container-fluid" id='footer' >
          <div className="row">
            <div className="col">
              <p ><a className='text-white fw-bold' target="_blank" style={{textDecoration:"none"}} href="https://synechron.com/"><span>
              © 2001-2025 Synechron, all rights reserved.</span></a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer