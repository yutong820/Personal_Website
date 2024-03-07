import { Injectable } from '@angular/core';
import Base64 from 'crypto-js/enc-base64';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NonceGeneratorService {

  constructor() { }

  static stringGen(len: number): string {
    let text = "";
    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?&()";
    for (var i = 0; i < len; i++) {
      text += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return text;
  }

  static generateNonce(): void {
    environment.nonce = Base64.stringify(hmacSHA512(this.stringGen(24), this.stringGen(10)));
  }
}
