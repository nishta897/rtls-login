import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  logoutForm!: FormGroup;
  logoutMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.logoutForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  logout(): void {
    if (this.logoutForm.invalid) {
      this.errorMessage = 'Please fill in all fields correctly.';
      return;
    }

    const { email, password } = this.logoutForm.value;

   
    sessionStorage.clear();
    this.logoutMessage = `User ${email} has been logged out.`;
    this.errorMessage = '';
  }
}
