import { UserRoleEnum } from '@scaliolabs/wedplanco-sdk'

export type AuthShellContent = {
    [key in UserRoleEnum]?: {
        title: string
        description: string
        image: string
        footer: { text: string; action: string; urlSignIn: string; urlSignUp: string }
    }
}
