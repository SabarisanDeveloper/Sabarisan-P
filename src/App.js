import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow">
        <Profile />
      </main>
      <Footer />
    </div>
  );
};

export default App;
