import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Injectable } from '@angular/core';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private modalService: BsModalService) { }

  private showAlert(message: string, type: string, dismissTimeout?: number){
    const modalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    modalRef.content.type = type;
    modalRef.content.message = message;

    if (dismissTimeout){
      setTimeout(() => modalRef.hide(), dismissTimeout);
    }
  }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertTypes.DANGER);
  }
  showAlertSuccess(message: string) {
    this.showAlert(message, AlertTypes.SUCCESS, 3000);
  }
  showConfirm(title: string, msg: string, okTxt?: string, cancelTxt?: string){
    const modalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);
    modalRef.content.title = title;
    modalRef.content.msg = msg;

    if (okTxt){
      modalRef.content.okTxt = okTxt;
    }
    if (cancelTxt){
      modalRef.content.cancelTxt = cancelTxt;
    }
    return (<ConfirmModalComponent>modalRef.content).confirmResult;
  }
}
