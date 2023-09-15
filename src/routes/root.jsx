import Header from "../components/Header";
import TitlePage from "../components/UI/TitlePage";
export default function Root() {
    return (
      <div>
      <TitlePage
      title="Bienvenue sur le site du bootcamp!"
      subtitle="Voici les dernières news"
      />
      <Header/>
      </div>
        
    );
  }