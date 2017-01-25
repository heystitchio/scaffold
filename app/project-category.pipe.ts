import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project';
import { Category } from './categories';

@Pipe({ 
	name: 'CatPipe',
	pure: false
})

export class CatPipe implements PipeTransform {
  transform(allProjects:Project[], category:Category) {
	var categoryofchoice = category;
    return allProjects.filter((project)=> project.cat === categoryofchoice.name);
  }
}