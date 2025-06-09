import { action, computed, makeObservable, observable } from 'mobx'

class DummyStore {
   data!: any

   apiData!: any

   constructor() {
      makeObservable<DummyStore, 'data'>(this, {
         data: observable,
         updateData: action.bound
      })
      this.data = {}
      this.apiData = []
   }
   updateData = data => {
      this.data = data
   }

   setApiData = data => {
      this.apiData = [...this.apiData, ...data]
   }
}

export { DummyStore }

const dummyStore = new DummyStore()
export { dummyStore }
