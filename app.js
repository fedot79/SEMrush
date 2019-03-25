var list = document.getElementById('firstInput'),
    list1 = document.getElementById('secondInput'),
    list2 = document.getElementById('contFilter'),

    arrFirstInput = ['Text field', 'Number field'],
    arrTextInput = ['Containing','Exactly matching ','Begins with ','Ends with '],
    arrNumberInput = ['Equal ','Greater than ','Less than '],


item = document.createElement('option');
for (var i = 0; i < arrFirstInput.length; i++) {
    item.innerHTML = arrFirstInput[i];
    list.appendChild(item.cloneNode(true));

}
var check = function () {
    var a=document.getElementById('firstInput').value;
    switch (a) {
        case 'Text field':
            list2.setAttribute('type', 'text');

            list1.innerHTML = "";

            for (var i = 0; i < arrTextInput.length; i++) {
                item.innerHTML = arrTextInput[i];
                list1.appendChild(item.cloneNode(true));

            }break;
            case 'Number field':
                list2.setAttribute('type', 'number');
                list1.innerHTML = "";
            for (var i = 0; i < arrNumberInput.length; i++) {
                item.innerHTML = arrNumberInput[i];
                list1.appendChild(item.cloneNode(true));

            }break;
    }
    console.log(a);

};


var addFilter = function () {
    var count = 1;
    var hid = document.getElementById('hid');
    hid.style.display = 'block';
    var input3 = document.createElement('button');
    input3.className = "col-sm-3 btn btn-link";
    input3.innerText = "X";
    document.querySelector('#form').prepend(input3);
    var input2 = document.createElement('input');
    input2.className = "col-sm-3 form-control";
    input2.setAttribute("id", "contFilter" + count);
    document.querySelector('#form').prepend(input2);
    var input1 = document.createElement('select');
    input1.className = "col-sm-3 form-control form-control-sm secondInput";
    input1.setAttribute("id", "secondInput" + count);
    document.querySelector('#form').prepend(input1);
    var input = document.createElement('select');
    input.className = "col-sm-3 form-control form-control-sm firstInput";
    input.onchange=function () {
        switch (input.value) {
            case 'Text field':
                input2.setAttribute('type', 'text');
                input1.innerHTML = "";
                for (var i = 0; i < arrTextInput.length; i++) {
                    item.innerHTML = arrTextInput[i];
                    input1.appendChild(item.cloneNode(true));
                }break;
            case 'Number field':
                input2.setAttribute('type', 'number');
                input1.innerHTML = "";
                for (var i = 0; i < arrNumberInput.length; i++) {
                    item.innerHTML = arrNumberInput[i];
                    input1.appendChild(item.cloneNode(true));
                }break;
        }
    };
    input.setAttribute("id", "firstInput" + count);
    document.querySelector('#form').prepend(input);
    count++;

    item = document.createElement('option');
    for (var i = 0; i < arrFirstInput.length; i++) {
        item.innerHTML = arrFirstInput[i];
        input.appendChild(item.cloneNode(true));
    }


};
var def = function () {
    location.reload();
};
var st = {
    text:{},
    number:{}
};
var stat = function () {
st.text.operation = list1.value;
st.text.value = list2.value;
var m = document.getElementsByClassName("col-sm-3 form-control");
for (i=0;i<m.length;i++) {
    if (m[i].value==='Number field') {

      //  st.number.operation=m[i+1].value;
        st.number.value=m[i+2].value;
    }
    if (m[i].value==='Text field') {
        st.text.operation = m[i+1].value;
        st.text.value=m[i+2].value;
    }

}
    console.log(st);
};



/*function bind(method,context) {
    var args = Array.prototype.slice.call(arguments,2);
    console.log(args);
    return function () {
        var a = args.concat(Array.prototype.slice.call(arguments,0));
        return method.apply(context,a);
        
    }
}*/