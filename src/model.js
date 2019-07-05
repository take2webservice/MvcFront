class Model {
  constructor(id, name, isOnset) {
    this._id = id
    this._name = name
    this._isOnset = isOnset
  }
  get id() {
    return this._id
  }
  get name() {
    return this._name
  }
  get isOnset() {
    return this._isOnset
  }
  set jd(id) {
    this._id = id
  }
  set name(name) {
    this._name = name
  }
  set isOnset(isOnset) {
    this._isOnset = isOnset
  }
}
