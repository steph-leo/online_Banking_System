import React from 'react'

const TotalBalanceBox = ({
    accounts = [], totalBanks, totalCurrentBalance
}: TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div>
            {/* DoughnutChart */}
        </div>
        <div className= 'flex flex-col gap-6'>
            <h2 className='header-2'>
                Banks Accounts: {totalBanks} 

            </h2>
            <div className='flex flex-col gap-2'>
                <p className='total-balance-label'>
                    Total current balance:
                </p>
                <p className='total-balance-amount flex-center'>
                    {totalCurrentBalance}
                </p>
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox