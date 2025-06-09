import * as React from 'react'
import BaseRewardIcon from './BaseRewardIcon'
import RewardIconGolden from './RewardIconGolden'
import { IconPropsType } from '../types'

interface RewardCoinIconProps extends IconPropsType {
   isGolden?: boolean
}

function RewardCoinIcon({ isGolden, ...rest }: RewardCoinIconProps) {
   if (isGolden) return <RewardIconGolden {...rest} />
   return <BaseRewardIcon {...rest} />
}

export default RewardCoinIcon
