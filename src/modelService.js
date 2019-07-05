class ModelService {
  // DIする感じにしたら、多分テストしやすくなるはず…
  constructor(diLocalstorage) {
    this.localstorage = diLocalstorage
  }
  save = data => {
    try {
      this.localstorage.setItem('models', JSON.stringify(data))
      return true
    } catch (e) {
      return false
    }
  }
  load = () => {
    const result = this.localstorage.getItem('models')
    return result
      ? this.deserialize(JSON.parse(result))
      : [
          { id: 1, name: 'Alan', isOnset: true },
          { id: 2, name: 'Phin', isOnset: true },
          { id: 3, name: 'Rob', isOnset: true }
        ]
  }

  deserialize = lists => {
    return lists.map(e => {
      return new Model(e._id, e._name, e._isOnset)
    })
  }
  static union = (baseList, diffList) => {
    const baseIds = new Set()
    const result = baseList.concat()
    baseList.forEach(e => {
      baseIds.add(e.id)
    })
    diffList.forEach(e => {
      if (!baseIds.has(e.id)) result.push(e)
    })
    return result
  }

  static diff = (baseList, diffList) => {
    const diffIds = new Set()
    const result = []
    diffList.forEach(e => {
      diffIds.add(e.id)
    })
    baseList.forEach(e => {
      if (!diffIds.has(e.id)) result.push(e)
    })
    return result
  }
}
