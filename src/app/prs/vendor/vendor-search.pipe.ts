import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from './vendor.class';

@Pipe({
  name: 'vendorSearch'
})
export class VendorSearchPipe implements PipeTransform {

  transform(vendors: Vendor[], searchCriteria: string = ""): Vendor[] {
    if(searchCriteria === "") {
      return vendors;
    }
    let selectedVendors: Vendor[] = [];
    searchCriteria = searchCriteria.toLowerCase();
    for(let vend of vendors) {
      if(vend.code.toLowerCase().includes(searchCriteria)) {
        selectedVendors.push(vend);
      }
    }
    return selectedVendors;
  }

}
