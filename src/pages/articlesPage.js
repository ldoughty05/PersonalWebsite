import { Desktop64 } from '../features/desktop64/desktop64.js'
import { ContentWindow } from '../features/contentWindow/contentWindow.js'
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