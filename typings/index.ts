import { Dictionaries } from '../enum'

export interface StorageCls {
  get: <T>(key: Key) => Result<T | null>
  set: <T>(key: Key, value: T, expire: Exprire) => void
  remove: (key: Key) => void
  clear: () => void
}

export type Key = string
export type Exprire = Dictionaries.permanent | number

export interface Data<T> {
  value: T
  [Dictionaries.expire]: Exprire
}

export interface Result<T> {
  message: string
  value: T | null
}
