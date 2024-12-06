'use client'
import * as React from 'react'
import { Frame, GalleryVerticalEnd, Map, PieChart, SquareTerminal } from 'lucide-react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar'
import { TeamSwitcher } from './@components/team-switcher'
import { NavMain } from './@components/nav-main'
import { NavUser } from './@components/nav-user'
import useAuth from '@/hooks/useAuth'

export function AppSidebar ({ ...props }: React.ComponentProps<typeof Sidebar>): JSX.Element {
  const { auth, loading } = useAuth()
  const data = {
    user: {
      name: loading ? 'Cargando...' : auth?.name,
      email: loading ? 'Cargando...' : auth?.email,
      avatar: 'https://ui.shadcn.com/avatars/shadcn.jpg'
    },
    teams: [
      {
        name: loading ? 'Cargando...' : auth?.name,
        logo: GalleryVerticalEnd,
        plan: ''
      }
    ],
    navMain: [
      {
        title: 'Configuracion',
        url: '/sistema',
        icon: SquareTerminal,
        isActive: false
      },
      {
        title: 'Servicios',
        url: '/sistema/servicios',
        icon: SquareTerminal,
        isActive: false
      },
      {
        title: 'Blogs',
        url: '/sistema/blogs',
        icon: SquareTerminal,
        isActive: false
      }
    ],
    projects: [
      {
        name: 'Design Engineering',
        url: '#',
        icon: Frame
      },
      {
        name: 'Sales & Marketing',
        url: '#',
        icon: PieChart
      },
      {
        name: 'Travel',
        url: '#',
        icon: Map
      }
    ]
  }
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
