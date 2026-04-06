import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

type UserRole = 'Institution Admin' | 'Security Admin' | 'Audit Admin' | 'Compliance Admin' | 'Manager' | 'Reviewer'

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

const STORAGE_KEY = 'regsmart-auth'
const ENTITY_KEY = 'regsmart-entity'

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
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<AuthUser | null>(null)
  const [selectedEntity, setSelectedEntityState] = useState('Enterprise')

  useEffect(() => {
    const storedAuth = window.localStorage.getItem(STORAGE_KEY)
    const storedEntity = window.localStorage.getItem(ENTITY_KEY)

    if (storedAuth === 'true') {
      setUser(DEMO_USER)
      setIsAuthenticated(true)
    }

    if (storedEntity && ENTITY_OPTIONS.includes(storedEntity)) {
      setSelectedEntityState(storedEntity)
    }
  }, [])

  const setSelectedEntity = (entity: string) => {
    setSelectedEntityState(entity)
    window.localStorage.setItem(ENTITY_KEY, entity)
  }

  const value = useMemo<AuthContextValue>(() => ({
    isAuthenticated,
    user,
    availableEntities: ENTITY_OPTIONS,
    selectedEntity,
    login: () => {
      setUser(DEMO_USER)
      setSelectedEntity('Enterprise')
      setIsAuthenticated(true)
      window.localStorage.setItem(STORAGE_KEY, 'true')
    },
    logout: () => {
      setUser(null)
      setIsAuthenticated(false)
      window.localStorage.removeItem(STORAGE_KEY)
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
