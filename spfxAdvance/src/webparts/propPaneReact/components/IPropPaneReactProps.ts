import { ICourse } from "../../../common/ICourse";

import { IPropertyFieldGroupOrPerson } from 
  "@pnp/spfx-property-controls/lib/PropertyFieldPeoplePicker";

export interface IPropPaneReactProps {
  //course: ICourse;
  color: string;
  people: IPropertyFieldGroupOrPerson[]
}