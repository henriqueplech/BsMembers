// app/dashboard/page.tsx (ou onde quer que seu arquivo esteja)

import { Metadata } from "next";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  RefreshCw,
  Search,
  Bell,
  User,
} from "lucide-react";

import { Sidebar } from "@/components/sidebar";
import { StatCard } from "@/components/stat-card";
import { RevenueChart } from "@/components/revenue-chart";
import { TrainingCard } from "@/components/training-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle"; // Importe o ThemeToggle
import { stats, chartData, trainings } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dashboard | BS Members",
  description: "Dashboard de gestão de treinamentos e membros",
};

export default function Dashboard() {
  return (
    // A estrutura principal agora é apenas o flex container
    <div className="flex min-h-screen bg-zinc-900 text-white">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8">
        {/* CABEÇALHO DA PÁGINA PRINCIPAL */}
        <header className="flex items-center justify-between pb-6 border-b border-zinc-800">
          {/* Saudação (Movida para aqui, mas no design está abaixo) */}
          <div>
            <h1 className="text-2xl font-bold">Bem vindo, Lucas!</h1>
            <p className="text-sm text-zinc-400">
              Aqui ficam suas estatísticas da sua conta!
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Barra de Pesquisa */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <Input
                type="search"
                placeholder="Pesquisar..."
                className="h-9 w-64 rounded-md border-0 bg-zinc-800 pl-9 text-sm text-zinc-50 placeholder:text-zinc-400 focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-emerald-500"
              />
            </div>
            
            {/* Ícones de Ação */}
            <div className="flex items-center gap-1">
                <ThemeToggle />
                <Button variant="ghost" size="icon" className="rounded-full text-zinc-400 hover:bg-zinc-800 hover:text-white">
                  <Bell className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full text-zinc-400 hover:bg-zinc-800 hover:text-white">
                  <User className="h-5 w-5" />
                </Button>
            </div>
          </div>
        </header>

        {/* CONTEÚDO DA PÁGINA */}
        <div className="mt-6">
            {/* Botões de Ação (Abaixo do cabeçalho) */}
            <div className="flex justify-end items-center gap-2 mb-6">
                <Button variant="outline" size="sm" className="bg-transparent border-zinc-700 hover:bg-zinc-800">
                    <Download className="mr-2 h-4 w-4" />
                    Baixar relatório
                </Button>
                {/* Botão "Atualizar" com a cor da marca */}
                <Button size="sm" className="bg-[#00AA66] text-white hover:bg-[#00995c]">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Atualizar
                </Button>
            </div>

            {/* Stats Grid */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <StatCard
                  key={stat.id}
                  title={stat.title}
                  value={stat.value}
                  change={stat.change}
                  icon={stat.icon}
                  prefix={stat.prefix}
                />
              ))}
            </div>

            {/* Revenue Chart */}
            <div className="mb-8">
              <RevenueChart data={chartData} />
            </div>

            {/* Popular Trainings */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                  Treinamentos Populares
                </h2>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-zinc-800">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-zinc-800">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {trainings.map((training) => (
                  <TrainingCard key={training.id} training={training} />
                ))}
              </div>
            </div>
        </div>
      </main>
    </div>
  );
}