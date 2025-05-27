// components/sidebar.tsx

"use client"

import { Home, FileText, Lock, Settings, BarChart2, Star, LifeBuoy, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { currentUser } from "@/lib/data"; // Supondo que você tenha este dado

// Você pode criar um componente de link de navegação separado para evitar repetição
const NavLink = ({ icon: Icon, children, active = false }: { icon: React.ElementType; children: React.ReactNode; active?: boolean }) => (
    <a href="#" className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
        active 
        ? 'bg-zinc-800 text-white' 
        : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
    }`}>
        <Icon className="h-5 w-5" />
        {children}
    </a>
);


export function Sidebar() {
    return (
        <aside className="hidden md:flex w-64 flex-col gap-y-6 border-r border-zinc-800 bg-zinc-900 p-4">
            {/* Logo */}
            <div className="flex items-center gap-2 px-2">
                <span className="block h-5 w-5 rounded-sm bg-[#00AA66]" />
                <h1 className="text-xl font-bold text-white">BS MEMBERS</h1>
            </div>

            {/* User Profile */}
            <div className="flex flex-col items-start gap-4 px-2">
                <button className="flex w-full items-center gap-3 rounded-md p-2 hover:bg-zinc-800">
                    <Avatar className="h-10 w-10 border-2 border-zinc-700">
                        <AvatarImage src={currentUser.image} alt={currentUser.name} />
                        <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start">
                        <span className="text-sm font-medium text-white">{currentUser.name}</span>
                        <span className="text-xs text-zinc-400">Treinador</span>
                    </div>
                </button>
                <div className="w-full">
                     <button className="w-full text-left text-sm font-semibold bg-[#00AA66] text-white px-3 py-1.5 rounded-md">Treinamentos criados</button>
                     <button className="w-full text-left text-sm text-zinc-400 hover:text-white mt-2 px-3 py-1.5">Usuários nos Treinamentos</button>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-1 flex-col gap-y-1">
                <NavLink icon={Home} active>Início</NavLink>
                <NavLink icon={Star}>Meus Treinamentos</NavLink>
                <NavLink icon={FileText}>Faturas</NavLink>
                <NavLink icon={Lock}>Assinaturas</NavLink>
                <NavLink icon={Settings}>Integrações</NavLink>
                <NavLink icon={BarChart2}>Relatório</NavLink>
                {/* Adicione outros links conforme necessário */}
            </nav>

            {/* Footer */}
            <div className="mt-auto flex flex-col gap-y-2">
                <NavLink icon={LifeBuoy}>Suporte</NavLink>
                <NavLink icon={LogOut}>Sair</NavLink>
            </div>
        </aside>
    );
}