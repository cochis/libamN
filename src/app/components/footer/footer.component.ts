import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScrollService } from '../../scroll.service';
import { NgClass, NgIf } from '@angular/common';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [ReactiveFormsModule, FormsModule, NgClass, NgIf]
})
export class FooterComponent implements OnInit {

  contactForm!: FormGroup;
  isSubmitted = false;
  submitError = false;

  constructor(
    private fb: FormBuilder,
    private scrollService: ScrollService
  ) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    this.isSubmitted = false;
    this.submitError = false;

    if (this.contactForm.invalid) {
      // Marcar todos los campos como "tocados" para mostrar errores
      this.contactForm.markAllAsTouched();
      return;
    }

    // Aquí iría la lógica de envío (ej. HttpClient.post)
    // Simulación de envío:
    console.log("Enviando formulario:", this.contactForm.value);

    // Simular éxito
    this.isSubmitted = true;
    this.contactForm.reset();

    // Para simular error:
    // this.submitError = true;
  }

  // Helpers para acceder fácil a los controles en el HTML
  get f() { return this.contactForm.controls; }

  onScrollTo(elementId: string): void {
    this.scrollService.scrollTo(elementId);
  }
}