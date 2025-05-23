"use client"

import { Search, Bell, User } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { currentUser } from "@/lib/data"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export function Navbar() {
  return (
    <div className="flex h-16 items-center justify-between border-b px-4 md:px-6">
      <div className="flex items-center gap-4 lg:gap-6">
        <h1 className="text-xl font-bold">
          <span className="inline-flex items-center gap-2 bg-[#00AA66] rounded-sm p-1 px-2 text-white">
            <span className="block h-4 w-4 rounded-sm bg-white" />
            BS MEMBERS
          </span>
        </h1>
        <div className="hidden md:flex md:flex-1">
          <div className="relative flex w-full max-w-md">
            <Input
              className="pl-8 md:w-[300px] lg:w-[400px]"
              placeholder="Pesquisar..."
            />
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <User className="h-5 w-5" />
        </Button>
        <Avatar className="h-8 w-8 border">
          <AvatarImage 
            src={currentUser.image} 
            alt={currentUser.name} 
          />
          <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}