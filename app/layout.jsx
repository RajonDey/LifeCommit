import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "LifeCommits",
  description:
    "LifeCommits, a vibrant community dedicated to personal growth, achievement, and inspiration. Join us on a transformative journey as you make meaningful commitments, achieve milestones, and inspire others along the way. Discover the power of commitment in unlocking your true potential and creating a positive impact. Together, lets commit, achieve, and inspire a life of purpose and fulfillment.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
