import { Pipe, PipeTransform } from '@angular/core';
import { Request } from './request.class';

@Pipe({
  name: 'requestSearch'
})
export class RequestSearchPipe implements PipeTransform {

  transform(requests: Request[], searchCriteria: string = ""): Request[] {
    if(searchCriteria === "") {
      return requests;
    }
    let selectedRequests: Request[] = [];
    searchCriteria = searchCriteria.toLowerCase();
    for(let req of requests) {
      if(req.description.toLowerCase().includes(searchCriteria)) {
        selectedRequests.push(req);
      }
    }
    return selectedRequests;
  }

}
