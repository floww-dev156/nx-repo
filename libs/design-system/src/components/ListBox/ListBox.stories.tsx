import { ThemeContextProvider } from '../../Theme/Provider'
import { defaultTheme } from '../../Theme/theme'
import { Item, ListBox, Section } from './index'
import { useAsyncList } from '@react-stately/data'

let flatOptions = [
   { name: 'Aardvark' },
   { name: 'Kangaroo' },
   { name: 'Snake' },
   { name: 'Danni' },
   { name: 'Devon' },
   { name: 'Ross' },
   { name: 'Puppy' },
   { name: 'Doggo' },
   { name: 'Floof' }
]

let withSection = [
   {
      name: 'Animals',
      children: [{ name: 'Aardvark' }, { name: 'Kangaroo' }, { name: 'Snake' }]
   },
   {
      name: 'People',
      children: [{ name: 'Danni' }, { name: 'Devon' }, { name: 'Ross' }]
   }
]
export const Default = () => (
   <ThemeContextProvider theme={defaultTheme}>
      <ListBox
         flexGrow={1}
         aria-labelledby='label'
         items={flatOptions}
         size={'ExtraSmall'}
         listBoxClassName={'min-h-[400px] border border-solid border-gray-200'}
      >
         {item => <Item key={item.name}>{item.name}</Item>}
      </ListBox>
   </ThemeContextProvider>
)
Default.storyName = 'Default List Box'

export const WithSection = () => (
   <ThemeContextProvider theme={defaultTheme}>
      <div
         style={{
            display: 'flex',
            minWidth: '200px',
            border: '1px solid lightgray'
         }}
      >
         <ListBox
            flexGrow={1}
            aria-labelledby='label'
            items={withSection}
            size={'ExtraSmall'}
         >
            {item => (
               <Section key={item.name} items={item.children} title={item.name}>
                  {item => <Item key={item.name}>{item.name}</Item>}
               </Section>
            )}
         </ListBox>
      </div>
   </ThemeContextProvider>
)

WithSection.storyName = 'List Box With Section'

export const AsyncLoadingExample = () => {
   interface Pokemon {
      name: string
      url: string
   }

   let list = useAsyncList<Pokemon>({
      async load({ signal, cursor }) {
         let res = await fetch(cursor || 'https://pokeapi.co/api/v2/pokemon', {
            signal
         })
         let json = await res.json()
         return {
            items: json.results,
            cursor: json.next
         }
      }
   })

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <ListBox
            flexGrow={1}
            aria-labelledby='label'
            items={list.items}
            isLoading={list.isLoading}
            onLoadMore={list.loadMore}
            size={'ExtraSmall'}
            listBoxClassName={
               'min-h-[400px] border border-solid border-gray-200'
            }
         >
            {item => <Item key={item.name}>{item.name}</Item>}
         </ListBox>
      </ThemeContextProvider>
   )
}

AsyncLoadingExample.storyName = 'Async Loading'

export default {
   title: 'un-published/Components/ListBox',
   component: ListBox
}
