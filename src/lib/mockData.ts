
import { User } from './types';

// Generate random mock data for the CriptexHub admin panel
export const mockUsers: User[] = [
  {
    id: 'usr_01',
    code: 'CX12345',
    name: 'John Doe',
    user: 'johndoe',
    email: 'john.doe@example.com',
    telephone: '+1 (555) 123-4567',
    status: 'active',
    balance: 12543.87,
    password: '********',
    created_at: '2023-06-15T09:24:18Z'
  },
  {
    id: 'usr_02',
    code: 'CX67890',
    name: 'Jane Smith',
    user: 'janesmith',
    email: 'jane.smith@example.com',
    telephone: '+1 (555) 987-6543',
    status: 'active',
    balance: 8721.42,
    password: '********',
    created_at: '2023-07-21T14:35:29Z'
  },
  {
    id: 'usr_03',
    code: 'CX24680',
    name: 'Robert Johnson',
    user: 'rjohnson',
    email: 'robert.j@example.com',
    telephone: '+1 (555) 246-8024',
    status: 'inactive',
    balance: 950.00,
    password: '********',
    created_at: '2023-05-03T11:15:42Z'
  },
  {
    id: 'usr_04',
    code: 'CX13579',
    name: 'Emily Davis',
    user: 'emilyd',
    email: 'emily.davis@example.com',
    telephone: '+1 (555) 135-7931',
    status: 'pending',
    balance: 0.00,
    password: '********',
    created_at: '2023-09-10T16:48:33Z'
  },
  {
    id: 'usr_05',
    code: 'CX86420',
    name: 'Michael Wilson',
    user: 'mwilson',
    email: 'michael.w@example.com',
    telephone: '+1 (555) 864-2086',
    status: 'active',
    balance: 25347.16,
    password: '********',
    created_at: '2023-03-28T08:12:55Z'
  },
  {
    id: 'usr_06',
    code: 'CX97531',
    name: 'Sophia Brown',
    user: 'sophiab',
    email: 'sophia.b@example.com',
    telephone: '+1 (555) 975-3195',
    status: 'active',
    balance: 15692.74,
    password: '********',
    created_at: '2023-08-14T13:27:09Z'
  },
  {
    id: 'usr_07',
    code: 'CX45678',
    name: 'Daniel Martinez',
    user: 'dmartinez',
    email: 'daniel.m@example.com',
    telephone: '+1 (555) 456-7890',
    status: 'inactive',
    balance: 428.59,
    password: '********',
    created_at: '2023-04-19T10:36:47Z'
  },
  {
    id: 'usr_08',
    code: 'CX89012',
    name: 'Olivia Taylor',
    user: 'otaylor',
    email: 'olivia.t@example.com',
    telephone: '+1 (555) 890-1234',
    status: 'active',
    balance: 9874.31,
    password: '********',
    created_at: '2023-07-02T15:59:22Z'
  },
  {
    id: 'usr_09',
    code: 'CX34567',
    name: 'William Anderson',
    user: 'wanderson',
    email: 'william.a@example.com',
    telephone: '+1 (555) 345-6789',
    status: 'pending',
    balance: 100.00,
    password: '********',
    created_at: '2023-09-25T17:41:38Z'
  },
  {
    id: 'usr_10',
    code: 'CX78901',
    name: 'Ava Thomas',
    user: 'athomas',
    email: 'ava.t@example.com',
    telephone: '+1 (555) 789-0123',
    status: 'active',
    balance: 18365.92,
    password: '********',
    created_at: '2023-02-11T07:03:14Z'
  }
];

// Stats for dashboard
export const dashboardStats = {
  totalUsers: mockUsers.length,
  activeUsers: mockUsers.filter(user => user.status === 'active').length,
  inactiveUsers: mockUsers.filter(user => user.status === 'inactive').length,
  pendingUsers: mockUsers.filter(user => user.status === 'pending').length,
  totalBalance: mockUsers.reduce((acc, user) => acc + user.balance, 0),
};
