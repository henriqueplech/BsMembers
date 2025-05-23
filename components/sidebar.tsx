"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { currentUser } from "@/lib/data"
import {
  Home,
  Layers,
  FileText,
  CreditCard,
  Settings,
  HelpCircle,
  BarChart,
  LogOut,
  Menu,
  X,
  ClipboardList
} from "lucide-react"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

interface NavItemProps {
  href: string
  icon: React.ReactNode
  label: string
  active?: boolean
}

function NavItem({ href, icon, label, active }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
        active ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  )
}

export function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  
  return (
    <div className={cn(
      "relative flex flex-col border-r bg-card transition-all",
      collapsed ? "w-[80px]" : "w-[270px]"
    )}>
      <div className="absolute right-[-12px] top-4 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 rounded-full bg-background shadow-md"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <Menu className="h-4 w-4" />
          ) : (
            <X className="h-4 w-4" />
          )}
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </div>
      
      <div className="flex flex-col items-center pt-6">
        <Avatar className={cn(
          "border-4 border-[#006653] transition-all",
          collapsed ? "h-10 w-10" : "h-24 w-24"
        )}>
          <AvatarImage src={currentUser.image} alt={currentUser.name} />
          <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
        </Avatar>
        
        {!collapsed && (
          <div className="mt-4 text-center">
            <h2 className="text-lg font-semibold">{currentUser.name}</h2>
            <div className="mt-1 inline-flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-500">
              {currentUser.role}
            </div>
          </div>
        )}
      </div>
      
      <div className={cn(
        "mt-4 border-t border-b py-2",
        collapsed ? "px-2" : "px-4"
      )}>
        {!collapsed && (
          <div className="mb-2 flex items-center justify-between py-1">
            <span className="text-xs font-medium uppercase text-muted-foreground">
              Treinamentos criados
            </span>
            <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium">
              18
            </span>
          </div>
        )}
        
        <div className={cn(
          "flex",
          collapsed ? "justify-center" : "justify-between"
        )}>
          {!collapsed && (
            <div className="text-xs text-muted-foreground">
              Usuários nos Treinamentos
            </div>
          )}
          <div className={cn(
            "rounded-full bg-green-500 px-2 py-0.5 text-xs font-medium text-white",
            collapsed && "mt-1"
          )}>
            826
          </div>
        </div>
      </div>
      
      <div className={cn(
        "flex-1 overflow-auto px-3 py-4",
        collapsed && "flex flex-col items-center"
      )}>
        <nav className="grid gap-1">
          <NavItem
            href="/"
            icon={<Home className="h-5 w-5" />}
            label="Início"
            active={pathname === '/'}
          />
          <NavItem
            href="/trainings"
            icon={<Layers className="h-5 w-5" />}
            label="Meus treinamentos"
            active={pathname === '/trainings'}
          />
          <NavItem
            href="/reports"
            icon={<BarChart className="h-5 w-5" />}
            label="Relatório"
            active={pathname === '/reports'}
          />
          <NavItem
            href="/invoices"
            icon={<FileText className="h-5 w-5" />}
            label="Faturas"
            active={pathname === '/invoices'}
          />
          <NavItem
            href="/subscription"
            icon={<CreditCard className="h-5 w-5" />}
            label="Assinaturas"
            active={pathname === '/subscription'}
          />
          <NavItem
            href="/integrations"
            icon={<Settings className="h-5 w-5" />}
            label="Integrações"
            active={pathname === '/integrations'}
          />
          <NavItem
            href="/templates"
            icon={<ClipboardList className="h-5 w-5" />}
            label="Templates"
            active={pathname === '/templates'}
          />
          <NavItem
            href="/support"
            icon={<HelpCircle className="h-5 w-5" />}
            label="Suporte"
            active={pathname === '/support'}
          />
        </nav>
      </div>
      
      <div className="mt-auto border-t p-4">
        <Button variant="ghost" className="w-full justify-start text-destructive">
          <LogOut className="mr-2 h-5 w-5" />
          {!collapsed && <span>Sair</span>}
        </Button>
      </div>
    </div>
  )
}