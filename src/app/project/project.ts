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
    {
      title: 'Expense Tracker Application',
      descriptionLines: [
        'Tech: Angular 20, TypeScript, RxJS, Angular Signals, Node.js, Express.js, MongoDB Atlas, Mongoose, JWT',
        'Developed a full-stack Expense Tracker application using Angular 20, Node.js, Express.js, and MongoDB Atlas.',
        'Implemented secure user authentication using JWT access and refresh tokens.',
        'Developed expense management features with expense categorization and CRUD operations.',
        'Created a dashboard with expense analytics and spending summaries.',
        'Implemented bill upload functionality for managing expense-related documents.',
        'Integrated RESTful APIs between the Angular frontend and Node.js backend.',
        'Configured CI/CD deployment using GitHub, Render, and Vercel.'
      ],
      image: 'assets/images/expense-tracker.jpg',
      link: 'https://vasuki-expense-tracker.vercel.app/login'
    },

    {
      title: 'Resource Allocation Management System',
      descriptionLines: [
        'Tech: Angular, TypeScript, Node.js, Express.js, SQL Server, REST APIs',
        'Developed a resource management application to manage and allocate resources across different projects.',
        'Implemented resource listing, assignment, and project allocation workflows.',
        'Developed reusable Angular components and integrated backend REST APIs.',
        'Implemented approval workflows to manage resource allocation requests.',
        'Designed and managed database operations using SQL Server.'
      ],
      image: 'assets/images/resource-allocation.png',
      link: ''
    },
    {
      title: 'AI-Powered Grammar Checker',
      descriptionLines: [
        'Tech: Angular, TypeScript, Node.js, Express.js, AI API Integration, REST APIs',
        'Developed an AI-powered application to check grammar and improve sentence structure.',
        'Integrated an AI API to analyze user-provided text and generate corrected sentences.',
        'Implemented text input and response display features for grammar correction.',
        'Integrated frontend and backend services to process AI API requests.',
        'Handled API responses and displayed grammar suggestions to users.'
      ],
      image: 'assets/images/ai-grammar-check.jpg',
      link: ''
    },
    {
      title: 'Payroll Management System - Production Application',
      descriptionLines: [
        'Tech: Angular (v14 → v20), Node.js(v22), Nginx, Reverse Proxy, Upstream, REST APIs, SQL Server',
        'Migrated the frontend application from Angular 14 to Angular 20, improving performance and adopting modern Angular features.',
        'Refactored legacy components and ensured compatibility with the latest Angular architecture.',
        'Implemented Nginx Reverse Proxy and Upstream configuration for production deployment.',
        'Configured and deployed multiple client environments (4 live sites) using Nginx server configuration.',
        'Ensured stable routing between frontend and backend services in production environments.'
      ],
      image: 'assets/images/payroll.jpg',
      link: ''
    },
    {
      title: 'HRIS (SaaS) Application - In Development',
      descriptionLines: [
        'Tech: Angular (v17 → v19), Node.js (v20), Express.js, REST APIs, SQL Server, PrimeNG',
        'Developed core modules including Organization Management, Employee Management, Attendance Management, and Exit Management.',
        'Built reusable UI components and implemented RESTful APIs.',
        'Designed scalable frontend architecture using modern Angular practices.',
        'Optimized database operations for efficient data handling.',
        'Collaborated with the development team to build a modular HR management platform.'
      ],
      image: 'assets/images/HRIS.jpg',
      link: ''
    },
    {
      title: 'Task Management App',
      descriptionLines: [
        'Tech: Angular v(20), Node.js (v20), Express.js, REST APIs, Nginx, Reverse Proxy, MySQL Server',
        'Web application to create, assign, and track tasks.',
        'Supports multiple roles: employees and managers.',
        'Tasks have status workflow: New → In Progress → Done → Approved.',
        'Features priority-based sorting, filtering, and dashboard overview.',
        'Built with Angular, Node.js, SQL.'
      ],
      image: 'assets/images/task.jpg',
      link: ''
    },
    {
      title: 'Bus Ticket Booking',
      descriptionLines: [
        'Tech: Angular v(14), Node.js, Express.js, Firebase',
        'Allows users to search, book, and cancel bus tickets online.',
        'Shows real-time seat availability and pricing.',
        'Users can view booking history and receive email confirmations.',
        'Admin panel manages buses, routes, and schedules.',
        'Built with Angular, Node.js, Firebase.'
      ],
      image: 'assets/images/busproject.jpg',
      link: ''
    },
    {
      title: 'Hospital Appointment Booking',
      descriptionLines: [
        'Tech: Angular v(14), Node.js, Express.js, Firebase',
        'Patients can book appointments with doctors online.',
        'Supports appointment scheduling, rescheduling, and cancellations.',
        'Admin dashboard manages doctors, availability, and patient records.',
        'Sends email notifications for appointment confirmations and reminders.',
        'Built with Angular, Node.js, Firebase.'
      ],
      image: 'assets/images/hospitalproject.jpg',
      link: ''
    }
  ];
  selectedProject: any = null;

  openProject(project: any) {
    this.selectedProject = project;
    console.log(this.selectedProject, '--------------> selected project');
  }

  closeProject() {
    this.selectedProject = null;
  }
}
