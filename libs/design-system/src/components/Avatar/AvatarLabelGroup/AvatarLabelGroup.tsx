import cn from 'classnames'
import React, { ReactElement } from 'react'

import { Avatar, AvatarProps } from '../Avatar'
import {
   getAvatarDescriptionStyles,
   getAvatarLabelMargins,
   getAvatarLabelStyles
} from '../utils'

import {
   avatarLabelContainerClassName,
   avatarLabelWrapper,
   descriptionClassName,
   labelTextClassName
} from './styles'

export interface AvatarLabelProps extends AvatarProps {
   description?: string
   labelClassName?: string
   labelDescriptionClassName?: string
   avatarBgColor?: string
   avatarTextColor?: string
   renderCustomDescription?: () => React.ReactNode
}

const AvatarLabelGroup = (props: AvatarLabelProps) => {
   const {
      name,
      type,
      shape,
      size,
      imageURL,
      description,
      userIcon,
      status,
      labelClassName,
      labelDescriptionClassName,
      avatarBgColor,
      avatarTextColor,
      renderCustomDescription
   } = props

   if (size === 'DoubleExtraLarge') {
      throw new Error(
         'Acceptable Avatar Size in Avatar Label Group are  : XS, SM, MD LG, XL, 2XL'
      )
   }

   const renderAvatarLabel = (): ReactElement => (
      <p
         title={name}
         className={`${cn(labelTextClassName)} 
                     ${getAvatarLabelStyles(size)} ${labelClassName}        
                  `}
      >
         {name}
      </p>
   )

   const renderAvatarDescription = (): ReactElement | null =>
      description ? (
         <p
            title={description}
            className={`${cn(descriptionClassName)}
                     ${getAvatarDescriptionStyles(
                        size
                     )} ${labelDescriptionClassName}`}
         >
            {description}
         </p>
      ) : null

   const renderAvatarLabelDetails = (): ReactElement => {
      return (
         <div
            className={`${cn(avatarLabelWrapper)} 
         ${getAvatarLabelMargins(size)}`}
         >
            {renderAvatarLabel()}
            {renderCustomDescription
               ? renderCustomDescription()
               : renderAvatarDescription()}
         </div>
      )
   }

   return (
      <div className={cn(avatarLabelContainerClassName)}>
         <Avatar
            name={name}
            type={type}
            shape={shape}
            size={size}
            imageURL={imageURL}
            userIcon={userIcon}
            status={status}
            bgColor={avatarBgColor}
            textColor={avatarTextColor}
         />
         {renderAvatarLabelDetails()}
      </div>
   )
}

export { AvatarLabelGroup }
