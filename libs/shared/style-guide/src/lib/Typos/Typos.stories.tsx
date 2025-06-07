import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import { storiesOf } from '@storybook/react'

import {
   Text7XlLeadingNoneFontBold,
   Text6XlLeadingNoneFontSemibold,
   Text5XlLeadingNoneFontBold,
   Text3xlLeading9FontSemibold,
   Text2xlLeading8FontSemibold,
   TextXlLeading7FontSemibold,
   TextLgLeading7FontMedium,
   TextBaseLeading6FontMedium,
   TextSmLeading5FontMedium,
   TextBaseLeading6FontNormal,
   TextSmLeading5FontNormal,
   TextXsLeading4FontNormal,
   TextXsLeading4FontMedium,
} from './baseIndex'
import {
   TextFontLabel,
   ButtonFontAASmall,
   ButtonFontAAGiant,
   ButtonFontAALarge,
   ButtonFontAAMedium,
   TextFontL2Label,
   ButtonFontAATiny,
} from './styledComponents'

export const TyposWrapper = styled.div`
   ${tw`flex flex-wrap 	items-center`}
`

export const TextFontS1SubtitleTypo = styled(TextBaseLeading6FontMedium)`
   ${tw`m-2`}
`
export const TextFontS2SubtitleTypo = styled(TextSmLeading5FontMedium)`
   ${tw`m-2`}
`

export const TextFontLabelTypo = styled(TextFontLabel)`
   ${tw`m-2`}
`
export const TextFontL2LabelTypo = styled(TextFontL2Label)`
   ${tw`m-2`}
`
export const TextFontC1CaptionTypo = styled(TextXsLeading4FontNormal)`
   ${tw`m-2`}
`
export const TextFontC2CaptionTypo = styled(TextXsLeading4FontMedium)`
   ${tw`m-2`}
`

export const TextFontP1ParagraphTypo = styled(TextBaseLeading6FontNormal)`
   ${tw`m-2`}
`
export const TextFontP2ParagraphTypo = styled(TextSmLeading5FontNormal)`
   ${tw`m-2`}
`

export const ButtonFontAASmallTypo = styled(ButtonFontAASmall)`
   ${tw`m-2 bg-blue-500 p-3`}
`
export const ButtonFontAATinyTypo = styled(ButtonFontAATiny)`
   ${tw`m-2 bg-blue-500 p-3`}
`
export const ButtonFontAAGiantTypo = styled(ButtonFontAAGiant)`
   ${tw`m-2 bg-blue-500 p-3`}
`
export const ButtonFontAALargeTypo = styled(ButtonFontAALarge)`
   ${tw`m-2 bg-blue-500 p-3`}
`
export const ButtonFontAAMediumTypo = styled(ButtonFontAAMedium)`
   ${tw`m-2 bg-blue-500 p-3`}
`
export const TextFontT1TitleTypo = styled(Text7XlLeadingNoneFontBold)`
   ${tw`m-2`}
`

export const TextFontT2TitleTypo = styled(Text6XlLeadingNoneFontSemibold)`
   ${tw`m-2`}
`

export const TextFontH1HeadlineTypo = styled(Text5XlLeadingNoneFontBold)`
   ${tw`m-2`}
`

export const TextFontH3HeadlineTypo = styled(Text3xlLeading9FontSemibold)`
   ${tw`m-2`}
`

export const TextFontH4HeadlineTypo = styled(Text2xlLeading8FontSemibold)`
   ${tw`m-2 `}
`
export const TextFontH5HeadlineTypo = styled(TextXlLeading7FontSemibold)`
   ${tw`m-2`}
`

export const TextFontH6HeadlineTypo = styled(TextLgLeading7FontMedium)`
   ${tw`m-2`}
`
const Typos = () => (
   <TyposWrapper>
      <TextFontT1TitleTypo>TextFontT1Title</TextFontT1TitleTypo>
      <TextFontT2TitleTypo>TextFontT2Title</TextFontT2TitleTypo>
      <TextFontH1HeadlineTypo>TextFontH1Headline</TextFontH1HeadlineTypo>
      <TextFontH3HeadlineTypo>TextFontH3Headline</TextFontH3HeadlineTypo>
      <TextFontH4HeadlineTypo>TextFontH4Headline</TextFontH4HeadlineTypo>
      <TextFontH5HeadlineTypo>TextFontH5Headline</TextFontH5HeadlineTypo>
      <TextFontH6HeadlineTypo>TextFontH6Headline</TextFontH6HeadlineTypo>
      <TextFontS1SubtitleTypo>
         TextBaseLeading6FontMedium
      </TextFontS1SubtitleTypo>
      <TextFontS2SubtitleTypo>TextSmLeading5FontMedium</TextFontS2SubtitleTypo>
      <TextFontLabelTypo>TextFontLabel</TextFontLabelTypo>
      <TextFontC1CaptionTypo>TextXsLeading4FontNormal</TextFontC1CaptionTypo>
      <TextFontC2CaptionTypo>TextXsLeading4FontMedium</TextFontC2CaptionTypo>
      <TextFontP1ParagraphTypo>
         TextBaseLeading6FontNormal
      </TextFontP1ParagraphTypo>
      <TextFontP2ParagraphTypo>
         TextSmLeading5FontNormal
      </TextFontP2ParagraphTypo>
      <ButtonFontAATinyTypo>ButtonFontAATiny</ButtonFontAATinyTypo>
      <ButtonFontAASmallTypo>ButtonFontAASmall</ButtonFontAASmallTypo>
      <ButtonFontAAMediumTypo>ButtonFontAAMedium</ButtonFontAAMediumTypo>
      <ButtonFontAALargeTypo>ButtonFontAALarge</ButtonFontAALargeTypo>
      <ButtonFontAAGiantTypo>ButtonFontAAGiant</ButtonFontAAGiantTypo>
   </TyposWrapper>
)

storiesOf('Titles and text/Typos', module).add('Sample typos', () => <Typos />)
