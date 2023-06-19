import { ModuleName, NavbarItem } from "src/app/shared/interfaces/navbar.interfaces"

export const tenantMenuItems: NavbarItem[] = [
  {
    name: 'Cuidadores',
    link: 'caretakers-list'
  },
  {
    name: 'Agendamientos',
    link: 'scheduling-list'
  },
  {
    name: 'Crear Ofertas',
    link: 'create-offers'
  }
] 

export const caretakersMenuItems: NavbarItem[] = [
  {
    name: 'Ofertas',
    link: 'caretakers-list'
  },
  {
    name: 'Solicitudes',
    link: 'create-offers'
  }
] 

export const typeMenu: ModuleName = {
  tenant: tenantMenuItems,
  caretakers: caretakersMenuItems
}