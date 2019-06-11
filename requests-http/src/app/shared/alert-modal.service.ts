import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Injectable } from '@angular/core';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private modalService: BsModalService) { }

  private showAlert(message: string, type: string){
    const modalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    modalRef.content.type = 'danger';
    modalRef.content.message = message;
  }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertTypes.DANGER);
  }
  showAlertSuccess(message: string) {
    this.showAlert(message, AlertTypes.SUCCESS);
  }
}
