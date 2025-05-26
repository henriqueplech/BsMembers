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
import { Progress } from "./ui/progress"

// Interface NavItem (sem alterações)
interface NavItemProps {
  href: string
  icon: React.ReactNode
  label: string
  active?: boolean
  collapsed: boolean
}

// Componente NavItem (sem alterações)
function NavItem({ href, icon, label, active, collapsed }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
        active ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      )}
    >
      {icon}
      {!collapsed && <span>{label}</span>}
    </Link>
  )
}

// Lógica de cálculo de porcentagem (sem alterações)
const usuariosAtuais = 826;
const metaDeUsuarios = 1500;
const porcentagemUsuarios = (usuariosAtuais / metaDeUsuarios) * 100;

// Exemplo de dados para "Treinamentos criados"
const treinamentosCriados = 18;
const metaDeTreinamentos = 40;
const porcentagemTreinamentos = (treinamentosCriados / metaDeTreinamentos) * 100;


export function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  
  return (
    <div className={cn(
      "relative hidden md:flex flex-col border-r bg-card transition-all",
      collapsed ? "w-[80px]" : "w-[320px]"
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
      
      {/* Seção do Avatar (sem alterações) */}
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
      
      {/* ================================================================== */}
      {/* =========== INÍCIO DA SEÇÃO ATUALIZADA =========================== */}
      {/* ================================================================== */}

      {/* Exibimos a seção de estatísticas apenas quando a sidebar não está colapsada */}
      {!collapsed && (
        <div className="mt-6 space-y-5 px-4">
          
          {/* Item 1: Treinamentos Criados - Agora com a mesma estrutura e gradiente */}
          <div className="flex flex-col space-y-2">
            <span className="text-sm font-medium text-primary">
              Treinamentos criados
            </span>
            <Progress 
              value={porcentagemTreinamentos} 
              className="h-2 bg-muted" 
              indicatorClassName="bg-gradient-to-r from-[#006653] to-[#00E57C]"
            />
          </div>

          {/* Item 2: Usuários nos Treinamentos - Estrutura simplificada com gradiente */}
          <div className="flex flex-col space-y-2">
            <span className="text-sm font-medium text-primary">
              Usuários nos Treinamentos
            </span>
            <Progress 
              value={porcentagemUsuarios} 
              className="h-2 bg-muted" 
              indicatorClassName="bg-gradient-to-r from-[#006653] to-[#00E57C]"
            />
          </div>

        </div>
      )}
      
      {/* ================================================================== */}
      {/* =========== FIM DA SEÇÃO ATUALIZADA =============================== */}
      {/* ================================================================== */}
      
      {/* Navegação Principal (sem alterações) */}
      <div className={cn(
        "flex-1 overflow-auto py-4",
        collapsed ? "px-2" : "px-3",
        !collapsed && "mt-4" // Adiciona um espaçamento quando expandido
      )}>
        <nav className="grid gap-1">
          <NavItem href="/" icon={<Home className="h-5 w-5" />} label="Início" active={pathname === '/'} collapsed={collapsed} />
          <NavItem href="/trainings" icon={<Layers className="h-5 w-5" />} label="Meus treinamentos" active={pathname === '/trainings'} collapsed={collapsed} />
          <NavItem href="/invoices" icon={<FileText className="h-5 w-5" />} label="Faturas" active={pathname === '/invoices'} collapsed={collapsed} />
          <NavItem href="/subscription" icon={<CreditCard className="h-5 w-5" />} label="Assinaturas" active={pathname === '/subscription'} collapsed={collapsed} />
          <NavItem href="/integrations" icon={<Settings className="h-5 w-5" />} label="Integrações" active={pathname === '/integrations'} collapsed={collapsed} />
          <NavItem href="/reports" icon={<BarChart className="h-5 w-5" />} label="Relatório" active={pathname === '/reports'} collapsed={collapsed} />
          <NavItem href="/templates" icon={<ClipboardList className="h-5 w-5" />} label="Templates" active={pathname === '/templates'} collapsed={collapsed} />
          <NavItem href="/support" icon={<HelpCircle className="h-5 w-5" />} label="Suporte" active={pathname === '/support'} collapsed={collapsed} />
        </nav>
      </div>
      
      {/* Botão Sair (sem alterações) */}
      <div className="mt-auto border-t p-4">
        <Button variant="ghost" className={cn("w-full text-destructive", collapsed ? "justify-center" : "justify-start")}>
          <LogOut className={cn(!collapsed && "mr-2", "h-5 w-5")} />
          {!collapsed && <span>Sair</span>}
        </Button>
      </div>
    </div>
  )
}