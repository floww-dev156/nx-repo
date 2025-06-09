import {
   shouldKeepSpectrumClassNames,
   useDOMRef,
   useStyleProps
} from '@react-spectrum/utils'
import clsx from 'clsx'
import { DOMRef, ValidationState } from '@react-types/shared'
import { filterDOMProps } from '@react-aria/utils'

import { useLocale } from '@react-aria/i18n'
import { ModalProvider, useModalProvider } from '@react-aria/overlays'
import {
   ProviderContext,
   ProviderProps,
   ColorScheme,
   Scale,
   Breakpoints,
   Theme
} from '@react-types/provider'
import React, { useContext, useEffect, useRef } from 'react'
import { useColorScheme, useScale } from './mediaQueries'

const Context = React.createContext<ProviderContext | null>(null)
Context.displayName = 'ProviderContext'

const DEFAULT_BREAKPOINTS = { S: 640, M: 768, L: 1024, XL: 1280, XXL: 1536 }

function Provider(props: ProviderProps, ref: DOMRef<HTMLDivElement>) {
   let prevContext = useProvider()
   let prevBreakpoints = prevContext && prevContext.breakpoints
   let { theme = prevContext && prevContext.theme, defaultColorScheme } = props
   let autoColorScheme = useColorScheme(theme, defaultColorScheme)
   let autoScale = useScale(theme)
   let { locale: prevLocale } = useLocale()

   let {
      colorScheme = autoColorScheme,
      scale = prevContext ? prevContext.scale : autoScale,
      locale = prevContext ? prevLocale : null,
      breakpoints = prevContext ? prevBreakpoints : DEFAULT_BREAKPOINTS,
      children,
      isQuiet,
      isEmphasized,
      isDisabled,
      isRequired,
      isReadOnly,
      validationState,
      ...otherProps
   } = props

   let currentProps = {
      theme,
      breakpoints,
      colorScheme,
      scale,
      isQuiet,
      isEmphasized,
      isDisabled,
      isRequired,
      isReadOnly,
      validationState
   }

   let filteredProps: Record<
      string,
      | boolean
      | Breakpoints
      | ColorScheme
      | Scale
      | Theme
      | ValidationState
      | null
   > = {}
   Object.entries(currentProps).forEach(
      ([key, value]) => value !== undefined && (filteredProps[key] = value)
   )

   let context = Object.assign({}, prevContext, filteredProps)

   let contents = children
   let domProps = filterDOMProps(otherProps)
   let { styleProps } = useStyleProps(otherProps, undefined)
   if (
      !prevContext ||
      props.locale ||
      theme !== prevContext.theme ||
      colorScheme !== prevContext.colorScheme ||
      scale !== prevContext.scale ||
      Object.keys(domProps).length > 0 ||
      otherProps.UNSAFE_className ||
      Object.keys(styleProps.style as React.HTMLAttributes<HTMLElement>)
         .length > 0
   ) {
      contents = (
         <ProviderWrapper
            {...props}
            UNSAFE_style={{
               isolation: !prevContext ? 'isolate' : undefined,
               ...styleProps.style
            }}
            ref={ref}
         >
            {contents}
         </ProviderWrapper>
      )
   }

   return (
      <Context.Provider value={context}>
         <ModalProvider>{contents}</ModalProvider>
      </Context.Provider>
   )
}

let _Provider = React.forwardRef(Provider)
export { _Provider as Provider }

const ProviderWrapper = React.forwardRef(function ProviderWrapper(
   props: ProviderProps,
   ref: DOMRef<HTMLDivElement>
) {
   let { children, ...otherProps } = props
   let { locale, direction } = useLocale()
   let { theme, colorScheme, scale } = useProvider()
   let { modalProviderProps } = useModalProvider()
   let { styleProps } = useStyleProps(otherProps)
   let domRef = useDOMRef(ref)

   let themeKey = Object.keys(theme[colorScheme])[0]
   let scaleKey = Object.keys(theme[scale])[0]

   let className = clsx(
      styleProps.className,
      theme[colorScheme][themeKey],
      theme[scale][scaleKey],
      theme.global ? Object.values(theme.global) : null,
      {
         'react-spectrum-provider': shouldKeepSpectrumClassNames,
         spectrum: shouldKeepSpectrumClassNames,
         [themeKey]: shouldKeepSpectrumClassNames,
         [scaleKey]: shouldKeepSpectrumClassNames
      }
   )

   let style = {
      ...styleProps.style,
      colorScheme:
         props.colorScheme ??
         colorScheme ??
         Object.keys(theme)
            .filter(k => k === 'light' || k === 'dark')
            .join(' ')
   }

   let hasWarned = useRef(false)
   useEffect(() => {
      if (direction && domRef.current) {
         let closestDir =
            domRef.current.parentElement &&
            domRef.current.parentElement.closest('[dir]')
         let dir = closestDir && closestDir.getAttribute('dir')
         if (dir && dir !== direction && !hasWarned.current) {
            console.warn(
               `Language directions cannot be nested. ${direction} inside ${dir}.`
            )
            hasWarned.current = true
         }
      }
   }, [direction, domRef, hasWarned])

   return (
      <div
         {...filterDOMProps(otherProps)}
         {...styleProps}
         {...modalProviderProps}
         className={className}
         style={style}
         lang={locale}
         dir={direction}
         ref={domRef}
      >
         {children}
      </div>
   )
})

export function useProvider(): any {
   return useContext(Context)
}

export function useProviderProps<T>(props: T): T {
   let context = useProvider()
   if (!context) {
      return props
   }
   return Object.assign(
      {},
      {
         isQuiet: context.isQuiet,
         isEmphasized: context.isEmphasized,
         isDisabled: context.isDisabled,
         isRequired: context.isRequired,
         isReadOnly: context.isReadOnly,
         validationState: context.validationState
      },
      props
   )
}
