import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-dark text-white">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#about" className="text-white">About</a></li>
              <li><a href="#services" className="text-white">Services</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              123 Street Name<br />
              City, State, 12345<br />
              Email: info@example.com<br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid text-center py-3">
        <p className="mb-0">&copy; 2024 Company Name. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer