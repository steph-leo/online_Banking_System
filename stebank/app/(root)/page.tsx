import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = {firstName: "Stephs"};
  return (
    <section className="home">
      <div className="home_content">
        <header className="home_header">
          <HeaderBox 
            type = "greeting"
            title = "welcome"
            user = {loggedIn?.firstName || "Guest"}
            subtext = "STEBANK to your online bank and accouts and transactions efficiently." 

          />
          <TotalBalanceBox
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {0}
          />
        </header>
      </div>
    </section>

  );
};

export default Home;
