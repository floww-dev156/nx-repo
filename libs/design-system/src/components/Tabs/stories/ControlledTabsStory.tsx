import React, { Key } from 'react'

import { Item } from '../../Item'

import { TabList, TabPanels, Tabs } from '..'
export function ControlledTabs(props) {
   let tabs = [
      { id: 1, name: 'Keyboard Settings', children: 'No keyboard detected.' },
      { id: 2, name: 'Mouse Settings', children: 'No mouse detected.' },
      { id: 3, name: 'Gamepad Settings', children: 'No gamepad detected' }
   ]
   let [tab, setTab] = React.useState<Key>(2)

   return (
      <div className=''>
         <span id='label-3'>Settings (controlled)</span>
         <Tabs
            {...props}
            aria-labelledby='label-3'
            items={tabs}
            selectedKey={tab}
            onSelectionChange={(id: Key) => {
               setTab(id)
            }}
         >
            <TabList>{item => <Item>{item.name}</Item>}</TabList>
            <TabPanels>{item => <Item>{item.children}</Item>}</TabPanels>
         </Tabs>
      </div>
   )
}
