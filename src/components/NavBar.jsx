function NavBar() {
    return (
        <nav style={{backgroundColor:"grey"}}>
            <p style={{color:"white", fontWeight:"bolder"}}>Casa San Martín</p>
            <ul>
                <li style={{listStyleType:"none"}}><a style={{textDecoration:"none", color:"white"}} href="#">Home</a></li>
                <li style={{listStyleType:"none"}}><a style={{textDecoration:"none", color:"white"}} href="#">Nosotros</a></li>
                <li style={{listStyleType:"none"}}><a style={{textDecoration:"none", color:"white"}} href="#">Lanas</a></li>
                <li style={{listStyleType:"none"}}><a style={{textDecoration:"none", color:"white"}} href="#">Mercería</a></li>
                <li style={{listStyleType:"none"}}><a style={{textDecoration:"none", color:"white"}} href="#">Librería</a></li>
                <li style={{listStyleType:"none"}}><a style={{textDecoration:"none", color:"white"}} href="#">Juguetería</a></li>
            </ul>
        </nav>
    )
}

export default NavBar