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
      title: 'Task Management App',
      descriptionLines: [
        'Web application to create, assign, and track tasks.',
        'Supports multiple roles: employees and managers.',
        'Tasks have status workflow: New → In Progress → Done → Approved.',
        'Features priority-based sorting, filtering, and dashboard overview.',
        'Built with Angular, Node.js, SQL.'
      ],
      image: 'assets/images/task.jpg',
      link: '#'
    },
    {
      title: 'Bus Ticket Booking',
      descriptionLines: [
        'Allows users to search, book, and cancel bus tickets online.',
        'Shows real-time seat availability and pricing.',
        'Users can view booking history and receive email confirmations.',
        'Admin panel manages buses, routes, and schedules.',
        'Built with Angular, Node.js, Firebase.'
      ],
      image: 'assets/images/busproject.jpg',
      link: '#'
    },
    {
      title: 'Hospital Appointment Booking',
      descriptionLines: [
        'Patients can book appointments with doctors online.',
        'Supports appointment scheduling, rescheduling, and cancellations.',
        'Admin dashboard manages doctors, availability, and patient records.',
        'Sends email notifications for appointment confirmations and reminders.',
        'Built with Angular, Node.js, Firebase.'
      ],
      image: 'assets/images/hospitalproject.jpg',
      link: '#'
    }
  ];

}
