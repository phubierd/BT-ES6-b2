import {NhanVien}from './NhanVien.js';

/** hiển thị lên html*/

const hienThiHTML = (nv) =>{
    document.getElementById('kqMaNV').innerHTML=nv.maNV;
    document.getElementById('kqTenNV').innerHTML=nv.tenNV;
    document.getElementById('kqChucVu').innerHTML=nv.chucVu;
    document.getElementById('kqTongLuong').innerHTML=nv.luongTong +"$";
}


document.getElementById('btnKQ').addEventListener('click',(e)=>{
    e.preventDefault();
    let maNV = document.getElementById('inputMaNV').value;
    let tenNV = document.getElementById('inputTenNV').value;
    let chucVu = document.getElementById('chucVu').value;
    let hsLuong = document.getElementById('inputHSLuong').value;
    let luongCB = document.getElementById('inputLuongCB').value;

    // console.log(maNV,tenNV,chucVu,hsLuong,luongCB)
    const nv = new NhanVien(maNV,tenNV,chucVu,hsLuong,luongCB)
    nv.tinhTongLuong();
    // console.log(nv);
    hienThiHTML(nv);
})