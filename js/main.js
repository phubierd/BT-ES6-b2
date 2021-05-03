document.getElementById("btnKQ").onclick = (e) => {
    // console.log(e)
    e.preventDefault();
    let nhanVien = {};
    let tongLuong = 0;
    let arrTitle = [];
    let arrInput = document.querySelectorAll('.form-input input');
    // console.log("arrInput", arrInput)
    for (let item of arrInput) {
        let tagInput = item;
        console.log("console tagInput", tagInput)

        let { id, value, title } = tagInput;
        console.log("console id,value,title:", id, value,title)
        nhanVien = { ...nhanVien, [id]: value }

        arrTitle = [...arrTitle, title];
        // console.log(arrTitle);

    }
    // console.log("nhanVien", nhanVien);
    console.log("arrTitle",arrTitle)
    let contentTitle = ``;
 
    document.getElementById('myTableBody').innerHTML=`<tr>${arrTitle[0]}</tr> </br>
    <tr>${arrTitle[1]}</tr>`

    let chucVu = document.getElementById("chucVu").value;
    // console.log("chucVu",chucVu)




}