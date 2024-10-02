
const Hero = () => {
  return (
    <div className = "heroSection">
        <img src = "/heroImage1.png" className = "heroImage"></img>
        <img src = "/heroImage2.png" className = "heroImage"></img>
        <a href = "#items">
          <button className = "heroButton">
              Shop now
          </button>
        </a>
    </div>
  )
}

export default Hero