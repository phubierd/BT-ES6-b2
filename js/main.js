let myTableBody = document.getElementById('myTableBody')

document.getElementById("btnKQ").onclick = (e) => {
    // console.log(e)
    e.preventDefault();
    let nhanVien = {};
    let tongLuong = 0;
    let arrTitle = [];
    const array = []
    let arrInput = document.querySelectorAll('.form-input input');
    const getChucVu = document.getElementById('chucVu').value
    console.log("arrInput", arrInput)
    for (let item of arrInput) {
        let tagInput = item;
        console.log("console tagInput", tagInput)

        let { id, value, title } = tagInput;
        console.log("console id,value,title:", id, value,title)
        nhanVien = { ...nhanVien, [id]: value}

        arrTitle = [...arrTitle, title];
        // console.log(arrTitle);

    }
    tongLuong = Number(nhanVien.inputLuongCB) * Number(nhanVien.inputHSLuong)
    const result = {
        ...nhanVien,
        chucVu: getChucVu,
        tongLuong  
    }

    //////////////////////////// lam tiep
    array.push(result)
    console.log('getChucVu',getChucVu)
    console.log("result", result);
   
    console.log(array,'????')
    for (var i = 0; i < array.length; i++) {
        var tr = document.createElement('tr');
        tr.appendChild( document.createElement('td') );
        tr.appendChild( document.createElement('td') );
        tr.appendChild( document.createElement('td') );
        tr.appendChild( document.createElement('td') );
        tr.cells[0].appendChild( document.createTextNode(array[i].inputMaNV) )
        tr.cells[1].appendChild( document.createTextNode(array[i].inputTenNV) );
        tr.cells[2].appendChild( document.createTextNode(array[i].chucVu) );
        tr.cells[3].appendChild( document.createTextNode(array[i].tongLuong) );
        myTableBody.appendChild(tr);
    }
}



