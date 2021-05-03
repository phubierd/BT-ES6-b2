class NhanVien {
    constructor(maNV,tenNV,chucVu,hsLuong,luongCB){
        this.maNV = maNV;
        this.tenNV = tenNV;
        this.chucVu = chucVu;
        this.hsLuong = hsLuong;
        this.luongCB = luongCB;
        this.luongTong=0;
    }
    tinhTongLuong() {
        this.luongTong = this.hsLuong*this.luongCB;
    }
}
export{NhanVien}