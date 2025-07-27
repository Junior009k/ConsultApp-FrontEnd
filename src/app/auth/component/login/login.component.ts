import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  showPassword = false;
  loginError = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  ngOnInit(): void {}

  // Getter para acceder fácilmente a los campos del formulario
  get f() { 
    return this.loginForm.controls; 
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    this.submitted = true;
    this.loginError = false;

    // Detener si el formulario es inválido
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    // Simular llamada al API de autenticación
    setTimeout(() => {
      const credentials = this.loginForm.value;
      
      // Simular validación (demo)
      if (credentials.email === 'admin@example.com' && credentials.password === '123456') {
        // Login exitoso
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', credentials.email);
        
        // Redireccionar al dashboard
        this.router.navigate(['/dashboard']);
      } else {
        // Error de login
        this.loginError = true;
      }
      
      this.loading = false;
    }, 1500);
  }

  onGoogleLogin(): void {
    console.log('Login con Google');
    // Implementar login con Google
  }

  onFacebookLogin(): void {
    console.log('Login con Facebook');
    // Implementar login con Facebook
  }

  dismissError(): void {
    this.loginError = false;
  }
}