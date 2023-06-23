import { ModuleName, NavbarItem } from "src/app/shared/interfaces/navbar.interfaces"

export const tenantMenuItems: NavbarItem[] = [
  {
    name: 'Cuidadores',
    link: '/tenantLayout/caretakers'
  },
  {
    name: 'Agendamientos',
    link: '/tenantLayout/schedulings'
  },
  {
    name: 'Crear Ofertas',
    link: '/tenantLayout/offers/create'
  }
] 

export const caretakersMenuItems: NavbarItem[] = [
  {
    name: 'Ofertas',
    link: '/caretakerLayout/offers'
  },
  {
    name: 'Solicitudes',
    link: '/caretakerLayout/requests'
  }
] 

export const typeMenu: ModuleName = {
  tenant: tenantMenuItems,
  caretakers: caretakersMenuItems
}