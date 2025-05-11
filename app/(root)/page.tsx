import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'
import RightSidebar from '@/components/RightSidebar'


const Home = () => {
  const loggedIn = {firstName: "Chakri", lastName: "Keerthi", email: "chakri@gmail.com"}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
           accounts={[]}
           totalBanks={1}
           totalCurrentBalance={1230.05}
           />
        </header>
      </div>
      <RightSidebar
        loggedIn={loggedIn}
        transactions={[]}
        banks={[{ currentBalance:123.05}, { currentBalance:123.05}]}
      />
    </section>
  )
}

export default Home
