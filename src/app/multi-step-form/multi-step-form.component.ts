import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { startTimeRange } from '@angular/core/src/profile/wtf_impl';

@Component({
  selector: 'multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.css']
})
export class MultiStepFormComponent implements OnInit {
  isLinear = true;
  sample: any;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup3: FormGroup;
  thirdFormGroup1: FormGroup;
  thirdFormGroup2: FormGroup;
  thirdFormGroup: FormGroup;
  checkForm : FormGroup;
  
  hfProviders = [
    "Select your current health fund provider",
    "Not Insured",
    "ACA Health Benefits Fund",
    "AHM health insurance",
    "Allianz Overseas Student Health Cover",
    "Apia health Insurance",
    "Australian Unity Health Limited",
    "Bupa",
    "CBHS Health Fund Limited",
    "Cessnock District Health Fund",
    "CUA Health Limited",
    "Defence Health Limited",
    "Doctors Health Fund",
    "Emergency Services Health",
    "Frank Health Insurance",
    "GMF",
    "GMHBA Limited",
    "Grand United Corporate Health",
    "HBA",
    "HBF Health Limited",
    "HCF",
    "Health Care Insurance Limited",
    "HIF",
    "Health Partners",
    "health.com.au",
    "IMAN Health Cover",
    "Latrobe Health Services",
    "Medibank Private Limited",
    "Mildura Health Fund",
    "MyOwn",
    "Navy Health",
    "NIB Health Funds Ltd",
    "Nurses &amp; Midwives Health",
    "Onemedifund",
    "Peoplecare Health Insurance",
    "Phoenix Health Fund Limited",
    "Police Health",
    "Qantas Assure",
    "Queensland Country Health Fund Ltd",
    "RT Health fund",
    "Reserve Bank Health Society Ltd",
    "St.Lukes Health",
    "Teachers Health",
    "Transport Health Pty Ltd",
    "TUH",
    "UniHealth",
    "Westfund Limited",
    "Other",
    "I Don't Know"
  ]
  mainHFProviders = [{
    "displayName": "NIB",
    "value": "NIB Health Funds Ltd",
    "possition": "-2px -67px"
  },
  {
    "displayName": "Medibank",
    "value": "Medibank Private Limited",
    "possition": ""
  },
  {
    "displayName": "HCF",
    "value": "HCF",
    "possition": ""
  },
  {
    "displayName": "HBF",
    "value": "HBF Health Limited",
    "possition": ""
  },
  {
    "displayName": "Bupa",
    "value": "Bupa",
    "possition": ""
  },
  {
    "displayName": "Teachers Health",
    "value": "Teachers Health",
    "possition": ""
  }]
  styleObj = {
    "NIB Health Funds Ltd": {
      "background-position": "-2px -67px"
    },
    "Medibank Private Limited": {
      "background-position": "-82px -68px"
    },
    "HCF": {
      "background-position": "-2px -115px"
    },
    "HBF Health Limited": {
      "background-position": "-76px -114px"
    },

    "Bupa": {
      "background-position": "-70px -159px"
    },
    "Teachers Health": {
      "background-position": "-1px -160px"
    }
  }
  healthInsuranceStep = 1;
  selectHealthFund = "";
  hfProvider;
  hcCovertype = "Family";
  hospitalCoverCheckBox = {
    "privateHospital": true,
    "PregnancyBirthRelated": false,
    "HeartSurgery": false,
    "AmbulanceCover": false,
    "PsychiatricServices": false,
    "Rehabilitation": false
  }
  generalExtras = {
    "GeneralDental": true,
    "MajorDental": false,
    "Endodontic": false,
    "Optical": false,
    "Physiotherapy": false,
    "HearingAids": false,
  }
  times = [ "9 - 11am", "11 - 1pm", "1 - 3pm", "3 - 6pm", "6 - 8pm"];
  userInput={
    firstName:"",
    lastName:"",
    email:"",
    mobileNumber:"",
    bestTime:"",
    postCode:"",
    iagree:false
  }
  started =false;
  flipStarted(){
    this.started=!this.started;
  }
  states=["New South Whales", "Victoria","Queensland","South Australia","Australian Capital Territory"]
  state="Victoria";
  success=false;



  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      floatLabel: 'auto',
      required: 'required',
    });
    this.secondFormGroup = this._formBuilder.group({
      floatLabel: 'auto',
    });
    this.thirdFormGroup = this._formBuilder.group({
      firstName : new FormControl('', [Validators.required]),
      lastName : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required, Validators.email]),
      Mobile : new FormControl('', [Validators.required]),
      postCode : new FormControl('',[Validators.required]),
      bestTime : new FormControl('', [Validators.required]),
      floatLabel: 'auto'
    });
    // this.thirdFormGroup = this._formBuilder.group({
    //   floatLabel: 'auto',
    // });
    this.thirdFormGroup1 = this._formBuilder.group({
      floatLabel: 'auto',
    });
    this.thirdFormGroup2 = this._formBuilder.group({
      floatLabel: 'auto',
    })
    this.thirdFormGroup3 = this._formBuilder.group({
      floatLabel: 'auto',
    })
    this.checkForm = new FormGroup({
      firstName: new FormControl(this.userInput.firstName, [Validators.required]),
      lastName: new FormControl(this.userInput.lastName, [Validators.required]),
      email: new FormControl(this.userInput.email, [Validators.required,Validators.email]),
      mobile: new FormControl(this.userInput.mobileNumber, [Validators.required]),
      bestTime: new FormControl(this.userInput.bestTime, [Validators.required]),
      postCode: new FormControl(this.userInput.postCode, [Validators.required]),
      iagree: new FormControl(this.userInput.iagree, [Validators.required])
    });
  }

  healthInsuranceStepIncrement() {
    this.healthInsuranceStep += 1;
    console.log(this.thirdFormGroup2)
  }
  healthInsuranceStepDecrement() {
    this.healthInsuranceStep -= 1;
  }
  loadHealthProvider(value) {
    this.sample = value;
    // this.hfProvider=value 
    // this.form
  };
  changeHealthFund(value) {
    this.selectHealthFund = value;
  };
  swapRadioImage(value) {
    this.hcCovertype = value;
  };
  
  onFormSubmit(){
    console.log("Submitted");
    this.success=true;
  }
  get firstName() { return this.checkForm.get('firstName'); }
  get lastName() { return this.checkForm.get('lastName'); }
  get email() { return this.checkForm.get('email'); }
  get mobile() { return this.checkForm.get('mobile'); }
  get bestTime() { return this.checkForm.get('bestTime'); }
  get postCode() { return this.checkForm.get('postCode'); }
  get iagree() { return this.checkForm.get('iagree'); }
  getErrorMessage() {
    return this.checkForm.get('email').hasError('required') ? 'You smust enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
}
