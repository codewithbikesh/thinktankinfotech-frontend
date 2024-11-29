
// HOMEPAGE COMPONENTS 
import ShuffleHero from './components/homepage/ShuffleHero'
import { SmoothScrollHero } from './components/homepage/SmoothScrollHero'
import { NavbarWithMegaMenu } from './components/inludes/Navbar'
import {TextParallaxContentExample, TextParallaxContent, OverlayCopy, ExampleContent} from './components/homepage/Whatwedo'
import CarousalText from './components/homepage/Carousal'
import { DragCards } from './components/homepage/DragCards'
import {Routes, Route} from 'react-router-dom'
// HOMEPAGE COMPONENTS ENDS HERE
import {Aboutus} from './components/aboutus/Aboutus'
import Footer from './components/inludes/Footer'
import { Services } from './components/services/Services'

function App() {
  return (
<>
<NavbarWithMegaMenu></NavbarWithMegaMenu>






<Routes>
  <Route path='/' element={
<>
<ShuffleHero></ShuffleHero>
<SmoothScrollHero></SmoothScrollHero>
<TextParallaxContentExample></TextParallaxContentExample>
<TextParallaxContent 
  imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  subheading="Sub Heading"
  heading="Heading"
/>
<ExampleContent></ExampleContent>
<CarousalText></CarousalText>
<DragCards></DragCards  >
</>
    
    }></Route>
  
  <Route path='/about' element={<Aboutus></Aboutus>}></Route>
  <Route path='/services' element={<Services></Services>}></Route>
</Routes>

<Footer></Footer>
</>
  )
}

export default App
