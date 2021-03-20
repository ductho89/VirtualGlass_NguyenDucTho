import React, { Component } from 'react'

export default class Model extends Component {
  renderNgu
  render() {
    let { kinh } = this.props
    return (
      < div >
        <div className="card text-white text-dark modelDetail ">
          <img className="card-img-top modelImage" src="/glassesImage/model.jpg" alt />
          <img src={kinh.url} className="modelGlass" alt="" />
          <div className="card-body py-2">
            <h4 className="card-title">{kinh.name}</h4>
            <p className="card-text glass ">{kinh.desc}</p>
          </div>
        </div>
      </div >

    )
  }
}
