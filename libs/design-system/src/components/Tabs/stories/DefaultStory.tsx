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
import React from 'react'
import { action } from '@storybook/addon-actions'

import { Item } from '../../Item'

import { TabList, TabPanels, Tabs } from '..'
export function DefaultStory(props = {}) {
   return (
      <Tabs
         {...props}
         aria-label='Tab example'
         maxWidth={1000}
         onSelectionChange={action('onSelectionChange')}
      >
         <TabList>
            <Item key='val1'>My details</Item>
            <Item key='val2'>Profile</Item>
            <Item key='val3'>Password</Item>
            <Item key='val4'>Team</Item>
            <Item key='val5'>Plan</Item>
            <Item key='val6'>Billing</Item>
            <Item key='val7'>Email</Item>
            <Item key='val8'>Notifications</Item>
            <Item key='val9'>Integrations</Item>
            <Item key='val10'>API</Item>
         </TabList>
         <TabPanels>
            <Item key='val1'>
               <h1>Tab Body 1</h1>
               <div>
                  Dolore ex esse laboris elit magna esse sunt. Pariatur in
                  veniam Lorem est occaecat do magna nisi mollit ipsum sit
                  adipisicing fugiat ex. Pariatur ullamco exercitation ea qui
                  adipisicing. Id cupidatat aute id ut excepteur exercitation
                  magna pariatur. Mollit irure irure reprehenderit pariatur
                  eiusmod proident Lorem deserunt duis cillum mollit. Do
                  reprehenderit sit cupidatat quis laborum in do culpa nisi
                  ipsum. Velit aliquip commodo ea ipsum incididunt culpa nostrud
                  deserunt incididunt exercitation. In quis proident sit ad
                  dolore tempor. Eiusmod pariatur quis commodo labore cupidatat
                  cillum enim eiusmod voluptate laborum culpa. Laborum cupidatat
                  incididunt velit voluptate incididunt occaecat quis do.
                  Consequat adipisicing irure Lorem commodo officia sint id.
                  Velit sit magna aliquip eiusmod non id deserunt. Magna veniam
                  ad consequat dolor cupidatat esse enim Lorem ullamco. Anim
                  excepteur consectetur id in. Mollit laboris duis labore enim
                  duis esse reprehenderit.
               </div>
            </Item>
            <Item key='val2'>
               <h1>Tab Body 2</h1>
               <div>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
               </div>
            </Item>
            <Item key='val3'>
               <h1>Tab Body 3</h1>
               <div>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
               </div>
            </Item>
            <Item key='val4'>
               <h1>Tab Body 4</h1>
               <div>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable. The generated
                  Lorem Ipsum is therefore always free from repetition, injected
                  humour, or non-characteristic words etc.
               </div>
            </Item>
            <Item key='val5'>
               <h1>Tab Body 5</h1>
               <div>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32. The standard chunk of
                  Lorem Ipsum used since the 1500s is reproduced below for those
                  interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                  Bonorum et Malorum" by Cicero are also reproduced in their
                  exact original form, accompanied by English versions from the
                  1914 translation by H. Rackham.
               </div>
            </Item>
            <Item key='val6'>
               <h1>Tab Body 6</h1>
            </Item>
            <Item key='val7'>
               <h1>Tab Body 7</h1>
            </Item>
            <Item key='val8'>
               <h1>Tab Body 8</h1>
            </Item>
            <Item key='val9'>
               <h1>Tab Body 9</h1>
            </Item>
            <Item key='val10'>
               <h1>Tab Body 10</h1>
            </Item>
         </TabPanels>
      </Tabs>
   )
}
