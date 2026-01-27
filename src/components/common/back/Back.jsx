import React from "react"
import { useLocation } from "react-router-dom"

const Back = ({ title }) => {
  const location = useLocation()
  
  const formatBreadcrumb = (path) => {
    if (!path) return 'Home'
    return path
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  const breadcrumb = location.pathname.split("/")[1]
  const formattedBreadcrumb = breadcrumb ? formatBreadcrumb(breadcrumb) : ''

  return (
    <>
      <section className='back'>
        <h2>Home / {formattedBreadcrumb}</h2>
        <h1>{title}</h1>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Back
