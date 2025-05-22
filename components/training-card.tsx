"use client"

import { Card, CardContent } from "./ui/card"
import { Training } from "@/lib/data"
import { Icons } from "./icons"

interface TrainingCardProps {
  training: Training
}

export function TrainingCard({ training }: TrainingCardProps) {
  const IconComponent = Icons[training.icon as keyof typeof Icons]
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-0">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <div className={`flex h-10 w-10 items-center justify-center rounded-full ${training.color}`}>
              {IconComponent && <IconComponent className="h-5 w-5 text-white" />}
            </div>
            <div>
              <h3 className="font-medium">{training.title}</h3>
            </div>
          </div>
          <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-green-500`}>
            <Icons.users className="h-4 w-4 text-white" />
          </div>
        </div>
        
        <div className="grid grid-cols-3 border-t px-4 py-3 text-xs">
          <div className="flex flex-col">
            <span className="text-muted-foreground">Alunos</span>
            <div className="mt-1 flex items-center font-medium">
              <Icons.users className="mr-1 h-3 w-3" />
              {training.stats.users}
            </div>
          </div>
          
          <div className="flex flex-col">
            <span className="text-muted-foreground">Duração</span>
            <div className="mt-1 flex items-center font-medium">
              <Icons.clock className="mr-1 h-3 w-3" />
              {training.stats.hours}h
            </div>
          </div>
          
          <div className="flex flex-col">
            <span className="text-muted-foreground">Avaliação</span>
            <div className="mt-1 flex items-center font-medium">
              <Icons.star className="mr-1 h-3 w-3 text-yellow-500" />
              {training.stats.rating.toFixed(1)}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}