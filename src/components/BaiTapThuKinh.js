import React, { Component } from 'react'
import Kinh from './Kinh';
// import Kinh from './Kinh';
import Model from './Model';

export default class BaiTapThuKinh extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultGlass: { id: 1, price: 30, name: 'GUCCI G8850U', url: "/glassesImage/v1.png", desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' }
    }
  }
  arrGlass = [

    { id: 1, price: 30, name: 'GUCCI G8850U', url: "/glassesImage/v1.png", desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 2, price: 50, name: 'GUCCI G8759H', url: "/glassesImage/v2.png", desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 3, price: 30, name: 'DIOR D6700HQ', url: '/glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 4, price: 30, name: 'DIOR D6005U', url: '/glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 5, price: 30, name: 'PRADA P8750', url: '/glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 6, price: 30, name: 'PRADA P9700', url: '/glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 7, price: 30, name: 'FENDI F8750', url: '/glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 8, price: 30, name: 'FENDI F8500', url: '/glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
  ];





  renderSanPham = () => {
    return this.arrGlass.map((item, index) => {
      return (
        <Kinh glassDetail={item} changeGlass={this.changeGlass}></Kinh>
      )
    })
  }



  changeGlass = (glassClicked) => {
    let itemClicked = this.arrGlass.find(item => item.id === glassClicked.id)
    console.log(itemClicked);
    this.setState({
      defaultGlass: itemClicked
    }, () => {
      console.log(this.state);
    })
  }

  renderNguoiMau = () => {
    return (
      <Model kinh={this.state.defaultGlass}></Model>
    )
  }

  render() {
    return (
      <div className="container virtualGlassContent" >
        <h1 className="text-center my-3">Virtual Glass Excercise</h1>
        <div className="row">
          <div className="col-md-6" >
            {this.renderNguoiMau()}
          </div>
          <div className="glassList col-md-6 ">
            <div className="row justify-content-between py-auto" >
              {this.renderSanPham()}
            </div>
          </div>
        </div >
      </ div >
    )
  }
}
