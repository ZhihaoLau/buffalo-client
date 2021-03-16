import { ElementType } from "react";
import { ControlType, ValueOf } from "../pages/Editor/property-controls";

export interface PropsItem {
  /** 属性中文名称 */
  zhName?: string;
  /** 类型，属性编辑器会根据这个类型渲染属性编辑器组件 */
  type: ValueOf<typeof ControlType>;
  /** 占位符, 某些属性编辑器组件会需要 */
  placeholder?: string;
  /** 是否必填写 */
  required?: boolean;
  /** 默认值 */
  defaultValue?: any;
  /** 值 */
  value?: any;
}

export interface PropsMap {
  [k: string]: PropsItem;
}
export interface Material {
  id: string;
  name: string;
  zhName: string;
}

export interface CanvasComponent {
  id: string;
  name: string;
  zhName: string;
  materialId: string;
  props: PropsMap;
}

export type CanvasElementType = ElementType & {
  propertyControls?: PropsMap;
};
