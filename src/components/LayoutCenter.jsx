import { Outlet } from 'react-router-dom'

const LayoutCenter = () => {
  return (
    <div className="layout-center">
        <Outlet />
    </div>
  )
}

export default LayoutCenter