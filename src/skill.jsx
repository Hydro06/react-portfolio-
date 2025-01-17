import './skill.css'

 function Skill() {
  return (
    <>
    <h2 className="skill">Skills</h2>
    <div className="box4">
        <div ><button><img className="html" src=".\src\assets\Html.png"></img></button></div>
        <div ><button><img className="css" src=".\src\assets\CSS.png"></img></button></div>
        <div ><button><img className="python" src=".\src\assets\PY.jpg"></img></button></div>
        <div ><button><img className="linux" src=".\src\assets\Linux.png"></img></button></div>
        <div ><button><img className="github" src=".\src\assets\Github.png"></img></button></div>

    </div>

    <footer>
        <div className="Github"><a href="#"><img src=".\src\assets\Github.png"></img></a></div>
        <div className="Linkin"><a href="#"><img src=".\src\assets\linkin.png"></img></a></div>
    </footer>
    </>
  )
}

export default Skill