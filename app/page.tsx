import { Metadata } from "next";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  RefreshCw, // Corrigido de RefreshCcw para RefreshCw (padrão da lucide)
} from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { StatCard } from "@/components/stat-card";
import { RevenueChart } from "@/components/revenue-chart";
import { TrainingCard } from "@/components/training-card";
import { Button } from "@/components/ui/button";
import { stats, chartData, trainings } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dashboard | BS Members",
  description: "Dashboard de gestão de treinamentos e membros",
};

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto p-4 md:p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl font-bold">Bem vindo, Lucas!</h1>
                  <p className="text-sm text-muted-foreground">
                    Aqui ficam suas estatísticas da sua conta!
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2 sm:mt-0">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Baixar relatório
                  </Button>
                  {/* Botão "Atualizar" agora com o estilo padrão (preenchido) */}
                  <Button size="sm">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Atualizar
                  </Button>
                </div>
              </div>
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
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
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
    </div>
  );
}