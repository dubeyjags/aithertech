import { Outlet } from 'react-router-dom'

const LayoutCenter = () => {
  return (
    <div className="layout-center">
        <h2>Layout Center Component</h2>
        <Outlet />
    </div>
  )
}

export default LayoutCenter