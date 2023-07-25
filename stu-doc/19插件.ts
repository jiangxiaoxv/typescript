import { StorageCls, Key, Exprire, Data, Result } from '../typings'
import { Dictionaries } from '../enum'
export class Storagex implements StorageCls {
  set<T>(key: Key, value: T, expire: Exprire = Dictionaries.permanent) {
    const data: Data<T> = {
      value: value,
      [Dictionaries.expire]: expire,
    }
    localStorage.setItem(key, JSON.stringify(data))
  }

  get<T>(key: Key): Result<T | null> {
    const value = localStorage.getItem(key)
    if (value) {
      const data: Data<T> = JSON.parse(value)
      const now = new Date().getTime()

      if (
        typeof data[Dictionaries.expire] == 'number' &&
        data[Dictionaries.expire] < now
      ) {
        this.remove(key)
        return {
          message: `${key}已过期`,
          value: data.value,
        }
      } else {
        return {
          message: '成功',
          value: data.value,
        }
      }
    } else {
      return {
        message: '值无效',
        value: null,
      }
    }
  }

  remove(key: Key) {
    localStorage.removeItem(key)
  }

  clear() {
    console.log(1)
  }
}
