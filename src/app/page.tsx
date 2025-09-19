import Hero from "@/components/Hero"
import NavBar from "@/components/NavBar"
import Certifications from "@/sections/Certifications"
import Contact from "@/sections/Contact"
import Projects from "@/sections/Projects"


function page() {

  return (
    <div>
      <NavBar/>
      <Hero/>
      <Projects/>
      <Certifications/>
      <Contact/>

    </div>
  )
}

export default page
