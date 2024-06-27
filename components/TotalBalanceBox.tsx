import AnimationCounter from './AnimationCounter'
import DonatChart from './DonatChart'

const TotalBalanceBox = ({accounts, totalBanks, totalCurrentBalance}: TTotalBalanceBox) => {
  return (
    <section className='total-balance px-4 py-2 w-full  shadow-md'>
        <div className="total-balance-chart w-full h-40">
            <DonatChart accounts={accounts} />
        </div>
        <div className="flex flex-col gap-4">
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