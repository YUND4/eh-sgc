import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { SGC } from 'app/shared/constants/request-types.constants';
import { WizardService } from '../../../../../../shared/services/wizard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {
  question: string = '¿Visto el sitio del hallazgo?';
  info: string = '';
  questionaryControl: FormGroup;
  currentQuestion: number = 0;
  data: any = [
  ];
  enableRootQuestion: boolean = false;
  questionaryDone: boolean = false;
  loaded: boolean = false;

  answers: { success_button: boolean; cancel_button: boolean; answer_field: boolean; };
  questionaryConfig: { question: string; required: boolean; answers: { success_button: boolean; cancel_button: boolean; answer_field: boolean; }; }[];

  @Input() stepper;
  trackingId: number;

  constructor(
    private _formBuilder: FormBuilder,
    private _service: WizardService,
    private _route: ActivatedRoute,
  ) {
    this.questionaryConfig = [
      {
        question: '¿Fue entendido el problema y es claro?',
        required: true,
        answers: {
          success_button: true,
          cancel_button: true,
          answer_field: false
        }
      },
      {
        question: '¿Fue a sitio, observó, entrevistó?',
        required: true,
        answers: {
          success_button: true,
          cancel_button: true,
          answer_field: false
        }
      },
      {
        question: '¿Se revisaron los datos existentes sobre el problema?',
        required: true,
        answers: {
          success_button: true,
          cancel_button: true,
          answer_field: false
        }
      },
      {
        question: '¿Al evaluar la recopilación de información (1,2,3) considera suficiente para entablar juicio de las posibles causas?',
        required: true,
        answers: {
          success_button: true,
          cancel_button: true,
          answer_field: false
        }
      },
      {
        question: '¿Es la Infraestructura ( máquina, SW o Herramienta) el generador del problema?',
        required: false,
        answers: {
          success_button: true,
          cancel_button: true,
          answer_field: false
        }
      },
      {
        question: '¿Son los Recursos (materiales, Insumos) Entrante los generadores del problema?',
        required: false,
        answers: {
          success_button: true,
          cancel_button: true,
          answer_field: false
        }
      },
      {
        question: '¿Son los Recursos (materiales, Insumos) Entrante los generadores del problema?',
        required: false,
        answers: {
          success_button: true,
          cancel_button: true,
          answer_field: false
        }
      },
      {
        question: '¿Es el Medio Ambiente o Entorno el generador del problema?',
        required: false,
        answers: {
          success_button: true,
          cancel_button: true,
          answer_field: false
        }
      },
      {
        question: '¿Es el Método el generador del problema?',
        required: false,
        answers: {
          success_button: true,
          cancel_button: true,
          answer_field: false
        }
      },
      {
        question: '¿Es la información  la generadora del problema?',
        required: false,
        answers: {
          success_button: true,
          cancel_button: true,
          answer_field: false
        }
      },
    ]

    this._route.params.subscribe(params => {
      this.trackingId = params['id']
    });
    this.questionaryControl = _formBuilder.group({
      answer: ['', [Validators.required]]
    })
    const nextQuestion = this.questionaryConfig[this.currentQuestion]
    this.question = nextQuestion.question
    this.answers = nextQuestion.answers
    this.loadStep()
  }

  loadStep() {
    this._service.retriveStep(3, SGC.toLocaleLowerCase(), this.trackingId).subscribe({
      next: (v) => {
        this.data = v['data']
        if (v['data'].length != 0) {
          this.questionaryDone = true
          this.loaded = true
          this.currentQuestion = this.questionaryConfig.length - 1
          this.nextQuestion()
        }
      }
    })
  }

  ngOnInit(): void {
  }

  rootFinder() {
    this.question = `¿Porque ${this.questionaryControl.value['answer'].replace('¿', '')}?`
    this.questionaryControl.get('answer').setValue('')
    this.answers = {
      success_button: false,
      cancel_button: false,
      answer_field: true
    }
  }

  nextQuestion() {
    this.currentQuestion += 1
    if (this.currentQuestion == this.questionaryConfig.length) {
      this.question = '!Excelente¡ Analisis completo, ahora puede continuar.'
      this.answers = {
        success_button: false,
        cancel_button: false,
        answer_field: false
      }
      this.questionaryDone = true
    } else {
      const nextQuestion = this.questionaryConfig[this.currentQuestion]
      this.question = nextQuestion.question
      this.answers = nextQuestion.answers
    }
  }

  successEvent() {
    if (this.enableRootQuestion) {
      this.data[this.data.length - 1]['root'] = true
      this.enableRootQuestion = false
      this.nextQuestion()
    } else {
      this.data.push({
        question: this.question,
        answer: 'Si'
      })
      if (this.questionaryConfig[this.currentQuestion].required) {
        this.nextQuestion()
      } else {
        this.questionaryControl.get('answer').setValue(this.question)
        this.rootFinder()
      }
    }
  }

  cancelEvent() {
    if (!this.questionaryConfig[this.currentQuestion].required) {
      if (this.enableRootQuestion) {
        this.data[this.data.length - 1]['root'] = false
        this.enableRootQuestion = false
        this.rootFinder()
      } else {
        this.data.push({
          question: this.question,
          answer: 'No'
        })
        this.nextQuestion()
      }
    }
  }

  submitAnswer() {
    if (this.questionaryControl.valid) {
      this.data.push({
        question: this.question,
        answer: this.questionaryControl.value['answer']
      })
      this.enableRootQuestion = true;
      this.question = `¿Es esta la raiz del problema?`
      this.answers = {
        success_button: true,
        cancel_button: true,
        answer_field: false
      }
    }
  }

  doneStep3() {
    if (this.loaded) {
      return this.stepper.next()
    }
    if (this.questionaryDone) {
      this._service.completeStep({
        tracking_id: this.trackingId,
        answers: this.data
      }, 3, 'sgc')
      .subscribe({
        next: (v)  => {
          console.log(`Correcto ${v['data']}`)
          this.stepper.next()
        },
        error: (e) => { this.serverError() },
        complete: () => { console.log("Completado") }
      })
      console.log("Paso valido")
    } else { this.validationError() }
  }

  serverError() {
    console.log('Method not implemented.');
  }
  validationError() {
    console.log('Method not implemented.');
  }

}
