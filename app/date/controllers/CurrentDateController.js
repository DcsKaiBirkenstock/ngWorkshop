
class CurrentDateController {

  constructor() {
    this.currentDate = this.getCurrentDate();
  }

  getCurrentDate() {
    return new Date().toString();
  }

}


export default CurrentDateController;