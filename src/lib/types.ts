
// User data types for the CriptexHub admin panel
export type UserStatus = 'active' | 'inactive' | 'pending';

export interface User {
  id: string;
  code: string;
  name: string;
  user: string;
  email: string;
  telephone: string;
  status: UserStatus;
  balance: number;
  password: string; // Note: In a real app, we would never store or display plaintext passwords
  created_at: string;
}
