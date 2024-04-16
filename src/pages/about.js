import * as React from "react"
import { Link } from "gatsby"
import ".//styles.css"



const about = () => {
  return (
    <div>
        <header>
            <nav className="navstyle">
            <Link className="navstyle" to="index">Go to Home Page</Link>
            </nav>
            <h1>About Galactica Star 9</h1>
        </header>

        <body>
        <p className="about-text"></p>
        </body>

    </div>
  )
}

export default about
export const Head = () => <title>About Page</title>