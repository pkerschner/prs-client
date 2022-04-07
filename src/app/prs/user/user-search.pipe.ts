import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(users: User[], searchCriteria: string = ""): User[] {
    if(searchCriteria === "") {
      return users;
    }
    let selectedUsers: User[] = [];
    searchCriteria = searchCriteria.toLowerCase();
    for(let us of users) {
      if(us.username.toLowerCase().includes(searchCriteria)) {
        selectedUsers.push(us);
      }
    }
    return selectedUsers;
  }

}
