export interface CommonIconPropsType {
   className?: string
   height?: number | string
   style?: React.CSSProperties | undefined
   width?: number | string
}

export interface IconPropsType extends CommonIconPropsType {
   id?: string
   fill?: string
   secondFill?: string
   stroke?: string
   strokeWidth?: number
   style?: React.CSSProperties | undefined
   x?: number
   y?: number
   opacity?: number
   version?: string
}
