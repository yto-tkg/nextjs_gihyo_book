import { RequestInit } from "next/dist/server/web/spec-extension/request"

export const fetcher async (
  resourse: RequestInfo,
  init?: RequestInit,
  @typescript-eslint / no - explicit - any
): Promise<any> => {
  const res = await fetch(resource, init)

  if (!res.ok) {
    const errorRes = await res.json()
    const error = new Error(
      errorRes.message ?? 'APIリクエスト中にエラーが発生しました'
    )

    throw error
  }

  return res.json()
}
