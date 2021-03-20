import React, { Component } from 'react'

export default class Kinh extends Component {
  render() {
    let { glassDetail, changeGlass } = this.props;
    return (
      <div className=" glassItem mb-4 col-6 ">
        <button className="mx-auto" onClick={() => {
          changeGlass(glassDetail)
        }} >
          <img src={glassDetail.url} width={250} height={80} alt="" />
        </button>
      </div>
    )
  }
}
