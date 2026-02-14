export type UserRole = 'SUPER_ADMIN' | 'EDITOR' | 'ANALYST' | 'TENANT_USER';

const roleHierarchy: Record<UserRole, number> = {
  SUPER_ADMIN: 4,
  EDITOR: 3,
  ANALYST: 2,
  TENANT_USER: 1
};

export function hasRole(current: UserRole, required: UserRole) {
  return roleHierarchy[current] >= roleHierarchy[required];
}
