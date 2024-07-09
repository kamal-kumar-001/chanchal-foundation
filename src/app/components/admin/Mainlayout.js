import Footer from "../home/footer";
import Navbar from "../home/navbar";

const MainLayout = ({ children }) => {
  const navigation = [
    { name: "Dashboard", href: "/admin" },
    { name: "Donators", href: "/admin/donator" },
    { name: "Contacts", href: "/admin/contacts" },
    // { name: "Users", href: "/admin/users" },
    { name: "Members", href: "/admin/members" },
  ]
  return (
    <>
    <Navbar navigation={navigation} />
        {children}
      <Footer />
    </>
  );
};

export default MainLayout;
