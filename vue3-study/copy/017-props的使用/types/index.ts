// 定义一个接口，用于限制Person对象的具体属性
export interface IPerson {
  id: string
  name: string
  age: number
  tall?: number
}

// 自定义类型
export type People = Array<IPerson>
