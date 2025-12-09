import { Outlet } from 'react-router-dom'

const LayoutCenter = () => {
  return (
   <>
   <header>Header</header>
     <div className="">
         <Outlet />
     </div>
     <footer>Footer Section</footer>
   </>
  )
}

export default LayoutCenter