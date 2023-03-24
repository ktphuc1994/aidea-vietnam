export interface InterfaceTinhThanh {
  code: string;
  name: string;
  name_with_type: string;
  slug: string;
  type: string;
}
export interface InterfaceTinhThanhList
  extends Record<string, InterfaceTinhThanh> {}
// code: '01';
// name: 'Hà Nội';
// name_with_type: 'Thành phố Hà Nội';
// slug: 'ha-noi';
// type: 'thanh-pho';

export interface InterfaceQuanHuyen {
  code: string;
  name: string;
  name_with_type: string;
  parent_code: string;
  path: string;
  path_with_type: string;
  slug: string;
  type: string;
}
export interface InterfaceQuanHuyenList
  extends Record<string, InterfaceQuanHuyen> {}
// code: '001';
// name: 'Ba Đình';
// name_with_type: 'Quận Ba Đình';
// parent_code: '01';
// path: 'Ba Đình, Hà Nội';
// path_with_type: 'Quận Ba Đình, Thành phố Hà Nội';
// slug: 'ba-dinh';
// type: 'quan';
