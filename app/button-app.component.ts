import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from './button-modal.component';

@Component({
  selector: 'button-app-component',
  templateUrl: './app/HFCCalculator.html'
})
export class ButtonAppComponent {

  @ViewChild(ModalComponent)
  public readonly modal: ModalComponent;
}