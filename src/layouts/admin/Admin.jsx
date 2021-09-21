import { createContext, useContext, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

import './styles.css';

const AdminLayoutContext = createContext();

export const useAdminLayoutContext = () => useContext(AdminLayoutContext);

export default function AdminLayout({ children }) {
  const [data, setData] = useState();
  return (
    <AdminLayoutContext.Provider value={{
      data,
      setData,
    }}
    >
      <section className="admin__app">
        <Navbar />
        <Sidebar />
        <main>
          {children}
        </main>
      </section>
    </AdminLayoutContext.Provider>
  );
}
