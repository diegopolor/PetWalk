export interface NavbarItem {
    name: string
    link: string
}

export interface ModuleName {
    [keys: string] :    any
    tenant         :    NavbarItem[]
    caretakers     :    NavbarItem[]
}