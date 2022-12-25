import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home () {
return (
    <>
      
      <Hero
      cName = "hero"
      title = "JIWAN KOSH" 
      text = " A shared commitment to relieve suffering and improve the lives of needy people."
      buttonText = "Start Funding"
      url = "/"
      btnClass = "show"
      sectionone = "We are raising money for the needy people who needs money for
      their any situation and your contribution will make a great
      impact, whether you donate Rs 5 or Rs 5000. Many of the people
      seen raising funds in the street. So this is the platform for those
      needy people to raise fund through online platform. Thank you
      for your support!"
      />
      <Footer/>
     </>
    
)
}

export default Home;