'use client'
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div>
      <CountUp
       start={0}
      end={amount}
      duration={2}
      separator=','
      decimal='.'
      decimals={2}
      prefix='$'
      />
    </div>
  )
}

export default AnimatedCounter
