import React from 'react'
import Transition from 'react-transition-group/Transition'

const OPEN_STATES: any = {
   entering: false,
   entered: true
}

export function OpenTransition(props: any) {
   return (
      <Transition timeout={{ enter: 0, exit: 350 }} {...props}>
         {(state: any) =>
            React.Children.map(
               props.children,
               child =>
                  child &&
                  React.cloneElement(child, { isOpen: !!OPEN_STATES[state] })
            )
         }
      </Transition>
   )
}
