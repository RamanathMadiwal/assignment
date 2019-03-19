import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupByPipe'
})
export class GroupByPipePipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }


  transform(collection: Array, property: string): Array {
    // prevents the application from breaking
    // if the array of objects doesn't exist yet
    if(!collection) {
      return null;
    }

    const groupedCollection = collection.reduce((previous, current)=> {
      if(!previous[current[property]]) {
        previous[current[property]] = [current];
      } else {
        previous[current[property]].push(current);
      }

      return previous;
    }, {});

    // this will return an array of objects, each object containing a group of objects
    return Object.keys(groupedCollection).map(key => ({ key, value: groupedCollection[key] }));
  }

}