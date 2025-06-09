export type Size = 'Small' | 'Medium' | 'Large'

export interface BadgeStyles {
   bgColor: string
   borderColor: string
   withOutBorderTextColor: string
   withBorderTextColor: string
   withOutBorderIconColor: string
   withBorderIconColor: string
   withOutBorderDotColor: string
   withBorderDotColor: string
}

export type ColorVariantEnum =
   | 'BLUE'
   | 'BLUE_DARK'
   | 'BLUE_LIGHT'
   | 'CYAN'
   | 'FUCHSIA'
   | 'GREEN'
   | 'GREEN_LIGHT'
   | 'INDIGO'
   | 'MOSS'
   | 'ORANGE'
   | 'ORANGE_DARK'
   | 'PINK'
   | 'PURPLE'
   | 'ROSE'
   | 'TEAL'
   | 'VIOLET'
   | 'YELLOW'
   | 'PRIMARY'
   | 'GRAY'
   | 'ERROR'
   | 'SUCCESS'
   | 'WARNING'
