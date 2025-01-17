import './box2.css'

function Box2() {


    return (
        <form className="box2" action="https://api.web3forms.com/submit" method="POST">
            <h2>Contact Me</h2>
            <input type="hidden" name="access_key" value="c28a9edd-a7da-4c58-88d8-43a8c96edb74"></input>
            <input type="text" name="name" id="name" placeholder="Your Name" required></input>
            <input type="email" name="email" id="email" placeholder="Your Email" required></input>
            <input type="text" name="message" id="Message" placeholder="Your Message" required></input>
            <button className="submit">Submit</button>

        </form>

         )
}

          export default Box2