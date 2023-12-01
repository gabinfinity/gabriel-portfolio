import React from 'react'
import { MyStatsNumbers, StatsFrame } from './MyStats.styles'

interface MyStatsTypes {
    numberStats: string,
    textStats: string
}

export function MyStats(props: MyStatsTypes) {
  return (
    <MyStatsNumbers>
        <StatsFrame>
            <span>{props.numberStats}</span>
            <h6>{props.textStats}</h6>
        </StatsFrame>
    </MyStatsNumbers>
  )
}
