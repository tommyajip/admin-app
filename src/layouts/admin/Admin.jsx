import { createContext, useContext, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

import './styles.css';

const AdminLayoutContext = createContext();

export const useAdminLayoutContext = () => useContext(AdminLayoutContext);

export default function AdminLayout({ children }) {
  const [data, setData] = useState();
  const [hideSidebar, setHideSidebar] = useState(false);
  return (
    <AdminLayoutContext.Provider value={{
      data,
      setData,
    }}
    >
      <section className="admin__app">
        <Navbar
          onHideSidebar={() => setHideSidebar(!hideSidebar)}
          isHideSidebar={hideSidebar}
        />
        <Sidebar isHideSidebar={hideSidebar} />
        <main className={hideSidebar ? 'toggle' : ''}>
          {children}
        </main>
      </section>
    </AdminLayoutContext.Provider>
  );
}
