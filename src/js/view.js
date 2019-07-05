const view = {
  // show action result message
  showResult: message => {
    alert(message)
  },
  // reflect models to HTML
  reflectData: (onModels, offModels) => {
    const OnsiteDom = view.getOnsiteDom()
    const OffsiteDom = view.getOffsiteDom()
    view.removeElements(OnsiteDom)
    view.removeElements(OffsiteDom)
    view.appendModels(onModels, OnsiteDom)
    view.appendModels(offModels, OffsiteDom)
  },
  // reflect models to HTML
  getOnsiteDom: () => {
    return document.querySelector('#Onsite')
  },
  getOffsiteDom: () => {
    return document.querySelector('#Offsite')
  },
  appendModels: (models, dom) => {
    models.forEach(model => {
      dom.appendChild(view.createOptionElement(model))
    })
  },
  createOptionElement: model => {
    const opt = document.createElement('option')
    opt.value = model.id
    opt.innerHTML = model.name
    return opt
  },
  removeElements: dom => {
    while (dom.firstChild) {
      dom.removeChild(dom.firstChild)
    }
  },
  getModels: () => {
    return view.getOnsites().concat(view.getOffsites())
  },
  // get Object from HTML
  getOnsites: () => {
    const onsite = Array.from(view.getOnsiteDom().children)
    return view.getSites(onsite, true)
  },
  getSelectedOnsites: () => {
    const onsite = Array.from(view.getOnsiteDom().selectedOptions)
    return view.getSites(onsite, true)
  },
  getOffsites: () => {
    const offsite = Array.from(view.getOffsiteDom().children)
    return view.getSites(offsite, false)
  },
  getSelectedOffsites: () => {
    const offsite = Array.from(view.getOffsiteDom().selectedOptions)
    return view.getSites(offsite, false)
  },
  getSites: (dom, isOnset) => {
    return dom.map(e => {
      return {
        id: e.value,
        name: e.innerHTML,
        isOnset: isOnset
      }
    })
  }
}

if (typeof module !== 'undefined') {
  module.exports = view
}
