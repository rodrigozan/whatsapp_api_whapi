import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonAlert, IonInput, IonText } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SmsService } from '../Services/sms/sms.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonText, IonInput, IonAlert, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
  title = 'Msg Whatsapp'
  number: string = ''
  message: string = ''
  btnColor = 'primary'
  
  constructor(private alertController: AlertController, private sms: SmsService) {
    this.sms.getMessages()    
  }

  async presentAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async sendWhatsapp(){
    console.log(this.number, this.message)
    await this.sms.send(this.number, this.message)
    .subscribe(res => {
      try {
        this.presentAlert('Mensagem enviada', `Enviado para o número ${this.number}`)
        this.btnColor = 'success'
        console.log(res)
      } catch (error) {
        this.presentAlert('Error', `Mensagem não enviada para o número ${this.number}`)
        console.log(error)
      }
    })
  }
}
