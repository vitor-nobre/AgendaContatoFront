import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMascaraTelefone]'
})
export class MascaraTelefoneDirective {
  constructor(protected el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: any) {
    let value = event.target.value.replace(/\D/g, '');

    if (value.length > 11) {
      value = value.substring(0, 11);
    }

    let formatted = '';
    if (value.length <= 10) {
      formatted = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
      formatted = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }

    this.el.nativeElement.value = formatted.trim();
  }
}
