import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

type UserRole = 'Institution Admin' | 'Audit Admin' | 'Compliance Admin' | 'Manager' | 'Reviewer'

type AuthUser = {
  name: string
  role: UserRole
  entityScope: string
  department: string
}

type AuthContextValue = {
  isAuthenticated: boolean
  user: AuthUser | null
  availableEntities: string[]
  selectedEntity: string
  login: (email: string, password: string) => void
  logout: () => void
  setSelectedEntity: (entity: string) => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

const DEMO_USER: AuthUser = {
  name: 'Karen Holt',
  role: 'Institution Admin',
  entityScope: 'Enterprise',
  department: 'Administration'
}

const ENTITY_OPTIONS = [
  'Enterprise',
  'RegSmart National Bank',
  'RegSmart Mortgage Services',
  'RegSmart Payments Operations'
]

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [user, setUser] = useState<AuthUser | null>(DEMO_USER)
  const [selectedEntity, setSelectedEntity] = useState('Enterprise')

  const value = useMemo<AuthContextValue>(() => ({
    isAuthenticated,
    user,
    availableEntities: ENTITY_OPTIONS,
    selectedEntity,
    login: () => {
      setUser(DEMO_USER)
      setSelectedEntity('Enterprise')
      setIsAuthenticated(true)
    },
    logout: () => {
      setUser(null)
      setIsAuthenticated(false)
    },
    setSelectedEntity
  }), [isAuthenticated, selectedEntity, user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }

  return context
}
