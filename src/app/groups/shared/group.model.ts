import {User} from "../../auth/shared/user.model";

export interface Group {
  id: number;
  name: string;
  user: User;
}
