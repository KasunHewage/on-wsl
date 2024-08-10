export type SidebarSubItemTypes = {
  title: string;
  path: string;
  icon: any;
};

export type SidebarItemTypes = {
  title: string;
  path: string;
  icon: any;
  subItems?: SidebarSubItemTypes[];
};
