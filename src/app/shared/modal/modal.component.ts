import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() titulo: string = '';
  @Input() labelBotaoFechar: string = '';

  constructor(
    private activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {
  }

  handleClose(): void {
    this.activeModal.close('Close clic');
  }

  handleDismiss(): void {
    this.activeModal.dismiss('Cross click')
  }

}
