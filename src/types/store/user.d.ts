export interface State { 
    userInfo: UserInfo | undefined
}


interface UserInfo { 
    name: string 
    email: string
    initials: string
  }
