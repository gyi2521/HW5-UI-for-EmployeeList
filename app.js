const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222 222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];

const render = function (html) {
  $('#resultBoard').html(html);
}

const print = function () {
  let html = "";
  employeeList.forEach(e => html += `Name: ${e.name}<br /><br /> Office Number: ${e.officeNum}<br /><br /> Phone: ${e.phoneNum}<br /><br /><br />`);               
  render(html);
 }

const verify = function () {

  const empName = $('#inputName').val();
  let html = 'Employee Not Found'
  if (employeeList.find(e => e.name.toLowerCase() === empName.toLowerCase())) {
    html = 'Employee Found';
  }

  render(html);
}

const lookup = function () {
  const empName = $('#inputName').val();
  let foundEmployee = employeeList.find(e => e.name.toLowerCase() === empName.toLowerCase());

  if (foundEmployee != null) {  
    let html = (`Name: ${foundEmployee.name} <br /><br />
                Office Number: ${foundEmployee.officeNum} <br /><br />
                Phone: ${foundEmployee.phoneNum}`);
    render(html);
  }else{
    render('Employee Not Found');
  }
}
const contains = function () {
  let resultList = [];
  let html = "";
  const inputString = $('#inputName').val();

  resultList = employeeList.filter(e => e.name.toLowerCase().includes(inputString.toLowerCase()));
  resultList.forEach(e => html += `Name: ${e.name}<br /><br /> Office Number: ${e.officeNum}<br /><br /> Phone: ${e.phoneNum}<br /><br /><br />`);

  if (resultList.length > 0) {
    render(html);
  }else{
    render('Employee Not Found');
  }

}
const update = function () {
  const userName = $('#inputName').val();
  const officeNum = $('#officeNum').val();
  const phoneNum = $('#phoneNum').val();
  let foundEmployee = employeeList.find(e => e.name.toLowerCase() === userName.toLowerCase());
  if (foundEmployee != null) { 
      foundEmployee.officeNum = officeNum;
      foundEmployee.phoneNum = phoneNum;   
      let html = (`Name: ${foundEmployee.name} <br /><br />
                  Office Number: ${foundEmployee.officeNum} <br /><br />
                  Phone: ${foundEmployee.phoneNum}`);
      render(html);
  }else{
      render('Employee Not Found');
  }
}

const add = function () {
  const userName = $('#inputName').val();
  const officeNum = $('#officeNum').val();
  const phoneNum = $('#phoneNum').val();
  const newUser = { name: userName, officeNum: officeNum, phoneNum: phoneNum };
  employeeList.push(newUser);
  let html = (`Name: ${newUser.name} <br /><br />
                Office Number: ${newUser.officeNum} <br /><br />
                Phone: ${newUser.phoneNum}`);
  render(html); 
}

const cmdDelete = function () {
  const userName = $('#inputName').val();
  let msg = 'Employee Not Found';

 let empIndex = employeeList.findIndex(e => e.name.toLowerCase() === userName.toLowerCase());

 if (empIndex > -1){
  employeeList.splice(empIndex,1);
  msg = 'Employee Deleted';
 } 
  render(msg);
}

const menu = function () {
  $('.mainSection').addClass('hide');
  $('#title').removeClass('hide');
  $('#btnVerify').addClass('hide');
  $('#resultBoard').empty();
  $('#inputName').val('');
  $('#officeNum').val('');
  $('#phoneNum').val('');

  switch (this.id) {
    case 'print':
      print(); //to display the result when a user click on 'print' on navigation
      break;
    case 'verify':
      $('#contentVerify').removeClass('hide');
      $('#empName').removeClass('hide');
      $('#btnVerify').removeClass('hide');
      break;
    case 'lookup':
      $('#contentLookup').removeClass('hide');
      $('#empName').removeClass('hide');
      break;
    case 'contains':
      $('#contentContains').removeClass('hide');
      $('#empName').removeClass('hide');
      break;
    case 'update':
      $('#contentUpdate').removeClass('hide');
      $('#empName').removeClass('hide');
      $('#empAddUpdate').removeClass('hide');
      break;
    case 'add':
      $('#contentAdd').removeClass('hide');
      $('#empName').removeClass('hide');
      $('#empAddUpdate').removeClass('hide');
      break;
    case 'delete':
      $('#contentDelete').removeClass('hide');
      $('#empName').removeClass('hide');
      break;
  }
}

$('#print').on('click', menu);
$('#verify').on('click', menu);
$('#lookup').on('click', menu);
$('#contains').on('click', menu);
$('#update').on('click', menu);
$('#add').on('click', menu);
$('#delete').on('click', menu);

$('#btnPrint').on('click', print);
$('#btnVerify').on('click', verify);
$('#btnLookup').on('click', lookup);
$('#btnContains').on('click', contains);
$('#btnUpdate').on('click', update);
$('#btnAdd').on('click', add);
$('#btnDelete').on('click', cmdDelete);



