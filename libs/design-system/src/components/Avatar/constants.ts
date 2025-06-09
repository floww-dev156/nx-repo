import { colors } from '../../style-guide/colors'

export const EMPTY_STRING = ''
export const SPECIAL_CHARS_REGEX = /[^a-zA-z0-9\s]/

export const getAvatarProfileTextColor = (firstLetter: string) => {
   switch (firstLetter) {
      case 'A':
         return colors['gray-600']
      case 'B':
         return colors['success-600']
      case 'C':
         return colors['error-600']
      case 'D':
         return colors['warning-600']
      case 'E':
         return colors['primary-600']
      case 'F':
         return colors['moss-600']
      case 'G':
         return colors['green-light-600']
      case 'H':
         return colors['green-600']
      case 'I':
         return colors['teal-600']
      case 'J':
         return colors['cyan-600']
      case 'K':
         return colors['blue-light-600']
      case 'L':
         return colors['blue-600']
      case 'M':
         return colors['blue-dark-600']
      case 'N':
         return colors['orange-600']
      case 'O':
         return colors['indigo-600']
      case 'P':
         return colors['violet-600']
      case 'Q':
         return colors['purple-600']
      case 'R':
         return colors['fuchsia-600']
      case 'S':
         return colors['pink-600']
      case 'T':
         return colors['rose-600']
      case 'U':
         return colors['orange-dark-600']
      case 'V':
         return colors['yellow-600']
      case 'W':
         return colors['blue-dark-600']
      case 'X':
         return colors['teal-600']
      case 'Y':
         return colors['green-600']
      case 'Z':
         return colors['moss-600']
      default:
         return colors['green-light-600']
   }
}

export const getAvatarProfileBgColor = (firstLetter: string) => {
   switch (firstLetter) {
      case 'A':
         return colors['gray-100']
      case 'B':
         return colors['success-100']
      case 'C':
         return colors['error-100']
      case 'D':
         return colors['warning-100']
      case 'E':
         return colors['primary-100']
      case 'F':
         return colors['moss-100']
      case 'G':
         return colors['green-light-100']
      case 'H':
         return colors['green-100']
      case 'I':
         return colors['teal-100']
      case 'J':
         return colors['cyan-100']
      case 'K':
         return colors['blue-light-100']
      case 'L':
         return colors['blue-100']
      case 'M':
         return colors['blue-dark-100']
      case 'N':
         return colors['orange-100']
      case 'O':
         return colors['indigo-100']
      case 'P':
         return colors['violet-100']
      case 'Q':
         return colors['purple-100']
      case 'R':
         return colors['fuchsia-100']
      case 'S':
         return colors['pink-100']
      case 'T':
         return colors['rose-100']
      case 'U':
         return colors['orange-dark-100']
      case 'V':
         return colors['yellow-100']
      case 'W':
         return colors['blue-dark-100']
      case 'X':
         return colors['teal-100']
      case 'Y':
         return colors['green-100']
      case 'Z':
         return colors['moss-100']
      default:
         return colors['green-light-100']
   }
}
