import AnimationCounter from './AnimationCounter'
import DonatChart from './DonatChart'

const TotalBalanceBox = ({accounts, totalBanks, totalCurrentBalance}: TTotalBalanceBox) => {
  return (
    <section className='total-balance'>
        <div className="total-balance-chart h-40 w-80 drop-shadow-xl">
            <DonatChart accounts={accounts} />
        </div>
        <div className="flex flex-col gap-6">
            <h2 className="header-2">
                {totalBanks} Bank Accounts
            </h2>
            <div className="flex flex-col gap-2">
                <p className='total-balance-label'>Total Current Balance</p>
                <div className="total-balance-amount flex items-center gap-2">
                    <AnimationCounter amount={totalCurrentBalance} />
                    {/* {totalCurrentBalance} */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox