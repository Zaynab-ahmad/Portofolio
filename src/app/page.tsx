import Hero from "@/sections/Hero"
import NavBar from "@/components/NavBar"
import Certifications from "@/sections/Certifications"
import Contact from "@/sections/Contact"
import Projects from "@/sections/Projects"
import Footer from "@/sections/Footer"


function page() {

  return (
    <div>
      <NavBar/>
      <Hero/>
      <Projects/>
      <Certifications/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default page
