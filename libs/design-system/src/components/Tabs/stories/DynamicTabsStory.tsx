/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import React, { ReactNode } from 'react';
import { action } from '@storybook/addon-actions';
import { ChevronDownIcon } from '@nx-repo/design-system-icons';

import { CalenderIcon } from '../../../icons/CalenderIcon';
import { ChevronRightIcon } from '../../../icons/ChevronRightIcon';
import { RadioUnSelectedIcon } from '../../../icons/RadioUnSelectedIcon';
import { UserIcon } from '../../../icons/UserIcon';
import { Item } from '../../../components/Item';

import { Button, Hierarchy, SubVariant } from '../../Button';

import { TabList, TabPanels, Tabs, TabsProps } from '../';

interface DynamicTabItem {
  name: string;
  children: ReactNode;
  icon?: ReactNode;
}

let items = [
  { name: 'Tab 1', children: 'Tab Body 1', icon: <CalenderIcon /> },
  {
    name: 'Tab 2',
    children: 'Tab Body 2',
    icon: <ChevronDownIcon />,
  },
  {
    name: 'Tab 3',
    children: 'Tab Body 3',
    icon: <RadioUnSelectedIcon />,
  },
  { name: 'Tab 4', children: 'Tab Body 4', icon: <UserIcon /> },
  {
    name: 'Tab 5',
    children: 'Tab Body 5',
    icon: <ChevronDownIcon />,
  },
  {
    name: 'Tab 6',
    children: 'Tab Body 6',
    icon: <ChevronRightIcon />,
  },
] as DynamicTabItem[];

export let DynamicTabsStory = (
  props: Omit<TabsProps<DynamicTabItem>, 'children'>
) => {
  let [tabs, setTabs] = React.useState(items);
  let addTab = () => {
    let newTabs = [...tabs];
    newTabs.push({
      name: `Tab ${tabs.length + 1}`,
      children: `Tab Body ${tabs.length + 1}`,
    });

    setTabs(newTabs);
  };

  let removeTab = () => {
    if (tabs.length > 1) {
      let newTabs = [...tabs];
      newTabs.pop();
      setTabs(newTabs);
    }
  };

  return (
    <div style={{ width: '80%', display: 'flex' }}>
      <Tabs
        {...props}
        aria-label="Tab example"
        items={tabs}
        onSelectionChange={action('onSelectionChange')}
      >
        <div className="flex">
          <TabList>
            {(item: DynamicTabItem) => (
              <Item key={item.name}>
                <div className="flex">
                  {item.icon}
                  <div className="ml-8px">{item.name}</div>
                </div>
              </Item>
            )}
          </TabList>
        </div>
        <TabPanels>
          {(item: DynamicTabItem) => (
            <Item key={item.name}>
              <h1>{item.children}</h1>
              <div>
                Dolore ex esse laboris elit magna esse sunt. Pariatur in veniam
                Lorem est occaecat do magna nisi mollit ipsum sit adipisicing
                fugiat ex. Pariatur ullamco exercitation ea qui adipisicing. Id
                cupidatat aute id ut excepteur exercitation magna pariatur.
                Mollit irure irure reprehenderit pariatur eiusmod proident Lorem
                deserunt duis cillum mollit. Do reprehenderit sit cupidatat quis
                laborum in do culpa nisi ipsum. Velit aliquip commodo ea ipsum
                incididunt culpa nostrud deserunt incididunt exercitation. In
                quis proident sit ad dolore tempor. Eiusmod pariatur quis
                commodo labore cupidatat cillum enim eiusmod voluptate laborum
                culpa. Laborum cupidatat incididunt velit voluptate incididunt
                occaecat quis do. Consequat adipisicing irure Lorem commodo
                officia sint id. Velit sit magna aliquip eiusmod non id
                deserunt. Magna veniam ad consequat dolor cupidatat esse enim
                Lorem ullamco. Anim excepteur consectetur id in. Mollit laboris
                duis labore enim duis esse reprehenderit.
              </div>
            </Item>
          )}
        </TabPanels>
        <div className="pt-4 border-t-1">
          <Button
            hierarchy={Hierarchy.Primary}
            subVariant={SubVariant.Primary}
            size={'ExtraSmall'}
            onClick={addTab}
          >
            Add Tab
          </Button>
          <div className="mt-2" />
          <Button
            hierarchy={Hierarchy.Primary}
            subVariant={SubVariant.Primary}
            size={'ExtraSmall'}
            onClick={removeTab}
          >
            Remove Tab
          </Button>
        </div>
      </Tabs>
    </div>
  );
};
