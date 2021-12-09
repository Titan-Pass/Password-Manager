import {Group} from "../../groups/shared/group.model";
import {User} from "../../auth/shared/user.model";

export interface Account {
  id: number;
  name: string;
  email: string;
  encryptedPassword: string;
  masterPassword: string;
  group: Group;
  user: User;
}
