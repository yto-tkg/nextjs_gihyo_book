export type Category = 'shoes' | 'clothes' | 'book'

export type Condition = 'new' | 'used'

export type User = {
  id: number
  usrname: string
  displayName: string
  email: string
  profileImgUrl: string
  description: string
}

export type Product = {
  id: number
  category: Category
  title: string
  description: string
  imageUrl: string
  price: number
  condition: Condition
  owner: User
}

export type ApiContext = {
  apiRootUrl: string
}
