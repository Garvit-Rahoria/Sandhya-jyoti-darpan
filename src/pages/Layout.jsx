import { useEffect, useRef } from 'react'
import Header from '../components/Header'
import { Outlet, useLocation } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

function Layout() {
  const loadingRef = useRef(null)
  const location = useLocation()
  const hideHeader = location.pathname.startsWith('/web-stories')

  useEffect(() => {
    loadingRef.current?.continuousStart()

    const timer = setTimeout(() => {
      loadingRef.current?.complete()
    }, 300)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <>
      <LoadingBar color="#ff6b00" ref={loadingRef} height={2} />
      {!hideHeader && <Header />}
      <Outlet />
    </>
  )
}

export default Layout
