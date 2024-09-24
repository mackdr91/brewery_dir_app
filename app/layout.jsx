import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";
import ConditionalNavbar from "@/utils/conditionalnavbar";
import AuthProvider from '@/components/AuthProvider';

export const metadata = {
  title: "",
  description: "",
  keywords: "",
  description: "",
};
const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
    <html>
      <body>
        <ConditionalNavbar />
        <main>{children}</main>

        <Footer />
      </body>
    </html>
    </AuthProvider>
  );
};

export default MainLayout;
