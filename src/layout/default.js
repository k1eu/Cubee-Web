import LayoutMeta from 'layout/default/meta';
import LayoutHeader from 'layout/default/header';
import LayoutFooter from 'layout/default/footer';

const Layout = ({ children }) => {
    return (
      <>
        <LayoutMeta />
  
        <div className="flex flex-col h-screen">
          <LayoutHeader />
          <main className="mb-auto">{children}</main>
          <LayoutFooter />
        </div>
      </>
    )
  };
  
  export default Layout