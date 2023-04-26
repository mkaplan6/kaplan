export default function Navbar() {
    return <nav className="nav" style={{height: 75, width: 1540}}>
        <a href="/" className="site-title">Malcolm Kaplan</a>
        <ul>
            <li>
                <a href="resume">Resume</a>
            </li>
            <li>
                <a href="Work">Work</a>
            </li>
            <li>
                <a href="Activities">Activities</a>
            </li>
            <li>
                <a href="linkedin" target="_blank">LinkedIn</a>
            </li>
            <li>
                <a href="github" target="_blank">Github</a>
            </li>
            {/* <li>
                <a href="work">Work</a>
            </li> */}
        </ul>
    </nav>
}