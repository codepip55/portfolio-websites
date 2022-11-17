import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  serverMessage: string = '';
  sent = false;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  get name() {
    return this.contactForm.get('name')
  }

  get email() {
    return this.contactForm.get('email')
  }

  get message() {
    return this.contactForm.get('message')
  }

  async onSubmit() {
    if (this.name?.hasError('required') || this.email?.hasError('required') || this.message?.hasError('required')) {
      this.serverMessage = 'Please fill out all fields';
      return
    } else if (this.email?.hasError('email')) {
      this.serverMessage = 'Invalid Email';
      return
    } else {
      try {
        await this.http.post('https://discord.com/api/webhooks/1042855909606563951/iy_j2fTSLY00z9LwEKyyBgDeaShX2RDUZ9QVkaPDOYtxpeTMb9r8Tpd9m-jHpnZL_48P', {
          content: `**From:** ${this.name?.value}\n**Email:** ${this.email?.value}\n**Message:** \`\`\`${this.message?.value}\`\`\``
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).subscribe()
      } catch (e) {
        console.log(e)
      }
  
      this.name?.setValue('')
      this.email?.setValue('')
      this.message?.setValue('')
  
      this.sent = true;
    }
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    })
  }

}
