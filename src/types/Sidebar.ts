import type { ReactElement } from "react";

export interface ISidebarItem {
  name: string;
  path: string;
  normalIcon: ReactElement;
  activeIcon: ReactElement;
}
