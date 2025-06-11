import { Desktop64 } from '../features/desktop64/desktop64.jsx'
import { ContentWindow } from '../features/contentWindow/contentWindow.jsx'
import { Outlet } from 'react-router-dom';
export default function ArticlesPage() {
  return (
    <>
      <Desktop64 >
        <ContentWindow>
          <Outlet />
        </ContentWindow>
      </Desktop64 >
    </>
  )
}