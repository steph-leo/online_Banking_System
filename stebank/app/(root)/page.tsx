import HeaderBox from '@/components/HeaderBox';
import React from 'react';

const Home: React.FC = () => {
  const loggedIn = {firstName: "Stephs"};
  return (
    <section className="home">
      <div className="home_content">
        <header className="home_header">
          <HeaderBox 
            type = "greetings"
            title = "welcome"
            user = {loggedIn?.firstName || "Guest"}
            subtext = "to your online bank and accouts and transactions efficiently." 

          />
        </header>
      </div>
    </section>
  );
};

export default Home;
