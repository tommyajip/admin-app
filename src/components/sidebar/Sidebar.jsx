import {
  Link,
  useLocation,
} from 'react-router-dom';

export default function Sidebar() {
  const { pathname } = useLocation();

  const activeMenu = (currentUrl, urlPath) => (currentUrl === urlPath ? 'active' : '');

  return (
    <aside>
      <div className="brand">
        <span className="brand__title">Frontend</span>
        &nbsp;Course
      </div>
      <div className="sidemenu">
        <div className="sidemenu__item">
          <Link to="/" className={activeMenu('/', pathname)}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </span>
            <span>
              Dashboard
            </span>
          </Link>
        </div>
        <div className="sidemenu__item">
          <div className="sidemenu__item-separator">
            Management
          </div>
        </div>
        <div className="sidemenu__item">
          <Link to="/products" className={activeMenu('/products', pathname)}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </span>
            <span>
              Products
            </span>
          </Link>
        </div>
        <div className="sidemenu__item">
          <Link to="/invoices" className={activeMenu('/invoices', pathname)}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
            <span>
              Invoices
            </span>
          </Link>
        </div>
        <div className="sidemenu__item">
          <div className="sidemenu__item-separator">
            Settings
          </div>
        </div>
        <div className="sidemenu__item">
          <Link to="/users" className={activeMenu('/users', pathname)}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            <span>
              Users
            </span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
