import { ReactElement } from 'react'
import { ExtendedSize } from '../../types'

import { EMPTY_STRING, SPECIAL_CHARS_REGEX } from './constants'
import { AvatarShape, AvatarStatus } from './types'

export const getAvatarSize = (size: ExtendedSize): string => {
   switch (size) {
      case 'ExtraSmall':
         return 'w-24px h-24px'
      case 'Small':
         return 'w-32px h-32px'
      case 'Medium':
         return 'w-10 h-10'
      case 'Large':
         return 'w-12 h-12'
      case 'ExtraLarge':
         return 'w-56px h-56px'
      case 'DoubleExtraLarge':
         return 'w-16 h-16'
   }
}

export const getUserIconSize = (size: ExtendedSize): number => {
   switch (size) {
      case 'ExtraSmall':
         return 16
      case 'Small':
         return 20
      case 'Medium':
         return 24
      case 'Large':
         return 28
      case 'ExtraLarge':
         return 32
      case 'DoubleExtraLarge':
         return 32
   }
}

const getAvatarStatusBackgroundClassName = (status: AvatarStatus): string => {
   switch (status) {
      case 'Online':
         return 'bg-success-500'
      case 'Offline':
         return 'bg-gray-500'
      default:
         return ''
   }
}

export const getStatusIndicationSize = (
   size: ExtendedSize,
   status: AvatarStatus
): string => {
   const statusBackgroundColor = getAvatarStatusBackgroundClassName(status)

   switch (size) {
      case 'ExtraSmall':
         return `w-1.5 h-1.5 rounded-full outline outline-2 outline-white ${statusBackgroundColor}`
      case 'Small':
         return `w-2 h-2 rounded-full outline outline-2 outline-white ${statusBackgroundColor}`
      case 'Medium':
         return `w-2.5 h-2.5 rounded-full outline outline-2 outline-white ${statusBackgroundColor}`
      case 'Large':
         return `w-3 h-3 rounded-full outline outline-2 outline-white ${statusBackgroundColor}`
      case 'ExtraLarge':
         return `w-3.5 h-3.5 rounded-full outline outline-2 outline-white ${statusBackgroundColor}`
      case 'DoubleExtraLarge':
         return `w-4 h-4 rounded-full outline outline-2 outline-white ${statusBackgroundColor}`
   }
}

export const getFontSize = (size: ExtendedSize): string => {
   switch (size) {
      case 'ExtraSmall':
         return 'text-xs'
      case 'Small':
         return 'text-sm'
      case 'Medium':
         return 'text-base'
      case 'Large':
         return 'text-lg'
      case 'ExtraLarge':
         return 'text-xl'
      case 'DoubleExtraLarge':
         return 'text-2xl'
   }
}

export const getZIndex = (zIndex: number): string => {
   switch (zIndex) {
      case 0:
         return 'z-c0'
      case 1:
         return 'z-c1'
      case 2:
         return 'z-c2'
      case 3:
         return 'z-c3'
      case 4:
         return 'z-c4'
      case 5:
         return 'z-c5'
      case 6:
         return 'z-c6'
      case 7:
         return 'z-c7'
      case 8:
         return 'z-c8'
      case 9:
         return 'z-c9'
      case 10:
         return 'z-c10'
      case 11:
         return 'z-c11'
      case 12:
         return 'z-c12'
      case 13:
         return 'z-c13'
      case 14:
         return 'z-c14'
      case 15:
         return 'z-c15'
      case 16:
         return 'z-c16'
      case 17:
         return 'z-c17'
      case 18:
         return 'z-c18'
      case 19:
         return 'z-c19'
      case 20:
         return 'z-c20'
      default:
         return 'z-c20'
   }
}
export const getBorderRadius = (size: ExtendedSize): string => {
   switch (size) {
      case 'ExtraSmall':
         return 'rounded-sm'
      case 'Small':
         return 'rounded-sm'
      case 'Medium':
         return 'rounded-lg'
      case 'Large':
         return 'rounded-10px'
      case 'ExtraLarge':
         return 'rounded-xl'
      case 'DoubleExtraLarge':
         return 'rounded-xl'
   }
}

export const getAvatarShape = (
   size: ExtendedSize,
   variant: AvatarShape
): string => {
   switch (variant) {
      case 'Hexagon':
         return 'hexagonal'
      case 'Rounded':
         return getBorderRadius(size)
      case 'Circular':
         return 'rounded-full'
   }
}

export const getFirstTwoLettersFromGivenName = (name: string): string =>
   name.slice(0, 2)

export const getFirstLettersFromTheGivenStringList = (
   stringList: string[],
   stringsCountLimit = 2
): string => {
   return stringList
      .slice(0, stringsCountLimit)
      .map(stringValue => stringValue.charAt(0))
      .join(EMPTY_STRING)
}

export const changeGivenTextToUpperCase = (text: string): string =>
   text.toUpperCase()

export const getStringWithoutRegexSelectedCharacters = (
   text: string,
   regex: RegExp = SPECIAL_CHARS_REGEX
): string => text.replace(regex, '')

export const getTwoLettersFromUsername = (name: string): string => {
   if (name) {
      const givenUsername = changeGivenTextToUpperCase(name)
      const stringList = getStringWithoutRegexSelectedCharacters(
         givenUsername,
         SPECIAL_CHARS_REGEX
      )
         .split(' ')
         .filter(string => string.length)

      return stringList.length > 1
         ? getFirstLettersFromTheGivenStringList(stringList, 2)
         : getFirstTwoLettersFromGivenName(givenUsername)
   }
   return EMPTY_STRING
}

export const getLeftMargin = (size: ExtendedSize, zIndex: number): string => {
   switch (size) {
      case 'ExtraSmall':
         return '-ml-8px'
      case 'Small':
         return '-ml-10px'
      case 'Medium':
         return '-ml-16px'
      case 'Large':
         return '-ml-16px'
      case 'ExtraLarge':
         return '-ml-22px'
      case 'DoubleExtraLarge':
         return '-ml-26px'
   }
}
export const getAvatarLabelStyles = (size: ExtendedSize): string => {
   switch (size) {
      case 'ExtraSmall':
         return 'text-sm-regular'
      case 'Small':
         return 'text-sm leading-5'
      case 'Medium':
         return 'text-sm leading-5'
      case 'Large':
         return 'text-md leading-6'
      case 'ExtraLarge':
         return 'text-lg leading-7'
   }
   return ''
}

export const getAvatarDescriptionStyles = (size: ExtendedSize): string => {
   switch (size) {
      case 'ExtraSmall':
      case 'Small':
         return 'text-xs leading-18px'
      case 'Medium':
         return 'text-sm leading-5'
      case 'Large':
         return 'text-md leading-6'
      case 'ExtraLarge':
         return 'text-md leading-6'
   }
   return ''
}

export const getAvatarLabelMargins = (size: ExtendedSize): string => {
   switch (size) {
      case 'ExtraSmall':
         return 'ml-2'
      case 'Small':
         return 'ml-10px'
      case 'Medium':
         return 'ml-12px'
      case 'Large':
         return 'ml-12px'
      case 'ExtraLarge':
         return 'ml-16px'
   }
   return ''
}
