import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://a8-tiles-gallery-chi.vercel.app"
})

// export const { signIn, signUp, useSession } = createAuthClient()