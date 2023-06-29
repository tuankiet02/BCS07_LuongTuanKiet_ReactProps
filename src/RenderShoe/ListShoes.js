import React, { Component } from "react";

export default class ListShoes extends Component {
  render() {
    let { item } = this.props;
    return (
      <div
        className="card text-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => {
          this.props.thongTin(item);
        }}
      >
        <img src={item.image} alt="" className="w-75 pl-3" />
        <h5>{item.name}</h5>
        <p>Giá:{item.price}</p>
        <button
          type="button"
          className="btn btn-dark"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => {
            this.props.thongTin(item);
          }}
        >
          <i class="fa-solid fa-cart-shopping"></i>
          THÔNG TIN CHI TIẾT
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    );
  }
}
