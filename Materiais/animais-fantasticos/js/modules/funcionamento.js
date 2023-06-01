export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasSemana = funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = funcionamento.dataset.horario.split(',').map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = dataAgora.getDay();
    this.horarioAgora = dataAgora.getUtcHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1]);

    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if(this.estaAberto) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if(this.funcionamento) {
      this.ativaAberto;
      this.dadosFuncionamento;
      this.dadosAgora;
    }
    return this; 
  }
}

