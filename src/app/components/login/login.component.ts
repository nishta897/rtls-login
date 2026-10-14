import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage = '';

  constructor( private fb: FormBuilder, private authService: AuthService, private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please fill out all required fields correctly.';
      return;
    }

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: (res) => {
        if (res?.payload?.token) {
          sessionStorage.setItem('token', res.payload.token);
          sessionStorage.setItem('user', JSON.stringify(res.payload.user));
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Invalid login response.';
        }
      },
      error: () => {
        this.errorMessage = 'Login failed. Please check your credentials.';
      }
    });
  }
}
