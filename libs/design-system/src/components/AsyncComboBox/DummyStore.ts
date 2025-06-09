import { action, computed, makeObservable, observable } from 'mobx'

class DummyStore {
   data!: any
   constructor() {
      makeObservable<DummyStore, 'data'>(this, {
         data: observable,
         updateData: action.bound
      })
      this.data = {}
   }
   updateData = data => {
      this.data = data
   }
}

export { DummyStore }

const dummyStore = new DummyStore()
export { dummyStore }
