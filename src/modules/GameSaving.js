export default class GameSaving {
  constructor(jsonData) {
    const data = JSON.parse(jsonData);
    this.id = data.id;
    this.created = data.created;
    this.userInfo = data.userInfo;
  }
}
