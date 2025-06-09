import { makeAutoObservable } from 'mobx'

class SectionAsyncStore {
   searchSectionsInvalidations!: Record<string, boolean>

   constructor() {
      makeAutoObservable(this)
   }

   updateSearchSectionsInvalidations(
      searchSectionsInvalidations: Record<string, boolean>
   ): void {
      this.searchSectionsInvalidations = searchSectionsInvalidations
   }
}

export default SectionAsyncStore
