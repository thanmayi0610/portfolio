// import React, { ReactNode } from 'react';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
// import './Layout.css';

// interface LayoutProps {
//   children: ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   return (
//     <div className="layout">
//       <Navbar />
//       <main className="main-content">
//         {children}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;
import React, { ReactNode } from 'react';
// import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
    <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;