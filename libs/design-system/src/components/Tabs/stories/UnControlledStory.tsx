import React from 'react'

import { Item } from '../../Item'

import { TabList, TabPanels, Tabs } from '..'
export function UnControlledTabs(props) {
   let tabs = [
      { id: 1, name: 'Keyboard Settings', children: 'No keyboard detected.' },
      { id: 2, name: 'Mouse Settings', children: 'No mouse detected.' },
      { id: 3, name: 'Gamepad Settings', children: 'No gamepad detected' }
   ]

   return (
      <div className=''>
         <span id='label-2'>Settings (uncontrolled)</span>
         <Tabs
            {...props}
            aria-labelledby='label-2'
            items={tabs}
            defaultSelectedKey={2}
            marginBottom='size-400'
         >
            <TabList>{item => <Item>{item.name}</Item>}</TabList>
            <TabPanels>{item => <Item>{item.children}</Item>}</TabPanels>
         </Tabs>
      </div>
   )
}
