import {
  ArrowDownIcon,
  ArrowUpIcon,
  BarChart3Icon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  CopyIcon,
  CreditCardIcon,
  FileTextIcon,
  GithubIcon,
  HomeIcon,
  ImageIcon,
  Layers2Icon,
  ListIcon,
  LogOutIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  StarIcon,
  Sun,
  TrendingDownIcon,
  TrendingUpIcon,
  TwitterIcon,
  UserIcon,
  UsersIcon,
  XIcon,
  DollarSignIcon,
  HelpCircleIcon,
  MenuIcon,
  BoxIcon,
  GitBranchIcon,
  HashIcon,
  WorkflowIcon,
  FigmaIcon,
  BookOpenIcon,
  BellIcon,
  ClipboardListIcon,
  type LucideIcon,
  type LucideProps,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  close: XIcon,
  spinner: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 animate-spin"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  sun: Sun,
  plus: PlusIcon,
  users: UsersIcon,
  trendingUp: TrendingUpIcon,
  trendingDown: TrendingDownIcon,
  arrowUp: ArrowUpIcon,
  arrowDown: ArrowDownIcon,
  creditCard: CreditCardIcon,
  settings: SettingsIcon,
  fileText: FileTextIcon,
  check: CheckIcon,
  copy: CopyIcon,
  chevronLeft: ChevronLeftIcon,
  chevronRight: ChevronRightIcon,
  chevronDown: ChevronDownIcon,
  github: GithubIcon,
  twitter: TwitterIcon,
  home: HomeIcon,
  layers: Layers2Icon,
  star: StarIcon,
  logout: LogOutIcon,
  user: UserIcon,
  image: ImageIcon,
  list: ListIcon,
  search: SearchIcon,
  chart: BarChart3Icon,
  dollar: DollarSignIcon,
  "dollar-sign": DollarSignIcon,
  help: HelpCircleIcon,
  menu: MenuIcon,
  box: BoxIcon,
  "git-branch": GitBranchIcon,
  hash: HashIcon,
  workflow: WorkflowIcon,
  figma: FigmaIcon,
  "book-open": BookOpenIcon,
  clock: ClockIcon,
  bell: BellIcon,
  "clipboard-list": ClipboardListIcon,
}