// components/icons.tsx

import {
  ArrowDownIcon, ArrowUpIcon, BarChart3Icon, BellIcon, BookOpenIcon,
  BoxIcon, CheckIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon,
  ClipboardListIcon, ClockIcon, CopyIcon, CreditCardIcon, DollarSignIcon,
  FileTextIcon, FigmaIcon as FigmaIconLucide, GitBranchIcon, GithubIcon,
  HashIcon, HelpCircleIcon, HomeIcon, ImageIcon, Layers2Icon, ListIcon,
  LogOutIcon, MenuIcon, PlusIcon, SearchIcon, SettingsIcon, StarIcon, Sun,
  TrendingDownIcon, TrendingUpIcon, TwitterIcon, UserIcon, UsersIcon,
  WorkflowIcon, XIcon, type LucideIcon,
} from "lucide-react";

import {
  SiDocker, SiDotnet, SiFigma, SiGitlab, SiWebflow,
} from "react-icons/si";

export type Icon = LucideIcon;

export const Icons = {
  // Ícones de Lucide
  arrowDown: ArrowDownIcon,
  arrowUp: ArrowUpIcon,
  bell: BellIcon,
  bookOpen: BookOpenIcon, // ADICIONADO
  box: BoxIcon,
  chart: BarChart3Icon,
  check: CheckIcon,
  chevronDown: ChevronDownIcon,
  chevronLeft: ChevronLeftIcon,
  chevronRight: ChevronRightIcon,
  clipboardList: ClipboardListIcon, // ADICIONADO
  clock: ClockIcon,
  close: XIcon,
  copy: CopyIcon,
  creditCard: CreditCardIcon,
  dollar: DollarSignIcon,
  fileText: FileTextIcon,
  gitBranch: GitBranchIcon, // ADICIONADO
  github: GithubIcon,
  hash: HashIcon,
  help: HelpCircleIcon,
  home: HomeIcon,
  image: ImageIcon,
  layers: Layers2Icon,
  list: ListIcon,
  logout: LogOutIcon,
  menu: MenuIcon,
  plus: PlusIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  spinner: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      strokeLinejoin="round" className="h-4 w-4 animate-spin"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  star: StarIcon,
  sun: Sun,
  trendingDown: TrendingDownIcon,
  trendingUp: TrendingUpIcon,
  twitter: TwitterIcon,
  user: UserIcon,
  users: UsersIcon,
  workflow: WorkflowIcon, // ADICIONADO

  // Ícones de Tecnologia (react-icons)
  docker: SiDocker,
  gitlab: SiGitlab,
  csharp: SiDotnet,
  webflow: SiWebflow,
  figma: SiFigma,
};