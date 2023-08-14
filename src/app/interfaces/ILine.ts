interface ILine {
  userId: string
  displayName: string
  pictureUrl?: string
}

interface ILogin {
  isLoggedIn: boolean
  token?: string
}

export type { ILine, ILogin }
