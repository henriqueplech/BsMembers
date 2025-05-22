export type User = {
  id: string;
  name: string;
  email: string;
  image: string;
  role: string;
};

export type Stat = {
  id: string;
  title: string;
  value: string | number;
  change: number;
  icon: string;
  prefix?: string;
};

export type ChartData = {
  date: string;
  amount: number;
};

export type Training = {
  id: string;
  title: string;
  icon: string;
  color: string;
  stats: {
    users: number;
    hours: number;
    rating: number;
  };
};

// Mock user data
export const currentUser: User = {
  id: '1',
  name: 'Lucas Silva',
  email: 'lucas.silva@example.com',
  image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=120',
  role: 'Treinador',
};

// Mock stats data
export const stats: Stat[] = [
  {
    id: '1',
    title: 'Lucro Total',
    value: '128.591',
    change: 5.2,
    icon: 'dollar-sign',
    prefix: 'R$',
  },
  {
    id: '2',
    title: 'Lucro Médio',
    value: '1352',
    change: 3.1,
    icon: 'trending-up',
    prefix: 'R$',
  },
  {
    id: '3',
    title: 'Total Membros',
    value: 826,
    change: 2.5,
    icon: 'users',
  },
  {
    id: '4',
    title: 'Total de treinamentos',
    value: 18,
    change: 4.3,
    icon: 'book-open',
  },
];

// Mock chart data
export const chartData: ChartData[] = [
  { date: '1 Jan', amount: 5000 },
  { date: '2 Jan', amount: 8000 },
  { date: '3 Jan', amount: 4000 },
  { date: '4 Jan', amount: 5500 },
  { date: '5 Jan', amount: 6000 },
  { date: '6 Jan', amount: 4500 },
  { date: '7 Jan', amount: 9000 },
  { date: '8 Jan', amount: 7500 },
  { date: '9 Jan', amount: 8000 },
  { date: '10 Jan', amount: 4000 },
  { date: '11 Jan', amount: 3500 },
  { date: '12 Jan', amount: 3000 },
  { date: '13 Jan', amount: 8000 },
  { date: '14 Jan', amount: 4500 },
  { date: '15 Jan', amount: 9000 },
];

// Mock training data
export const trainings: Training[] = [
  {
    id: '1',
    title: 'Docker',
    icon: 'box',
    color: 'bg-blue-500',
    stats: {
      users: 36,
      hours: 20,
      rating: 4.7,
    },
  },
  {
    id: '2',
    title: 'GitLab',
    icon: 'git-branch',
    color: 'bg-orange-500',
    stats: {
      users: 42,
      hours: 25,
      rating: 4.8,
    },
  },
  {
    id: '3',
    title: 'C#',
    icon: 'hash',
    color: 'bg-purple-500',
    stats: {
      users: 27,
      hours: 34,
      rating: 4.7,
    },
  },
  {
    id: '4',
    title: 'Workflow',
    icon: 'workflow',
    color: 'bg-indigo-500',
    stats: {
      users: 45,
      hours: 30,
      rating: 4.6,
    },
  },
  {
    id: '5',
    title: 'Figma',
    icon: 'figma',
    color: 'bg-pink-500',
    stats: {
      users: 53,
      hours: 20,
      rating: 4.8,
    },
  },
];