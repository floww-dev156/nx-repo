import { Collection, Direction, KeyboardDelegate } from '@react-types/shared'
import { Key } from 'react'

export class TagKeyboardDelegate<T> implements KeyboardDelegate {
   private collection: Collection<T>
   private direction: Direction

   constructor(collection: Collection<T>, direction: Direction) {
      this.collection = collection
      this.direction = direction
   }

   getFirstKey() {
      return this.collection.getFirstKey()
   }

   getLastKey() {
      return this.collection.getLastKey()
   }

   getKeyRightOf(key: Key) {
      return this.direction === 'rtl'
         ? this.getKeyAbove(key)
         : this.getKeyBelow(key)
   }

   getKeyLeftOf(key: Key) {
      return this.direction === 'rtl'
         ? this.getKeyBelow(key)
         : this.getKeyAbove(key)
   }

   getKeyBelow(key) {
      let startItem = this.collection.getItem(key)
      if (!startItem) {
         return
      }

      // Find the next item
      key = this.collection.getKeyAfter(key)
      if (key != null) {
         return key
      } else {
         return this.collection.getFirstKey()
      }
   }

   getKeyAbove(key) {
      let startItem = this.collection.getItem(key)
      if (!startItem) {
         return
      }

      // Find the previous item
      key = this.collection.getKeyBefore(key)
      if (key != null) {
         return key
      } else {
         return this.collection.getLastKey()
      }
   }

   getKeyPageAbove(key) {
      return this.getKeyAbove(key)
   }

   getKeyPageBelow(key) {
      return this.getKeyBelow(key)
   }
}
