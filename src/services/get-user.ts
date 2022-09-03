import type { ApiContext, User } from 'types'
import { fetcher } from '../utils'

export type GetUserParams = {
  id: number
}

/**
 * ユーザーAPI(個別取得)
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ユーザー
 */
const getUser = async (
  context: ApiContext,
  { id }: GetUserParams,
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  )
}

export default getUser

