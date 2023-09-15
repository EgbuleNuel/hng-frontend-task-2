const Footer = () => {
  return (
      // Footer Component
      <div className='footer'>
          <div className="socialIcons">
              <Link href="#"><BsFacebook /></Link>
              <Link href="#"><BiLogoInstagramAlt /></Link>
              <Link href="#"><AiFillTwitterCircle /></Link>
              <Link href="#"><FaYoutube /></Link>
          </div> 

          <div className="footerLinks">
              <Link href="#">Conditions of Use</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Press Room</Link>
          </div>

          <div className="copyright">
              <p>&copy; 2023 MovieBox by Esther Omono Atakere</p>
          </div>           
      </div>
  )
}