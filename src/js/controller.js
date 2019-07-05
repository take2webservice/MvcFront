const controller = {
  // move to Offsite
  moveToOffsite: () => {
    const offsites = view.getOffsites()
    const onsites = view.getOnsites()
    const selectedOnsites = view.getSelectedOnsites()
    view.reflectData(
      ModelService.diff(onsites, selectedOnsites),
      ModelService.union(offsites, selectedOnsites)
    )
  },
  // move to Onsite
  moveToOnsite: () => {
    const offsites = view.getOffsites()
    const onsites = view.getOnsites()
    const selectedOffsites = view.getSelectedOffsites()
    view.reflectData(
      ModelService.union(onsites, selectedOffsites),
      ModelService.diff(offsites, selectedOffsites)
    )
  },
  // changeStatusto indexedDB
  save: () => {
    const models = view.getModels().map(e => {
      return new Model(e.id, e.name, e.isOnset)
    })
    const modelService = new ModelService(localStorage)
    const result = modelService.save(models)
    if (result) {
      view.showResult('データを保存しました')
    } else {
      view.showResult('データに失敗しました')
    }
  },
  load: () => {
    const modelService = new ModelService(localStorage)
    const result = modelService.load()
    view.reflectData(
      result.filter(e => {
        return e.isOnset
      }),
      result.filter(e => {
        return !e.isOnset
      })
    )
  }
}
