import {Component} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {ProjectItemComponent} from "./project-item/project-item.component";

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  src: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectItemComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  protected projects: Project[]  = [
    {
      name: 'My Portfolio',
      description: 'Feel free to check out the code for my portfolio on Github. It\'s open for exploration, and you\'re welcome to fork it and create your own version!',
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Bootstrap', 'GitHub Pages', 'Github Actions'],
      src: './assets/projects/portfolio.png',
      link: '/',
    },
    {
      name: 'Institute Web Application Project',
      description: 'Ever wondered Institue Management.? Dive into the code of this project, built with Angular, TypeScript, HTML, CSS, Node, and express, to see a simplified version of the process.',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Node', 'Express', 'Firebase'],
      src: './assets/projects/image.png',
      link: '/',
    },
    {
      name: 'Simplified Food Delivery Web App',
      description: 'A user-friendly web application UI designed for a seamless food ordering experience. This app allows users to browse menus, add items to their cart, and proceed with simple checkout options. Built with a responsive layout',
      technologies: ['Angular', 'Java Script', 'HTML', 'CSS', 'Node', 'Express', 'MongoDb'],
      src: './assets/projects/food.png',
      link: 'https://github.com/Balajimantro/MERN-PROJECT',
    },
    {
      name: 'Number Game',
      description: 'Discover an upgraded twist on the classic number game! This project integrates both frontend and backend development, using Java 11 with Spring Boot 2.7 for server-side logic and Angular 18 as user interface, styled with Bootstrap and FontAwesome',
      technologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'Bootstrap', 'FontAwesome'],
      src: './assets/projects/numbers.png',
      link: '/',
    },
    {
      name: 'Data Science Project: The Battle of Neighborhoods',
      description: 'A data science project analyzing Tallinn\'s neighborhoods using data from Foursquare, Wikipedia, and transport sites. It identifies ideal residential areas through clustering and regression techniques.',
      technologies: ['Python', 'Jupiter Notebook', 'Pandas', 'Numpy', 'Matplotlib', 'Seaborn', 'Foursquare API'],
      src: './assets/projects/data-science.png',
      link: '',
    }
  ];
}
