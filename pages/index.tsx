import type { NextPage } from 'next'
import Link from 'next/link'
import supabase from '../supabaseClient'
import { createContext, useEffect } from 'react'
import { useRouter } from 'next/router'

const userData = createContext(null)

const Home: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    if (!supabase.auth.user()) {
      router.push('/auth/signin')
    }
  }, [])
  return (
    <div>
      <p>this is dashboaard</p>
      <button
        onClick={() => {
          supabase.auth.signOut()
          window.location.reload()
        }}
      >
        sign out
      </button>
    </div>
  )
}

export default Home
