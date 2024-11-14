'use server'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

export async function revalidatePathAction(path: string) {
  revalidatePath(path)
}

export async function getCookies(key: string) {
  const data = (await cookies()).get(key)?.value
  if (data) {
    return data
  }

  return null
}

export async function deleteCookies(key: string) {
  return (await cookies()).delete(key)
}

export async function setCookies(
  key: string,
  data: string,
  maxAge: number
) {
  ; (await cookies()).set(key, data, {
    maxAge,
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  })

  return null
}
