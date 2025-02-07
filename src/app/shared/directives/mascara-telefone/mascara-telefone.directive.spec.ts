import { MascaraTelefoneDirective } from './mascara-telefone.directive';
import { ElementRef } from '@angular/core';

describe('MascaraTelefoneDirective', () => {
  let directive: MascaraTelefoneDirective;
  let mockElementRef: ElementRef;

  beforeEach(() => {
    mockElementRef = new ElementRef(document.createElement('input'));
    directive = new MascaraTelefoneDirective(mockElementRef);
  });

  it('deve criar a diretiva', () => {
    expect(directive).toBeTruthy();
  });

  it('deve formatar um telefone de 10 dígitos corretamente', () => {
    mockElementRef.nativeElement.value = '1198765432';
    directive.onInputChange({ target: mockElementRef.nativeElement });
    expect(mockElementRef.nativeElement.value).toBe('(11) 9876-5432');
  });

  it('deve formatar um telefone de 11 dígitos corretamente', () => {
    mockElementRef.nativeElement.value = '11987654321';
    directive.onInputChange({ target: mockElementRef.nativeElement });
    expect(mockElementRef.nativeElement.value).toBe('(11) 98765-4321');
  });

  it('deve remover caracteres não numéricos', () => {
    mockElementRef.nativeElement.value = '(11) 9876-5432abc';
    directive.onInputChange({ target: mockElementRef.nativeElement });
    expect(mockElementRef.nativeElement.value).toBe('(11) 9876-5432');
  });

  it('deve limitar a entrada a 11 dígitos', () => {
    mockElementRef.nativeElement.value = '1198765432100';
    directive.onInputChange({ target: mockElementRef.nativeElement });
    expect(mockElementRef.nativeElement.value).toBe('(11) 98765-4321');
  });

  it('deve limpar a entrada quando não houver números', () => {
    mockElementRef.nativeElement.value = 'abcde';
    directive.onInputChange({ target: mockElementRef.nativeElement });
    expect(mockElementRef.nativeElement.value).toBe('');
  });
});
