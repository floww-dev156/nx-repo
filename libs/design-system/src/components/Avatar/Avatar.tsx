import cn from 'classnames'
import React, { ReactElement } from 'react'

import { useFocusRing } from '@react-aria/focus'

import { useThemeContext } from '../../Theme/Provider'
import { ExtendedSize } from '../../types'

import { avatarFocusClassName } from './AvatarGroup/styles'
import {
   avatarContainerClassName,
   avatarWithIconContainer,
   avatarWithImageClassName,
   avatarWithTextContainerClassName,
   statusIconClassName
} from './styles'
import { AvatarShape, AvatarStatus, AvatarType } from './types'
import {
   getAvatarShape,
   getAvatarSize,
   getFontSize,
   getStatusIndicationSize,
   getTwoLettersFromUsername,
   getUserIconSize
} from './utils'

import { getAvatarProfileTextColor, getAvatarProfileBgColor } from './constants'
import './Avatar.css'
export interface AvatarProps {
   name: string
   type: AvatarType
   shape: AvatarShape
   size: ExtendedSize
   imageURL?: string
   textColor?: string
   bgColor?: string
   userIcon?: (width: number, height: number) => ReactElement
   status?: AvatarStatus | null
}

export const Avatar = (props: AvatarProps): ReactElement => {
   const {
      name,
      type,
      shape,
      size,
      imageURL,
      textColor,
      bgColor,
      status,
      userIcon
   } = props

   const firstTwoLetters = getTwoLettersFromUsername(name)

   const firstLetter = firstTwoLetters[0]

   const color = textColor ? textColor : getAvatarProfileTextColor(firstLetter)

   const backgroundColor = bgColor
      ? bgColor
      : getAvatarProfileBgColor(firstLetter)

   const { theme } = useThemeContext()
   let { isFocused, focusProps } = useFocusRing({
      within: true
   })

   const renderStatusIcon = (): ReactElement | null => {
      if (!status) return null

      return (
         <div
            className={`${cn(statusIconClassName)} ${getStatusIndicationSize(
               size,
               status
            )}`}
         ></div>
      )
   }

   const renderAvatarWithImage = (): ReactElement => (
      <div
         className={`${getAvatarShape(size, shape)} ${getAvatarSize(size)} ${cn(
            {
               [avatarFocusClassName]: isFocused
            }
         )}
         )}`}
         {...focusProps}
      >
         <img
            src={imageURL}
            alt={name}
            className={` ${cn(avatarWithImageClassName)} ${getAvatarShape(
               size,
               shape
            )}`}
            title={name}
         />
      </div>
   )

   const renderAvatarWithIcon = (): ReactElement => {
      const width = getUserIconSize(size)
      const height = getUserIconSize(size)
      return (
         <div
            className={` ${cn(avatarWithIconContainer)} ${getAvatarShape(
               size,
               shape
            )} ${getAvatarSize(size)} ${
               theme.light.avatar.avatarWithUserIcon.default.backgroundColor
            } 
            ${cn(isFocused ? avatarFocusClassName : '')}`}
            title={name}
         >
            {userIcon && userIcon(width, height)}
         </div>
      )
   }

   const renderAvatarWithText = (): ReactElement => (
      <div
         className={` ${cn(avatarWithTextContainerClassName)} ${getAvatarShape(
            size,
            shape
         )} ${getAvatarSize(size)} ${
            theme.light.avatar.avatarWithText.default.backgroundColor
         }
         ${cn(isFocused ? avatarFocusClassName : '')}`}
         style={{ background: backgroundColor }}
         title={name}
      >
         <span
            className={`${getFontSize(size)} leading-7`}
            style={{ color: color }}
         >
            {firstTwoLetters}
         </span>
      </div>
   )

   const renderAvatar = (): ReactElement => {
      switch (type) {
         case 'Image':
            return renderAvatarWithImage()
         case 'Icon':
            return renderAvatarWithIcon()

         case 'Text':
            return renderAvatarWithText()
      }
   }

   return (
      <div className={avatarContainerClassName}>
         {renderAvatar()}
         {renderStatusIcon()}
      </div>
   )
}
