import {Group} from "../../groups/shared/group.model";

export interface Account {
  id: number;
  name: string;
  email: string;
  password: string;
  group: Group;
}
