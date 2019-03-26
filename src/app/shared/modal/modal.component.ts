import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() titulo = '';
  @Output() fechar = new EventEmitter<void>();

  constructor(
    private activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {
  }

  handleClose(): void {
    this.activeModal.close('Fechando Modal');
  }

  handleDismiss(): void {
    this.activeModal.dismiss('Fechando Modal')
  }

  handleConfirmar(): void {
    this.activeModal.close('Adiciona link');
    this.fechar.emit();
  }

}
