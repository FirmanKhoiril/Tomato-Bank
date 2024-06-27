"use client"
import CountUp from 'react-countup'

const AnimationCounter = ({amount}: {amount: number}) => {
  return (
    <div className='w-full'>
        <CountUp decimal=',' decimals={2} prefix='$' start={0} end={amount} duration={3.5} />
    </div>
  )
}

export default AnimationCounter