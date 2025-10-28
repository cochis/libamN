import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScrollService } from '../../scroll.service';
import { NgClass, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [ReactiveFormsModule, FormsModule, NgClass, NgIf, HttpClientModule]
})
export class FooterComponent implements OnInit {
  private readonly WHATSAPP_NUMBER = '525557434444';
  contactForm!: FormGroup;
  isSubmitted = false;
  submitError = false;
  // <-- 1. (Opcional pero recomendado) Añade variables para guardar los timers
  private successTimer: any;
  private errorTimer: any;

  constructor(
    private fb: FormBuilder,
    private scrollService: ScrollService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    // <-- 2. Limpia cualquier timer anterior si el usuario vuelve a enviar
    clearTimeout(this.successTimer);
    clearTimeout(this.errorTimer);
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    const { nombre, telefono, correo } = this.contactForm.value;

    // Construye el mensaje predefinido
    const message = `¡Hola! Me gustaría solicitar más información.
    
    *Datos de Contacto:*
    Nombre: ${nombre}
    Teléfono: ${telefono}
    Correo: ${correo}
    
    Por favor, contáctenme a la brevedad.`;

    // Codifica el mensaje para la URL
    const encodedMessage = encodeURIComponent(message);

    // Construye la URL de WhatsApp API
    const whatsappUrl = `https://wa.me/${this.WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Abre el enlace en una nueva pestaña
    window.open(whatsappUrl, '_blank');
  }

  // Helpers para acceder fácil a los controles en el HTML
  get f() { return this.contactForm.controls; }

  onScrollTo(elementId: string): void {
    this.scrollService.scrollTo(elementId);
  }
}