import './box3.css'

function Box3(){
  
  return (
   <>  <h2 className="li">Projects</h2>
   <div className ="box3">
       
       <div className="sub">
           <img src='.\src\assets\sub.jpg'></img>
           <h3> HTML&CSS Portfolio</h3>
           <p>I developed a personal portfolio website using HTML and CSS to showcase my skill and knowledge above Web</p>
           <button><a href="#">Github</a></button>
       </div>
       <div className="sub1">
           <img src='.\src\assets\sub1.jpg'></img>
           <h3>Blood donar & management system</h3>
           <p>A Blood Donor and Management System is a software application designed to streamline the process of managing blood donations, donors, and recipients. It facilitates activities such as registering donors, tracking their eligibility, managing blood inventory, matching blood groups, and coordinating donations with hospitals or patients in need. The system improves efficiency, ensures traceability, and helps maintain a reliable supply of safe blood for emergencies and routine medical procedures</p>
           <button><a href="#">Github</a></button>
       </div>
       <div className ="sub2">
       <img src='.\src\assets\sub2.png'></img>
           <h3>Encode&Decode with python</h3>
           <p>Base64 encoding is a method to encode binary data into a text format, commonly used for transmitting data like images or files in text-based formats</p>
           <button><a href="#">Github</a></button>
       </div>
   </div>
     </>
)
}

export default Box3