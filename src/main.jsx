import { createRoot } from 'react-dom/client'
import Navbar from './navbar.jsx'
import Box1 from './box1.jsx'
import Box2 from './box2.jsx'
import Box3 from './box3.jsx'
import Skill from './skill.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <Navbar></Navbar>
  <Box1></Box1>
  <Box2></Box2>
  <Box3></Box3>
  <Skill></Skill>

  </>
    
  
)
