export interface TblBodyRowTypes {
  name: string;
  age: number | string;
  address: string;
  action: any;
}

export interface TblHeadRowTypes {
  key: string;
  value: string;
  width?: string;
  align?: "left" | "center" | "right";
  sortable?: boolean;
  order?: "asc" | "desc";
}

export interface TableSkeletonPropTypes {
  columns: number | string;
}
