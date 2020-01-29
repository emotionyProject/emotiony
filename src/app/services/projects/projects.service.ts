import { Injectable } from '@angular/core';
import { Tag } from '../../models/tag.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Tag[] = [];
  modificar: boolean = false;
  editTag: Tag;

  constructor() { 
    // let tag= new Tag('#bryant');
    // this.projects.push(tag);
  }

  addTag(data: any){
    let tag: Tag = new Tag(data.newTag, data.ubicacion1, data.ubicacion2, data.language,
                     data.startDate, data.startTime, data.endDate, data.endTime, data.hashtag, data.from);
    let encontrado = false;

    for (let i = 0 ; i < this.projects.length && !encontrado; i++) {
      if (this.projects[i].newTag === tag.newTag) {
        encontrado = true;
        this.projects[i] = tag;
      }
    }

    if (!encontrado) {
      this.projects.push(tag);
    }
    this.editTag = new Tag('');
  }

  showProjects() {
    // console.log(this.projects);
    return this.projects;
  }

  showProject(tag: string) {
    let newTag: Tag;
    let encontrado = false;
    for (let i = 0 ; i < this.projects.length && !encontrado; i++) {
      if (this.projects[i].newTag === tag) {
        encontrado = true;
        newTag = this.projects[i];
      }
    }
    return newTag;
  }

  editarTag(tag: Tag) {
    this.editTag = tag;
  }

  showEditTag() {
    return this.editTag;
  }

  removeTag(tag: Tag){
     this.projects = this.projects.filter((tagItem: Tag) =>tag.newTag !== tagItem.newTag);
  }

}
