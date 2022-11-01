import React, { useState } from "react";
import './Header.css'
import Logo from '../assets/imgs/sbs-logo-update-8.gif'
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

const Header = () => {

  const [hidd, sethide] = useState()
  function toggle_abrs(){
    const hiddent = { left: "0%" }
    sethide(hiddent)
  }

  function refreshPage() {
    window.location(true);
  }

    const Logout = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'ທ່ານຕ້ອງການອອກຈາກລະບົບ ຫຼື່ ບໍ່?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Logout it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'ອອກຈາກລະບົບ!',
                'Your file has been Logout.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
    }
    

    return (
        <>
            <nav className="nav-bar-header header-bar">
                <ul class="nav margin-nav-header">
                    <li className="nav-item disnone">
                      <a class="nav-link" onClick={toggle_abrs}><label><i class="bi bi-menu-button-wide-fill"></i></label></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"><i class="bi bi-house-fill"></i> Ali ຜູ້ຈັດການ</a>
                    </li>
                    <li class="nav-item item-active">
                      <select class="form-control selectpicker" id="select-country" data-live-search="true">
                        <option data-tokens="">ເລືອກສາຂາ</option>
                        <option data-tokens="china">ນາຊາຍທອງ</option>
                        <option data-tokens="malayasia">ສົງເປື່ອຍ</option>
                        <option data-tokens="singapore">Singapore</option>
                      </select>
                    </li>
                </ul>
                <div className="search-float-left">
                    <input type="text" className="form-control border-input input-flex" placeholder="ຄົ້ນຫາ"/>
                    <Link className="Btn-flex btn btn-danger" onClick={() => Logout()} ><i class="bi bi-box-arrow-right"></i> Logout</Link>
                </div>
            </nav>
            
            <div className="nav left-bar float-left" style={hidd}>
                <img src={Logo} width="50%" height="10%" className="Image-logo"/>
                <div className="nav-bar list-item-bar">
                    {/* <!-- As a link --> */}
                    <nav class="navbar nav-active">
                        <div class="container-fluid confluid-active">
                            <Link to="/Home" class="navbar-brand navbar-light-active" onClick={refreshPage}><i class="bi bi-house-fill"></i> ໜ້າຫຼັກ</Link>
                        </div>
                        <div class="container-fluid confluid-active">
                            <Link to="/Dashboard" class="navbar-brand navbar-light-active" onClick={refreshPage}><i class="bi bi-speedometer2"></i> ລາຍງານ</Link>
                        </div>
                        <div class="container-fluid confluid-active">
                            <Link onClick={() => Logout()} class="navbar-brand navbar-light-active Logout-active"><i class="bi bi-box-arrow-right"></i> Logout</Link>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="padding-header"/>

            {/* <Home /> */}

        </>
    )
}


export default Header