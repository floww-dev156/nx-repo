import tw, { styled } from 'twin.macro'

export const BaseHKGroteskText = styled.span`
   font-family: Inter;
   white-space: pre-wrap;
`
export const BaseInterText = styled.span`
   font-family: Inter;
   white-space: pre-wrap;
`
export const BaseHKGroteskMediumText = styled(BaseHKGroteskText)`
   font-weight: 500;
`

export const BaseHKGroteskSemiBoldText = styled(BaseHKGroteskText)`
   font-weight: 600;
`
export const BaseHKGroteskBoldText = styled(BaseHKGroteskText)`
   font-weight: 700;
`

export const TextFontS3Subtitle = styled(BaseHKGroteskText)`
   ${tw`text-14px`}
`
export const TextFontLabel = styled(BaseHKGroteskBoldText)`
   ${tw`text-12px`}
`

export const ButtonFontAASmall = styled(BaseHKGroteskSemiBoldText)`
   ${tw`text-12px`}
`

export const ButtonFontAAMedium = styled(BaseHKGroteskSemiBoldText)`
   ${tw`text-14px`}
`

export const ButtonFontAALarge = styled(BaseHKGroteskBoldText)`
   ${tw`text-16px`}
`
export const ButtonFontAATiny = styled(BaseHKGroteskSemiBoldText)`
   ${tw`text-10px`}
`
export const ButtonFontAAGiant = styled(BaseHKGroteskBoldText)`
   ${tw`text-18px`}
`
export const TextFontL2Label = styled(BaseHKGroteskSemiBoldText)`
   ${tw`text-12px`}
`
export const TextFontInterSemiBold = styled(BaseInterText)`
   font-weight: 600;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.33;
   letter-spacing: 0.6px;
   text-align: left;
`
