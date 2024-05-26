import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  details = {
    about: "Hello there! I’m an IT professional with a twist. Beginning my journey as a software engineer, I ventured into a different arena by serving my country in the military for 8 fulfilling years. Now, I’m on a mission to reintegrate into the dynamic IT landscape, seeking opportunities in software engineering, DevOps, cloud security or cyber threat intelligence. Let’s connect and explore the possibilities together!",
    skills: [
      {
        title: "Personal & Professional Development",
        body: "Throughout my time outside the IT industry, I pursued and obtained the CompTIA Security+ certification. I also maintained a commitment to self-led education and staying abreast of industry developments, showcasing my proactive approach and dedication to lifelong learning."
      },
      {
        title: "Project Management",
        body: "I created customized web applications by adapting technology and utilizing best practices that aligned with the scope and vision of the organization. This allowed me to adhere to schedule, budget, and completion of tasks effectively."
      },
      {
        title: "Policy & Compliance",
        body: "I implemented procedures and data validation mechanisms aligned with program standards and industry regulations, resulting in 100% successful compliance audits. This enhanced organizational efficiency and security, reflecting my dedication to excellence in every aspect of my work."
      }
    ]
  }
}
