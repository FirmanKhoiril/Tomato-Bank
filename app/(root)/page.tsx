import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = "Firman"
  return (
    <section className='home w-full'>
        <div className="home-content">
            <header className="home-header w-full px-4">
                <HeaderBox 
                type="greeting"
                title="Welcome"
                user={loggedIn}
                subtext="Access and manage your account and transaction efficienly"
                />
                <TotalBalanceBox 
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.35}
                />
            </header>
        </div>

    </section>
  )
}

export default Home