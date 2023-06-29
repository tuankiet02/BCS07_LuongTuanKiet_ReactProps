import React, { Component } from "react";
import { arrShoes } from "./Databyding";
import ListShoes from "./ListShoes";
export default class RenderShoes extends Component {
  state = {
    dateil: {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
  };
  chiTietSanPham = (item) => {
    this.setState({ dateil: item });
  };
  renderListShoes = () => {
    return arrShoes.map((item, index) => {
      return (
        <div className="col-4 rounded boder    p-2" key={index}>
          <ListShoes item={item} thongTin={this.chiTietSanPham} />
        </div>
      );
    });
  };
  handelShoe = (value) => {
    this.setState({ shoe: value });
  };
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Services
                  </a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-info" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        <h1 className="text-center p-3">Shoes Shop</h1>
        <div className="container">
          <div className="row">{this.renderListShoes()}</div>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5 " id="exampleModalLabel">
                    Chi tiết sản phẩm
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <img
                    className="card-img-top btn w-75"
                    src={this.state.dateil.image}
                    alt=""
                  />
                  <div className="card-body">
                    <h3 className="text-center card-title">
                      {this.state.dateil.name}
                    </h3>
                    <h4 className="text-center card-text">
                      {this.state.dateil.price} $
                    </h4>
                    <p className="text-center card-text">
                      {this.state.dateil.description}
                    </p>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-warning"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-info">
                    Mua sản phẩm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer
          className="text-center text-white"
          style={{ backgroundColor: "#f1f1f1" }}
        >
          <div className="container pt-4">
            <section className="mb-4">
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-google" />
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-linkedin" />
              </a>
            </section>
          </div>
        </footer>
      </div>
    );
  }
}
