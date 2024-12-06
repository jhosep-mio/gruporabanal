import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { AuthProviderPrivate } from '@/context/AuthProviderPrivate'
import { AppSidebar } from './@sidebar/app-sidebar'
import { HeaderSistema } from './@sidebar/header-sistema'

export const metadata = {
  title: 'Sistema - Grupo Rabanal',
  description: 'Sistema - Grupo Rabanal'
}

export default function StoreLayout ({ children }: { children: React.ReactNode }) {
  return (
    <AuthProviderPrivate>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset >
          <HeaderSistema />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </AuthProviderPrivate>
  )
}
