import React from 'react'
import { useRouter } from 'next/router'
function ActiveLink({ children, href,classes,activeClass="active" }) {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={`${classes} ${router.pathname === href ? activeClass : ''}`}>
      {children}
    </a>
  )
}

export default ActiveLink
