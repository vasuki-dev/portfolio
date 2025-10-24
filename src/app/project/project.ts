import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.html',
  styleUrl: './project.scss'
})
export class Project {
 projects = [
    { title: 'Task Management App', description: 'Angular + Node.js', image: 'assets/project1.jpg', link: '#' },
    { title: 'Portfolio Website', description: 'Angular + Bootstrap', image: 'assets/project2.jpg', link: '#' },
    { title: 'API Dashboard', description: 'Angular + REST API', image: 'assets/project3.jpg', link: '#' }
  ];
}
