import Link from 'next/link'
import React from 'react'

function Navigation() {
  return (
    <header>
        <div>Navigation</div>
          <nav>
    <ul>
        <li><Link href="/"> Home</Link></li>
        <li><Link href="/about"> About</Link></li>
        <li><Link href="/service"> service</Link></li>
        <li><Link href="/servercomp"> servercomp</Link></li>
        <li><Link href="/clientcomp"> clientComp</Link></li>
    </ul>
  </nav>

    </header>
    
  )

}

export default Navigation