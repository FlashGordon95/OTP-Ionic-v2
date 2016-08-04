import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



declare var jsSHA: any;



@Component({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
  shaObj: any;
  hMacObj: any;
  hash: String;
  hmac: String;
  secret: String;
  base32Length:any;


  constructor(public navCtrl: NavController) {
    this.secret = "JBSWY3DPEHPK3PXP";
     this.shaObj = new jsSHA("SHA-512", "TEXT");
     this.shaObj.update("This is a test");
    this.hash = this.shaObj.getHash("HEX");

        this.hMacObj = new jsSHA("SHA-1", "TEXT");
        this.hMacObj.setHMACKey(this.secret, "TEXT");
       this.hMacObj.update("This is a test");
        this.hmac = this.hMacObj.getHMAC("HEX");
        

      
 
 

       

          
  }
/*
 

    getOTPCode(secret){
      console.log("Triggered");
       
     
    var totpCode = setInterval(() => this.getOTP(secret), 5000);

        
     

    }
    dec2hex (s){
        return (s < 15.5 ? "0" : "") + Math.round(s).toString(16);
    };
       hex2dec(s){
        return parseInt(s, 16);
    };
    leftpad(s, l, p) {
        if(l + 1 >= s.length) {
            s = Array(l + 1 - s.length).join(p) + s;
        }
        return s;
    };
 
    base32tohex(base32) {
      var base32 = base32;
        var base32chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
        var bits = "";
        var hex = "";
        console.log("Made it to the base32");
        for(var i = 0; i < base32.length; i++) {
            var val = base32chars.indexOf(base32.charAt(i).toUpperCase());
            bits += this.leftpad(val.toString(2), 5, '0');
        }
        for(var i = 0; i + 4 <= bits.length; i+=4) {
            var chunk = bits.substr(i, 4);
            hex = hex + parseInt(chunk, 2).toString(16) ;
        }
        return hex;
    };

    getOTP(secret) {
        try {
          console.log("Inside getOTP method");
            var epoch = Math.round(new Date().getTime() / 1000.0);
            var time = this.leftpad(this.dec2hex(Math.floor(epoch / 30)), 16, "0");
            var hmacObj = new jsSHA(time, "HEX");
            console.log("Made it to the getHMAC");
            var hmac = hmacObj.getHMAC(this.base32tohex(secret), "HEX", "SHA-1", "HEX");
            var offset = this.hex2dec(hmac.substring(hmac.length - 1));
            var otp = (this.hex2dec(hmac.substr(offset * 2, 8)) & this.hex2dec("7fffffff")) + "";
            otp = (otp).substr(otp.length - 6, 6);
            console.log("Got the OTP");
        } catch (error) {
            throw error;
        }
        return otp;
    };
       

 
*/

}
