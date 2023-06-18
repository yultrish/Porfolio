function classAttendance(){
    console.log(window.location)
    btn = document.querySelector('#btn')
    thead = document.querySelector('#thead');
    tBody = document.querySelector('#tbody');
    input = document.querySelector('#input');
    

    mates = [{name: 'Rashidatu Mohammed',
        age: 12,
        present: true },{name: 'Elizabeth Novi Sedzro', age:30, present:true}, {name:'Bernice Owusu', age:21, present:true},  
        {name:'Abigail Addo', age:23, present:false},{name:'Doris Mintah', age:22, present:true}, {name:'Ake Victoria Delali', age:24, present:true},
        {name:'Sherifa Awinbu Atangiba', age:19, present:false}, {name:'Catherine Naa Nyaah Essuman', age:16, present:false}, {name:'Francisca Donkor', age:19, present:false},
        {name:'Ewudzie Eunice Kakra Ama', age:25, present:true}, {name:'Azeezah Azeez', age:24, present:true}, {name:'Josephine Kpodo', age:26, present:true}, {name:'Victoria Alhassan', age:31, present:false},
        {name:'Elizabeth Barden', age:35, present:false}, {name:'Lakyiere Alice', age:25, present:true}
    ]
   

    function attendance (records){
        rows = '';
        records.forEach(function(mate){
        rows += `<tr>
            <td>${mate.name}</td>
            <td>${mate.age}</td>
            <td>${mate.present}</td>
            <td>${"<button>delete</button>"}</td>
            </tr>`
            console.log()
    })
    tBody.innerHTML = rows;

    }

    attendance(mates);  

    btn.addEventListener('click', function (e){
        
      const inputText = input.value;
      
      if(inputText){
        const filteredMates = mates.filter(function (mate){
            return mate.name.toLowerCase().includes(inputText.toLowerCase())
        })
        
        attendance(filteredMates)
        
      }
      // attendance(mates)
        
    })

}

function calculator(){
    let valueA = 0;
    let valueB = 0;
    let ops = "";

// id selectors for numbers and operators declared
const resultBtn = document.querySelector('#results');
const oneBtn = document.querySelector('#one');
const twoBtn = document.querySelector('#two'); 
const threeBtn = document.querySelector('#three');
const fourBtn = document.querySelector('#four');
const fiveBtn = document.querySelector('#five');
const sixBtn = document.querySelector('#six');
const sevenBtn = document.querySelector('#seven');
const eightBtn = document.querySelector('#eight');
const nineBtn = document.querySelector('#nine');
const zeroBtn = document.querySelector('#zero');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const multiBtn = document.querySelector('#mul');
const divBtn = document.querySelector('#div');
const equalBtn = document.querySelector('#equal');
const numbers = document.querySelectorAll('.nums');
const clearBtn = document.querySelector('#clear');

numbers.forEach(function(num){
  num.addEventListener('click', function(){
     a = new Number(num.value)
     resultBtn.value = a 
    resultBtn.focus()
  })
})

clearBtn.addEventListener('click', function(){
  resultBtn.value = '';
})

//  Event listeners for operators
plusBtn.addEventListener('click', function() {
  valueA = new Number(resultBtn.value);
  ops = '+';
  resultBtn.focus()
});

minusBtn.addEventListener('click', function() {
  valueA = new Number(resultBtn.value);
  ops = '-';
  resultBtn.focus()
});

multiBtn.addEventListener('click', function() {
  valueA = new Number(resultBtn.value);
  ops = '*';
  resultBtn.focus()
});

divBtn.addEventListener('click', function() {
  valueA = new Number(resultBtn.value);
  ops = '/';
  resultBtn.focus()
});


equalBtn.addEventListener('click', function() {
  valueB = new Number(resultBtn.value);
  let valueC;

  if (ops === '+') {
    valueC = valueA + valueB;
  } else if (ops === '-') {
    valueC = valueA - valueB;
  } else if (ops === '*') {
    valueC = valueA * valueB;
  } else if (ops === '/') {
    valueC = valueA / valueB;
  }

  valueA = 0;
  resultBtn.value = valueC;
});
}

function invoice (){

}

function sum (){
  // input field js

const numAholder = document.querySelector('#numA');
const numBHolder = document.querySelector('#numB');
const sumHolder = document.querySelector('#sum');

let numA = 20;
let numB = 3;
let sum = numA + numB;

numAholder.value = numA;
numBHolder.value = numB;
sumHolder.value = sum;

}

function currencyConverter(){
  const amountHolder = document.querySelector('#amount');
const rateHolder = document.querySelector('#rate');
const cediHolder = document.querySelector('#cedi-equivalent');

let dollarRate = 9.8
let amount = 200;
let cediEquivalent = dollarRate * amount;
   cediEquivalent = "GHS" + cediEquivalent;

   amountHolder.value = amount;
   rateHolder.value = dollarRate;
   cediHolder.value = cediEquivalent;
}

function toDoTask(){
 const todos = []
  // displaytodo()
  function displaytodo(){
      const todoList = document.querySelector('.todo-list')
      // console.log(todolist)
      let disp = ''
      todos.forEach(function(todo, index){
          disp += `<div class="todo">
          <div class="del-btn">
              <button class="del-btn" data-id=${index}>&times</button> 
          </div>
          <input type="checkbox" id="checkbox" class="input-state">
          <label>${todo.task}</label>
      </div>`
      // console.log(todo.task)
      console.log(todos)
      })

      todoList.innerHTML = disp
      // console.log(todoList.innerHTML)

      
      
      // console.log(todos.task)
      const deleteButton = document.querySelectorAll('.del-btn');
      deleteButton.forEach(function(btn){
        btn.addEventListener('click', function(e){
          console.log('hi')
          deleteTodo(e.target.dataset?.id)
        })
        
      })
      const inputState = document.querySelectorAll('.input-state')
      inputState.forEach(function(input){
        input.addEventListener('change', function(e){
          if(e.target.checked){
            alert('complete')
            input.style.textDecoration = 'line-through';
          }

        })
      })
  }

  todoForm = document.querySelector('.todo-form')
  todoForm.addEventListener('submit', function (e){
      e.preventDefault();
      inputTask = document.querySelector('#input-task')
      // console.log('hi')
      if(!inputTask.value){
          alert('enter task and save')
          return
      }
      const todo = {
          task: inputTask.value, 
          completed: false     
      };

      // console.log(todo.completed)
      // console.log(todo.task)
      todos.push(todo)
      displaytodo()
      e.target.reset()
    }, false)

  function deleteTodo(index){
    todos.splice(index,1)
  }  
}

function invoiceGenerator(){
  console.log('hi')
  const products = [
           {
            id: 1, 
            description: 'pendrive',
             price: 50
            },
            {
              id: 2, 
              description: 'HardDisk',
               price: 100
              },
              
              {
                id: 23, 
                description: 'laptop',
                 price: 1000
                },
  
                {
                id: 4, 
                description: 'charger',
                 price: 150
                },
  ]

  function loadProducts(){
    let options = `<option value="">Select Items</option>`;
    products.forEach(function(product){
    options += `<option value='${product.id}'>${product.description}</option>`
    })
    select = document.querySelector('#product')
    select.innerHTML = options

    console.log(options);
  }

  order = {
    items: [

    ],
    summary: {
      tax: 0,
      tax_rate: 0.05,
      subtotal: 0,
      total: 0
    },
    addItem: function(item){
      /***
       * check if item is supplied
       * retrieve the product using item
       */
      if(item){
        const product = products.find(function(prod){
           if(item.product == prod.id){
            return prod
           }
          
        })
        if(product){
          console.log(order)
          item.detail = product 
          item.cost = new Number(item.quantity) * product.price
          order.items.push(item)
          order.summary.subtotal += item.cost
          order.summary.tax += order.summary.subtotal * order.summary.tax_rate
          order.summary.total = order.summary.subtotal + order.summary.tax
        }
        console.log(order)
        console.log(product)
      }
    }
  }

  function generateInvoice(){
    const invoiceTbody = document.querySelector('#invoice-tbody')
    rows = ''
    order.items.forEach(function(item, index){
      const row = `<tr>
                      <td>${item.quantity}</td>
                      <td>${item.detail.description}</td>
                      <td>${item.detail.price}</td>
                      <td>${item.cost}</td>
                    </tr>`

                    if (rows) {
                      rows+=row
                    }else{
                      rows=row
                    }
    })
   invoiceTbody.innerHTML = rows
  }
  

  orderForm = document.querySelector('.order-form');
  orderForm.addEventListener('submit', function(e){
    console.log('order')
    e.preventDefault();
    let item = {}
      // product: '',
      // quantity: } 
    console.log(e.target.childNodes)
    e.target.childNodes.forEach(function(element){
      if(element.className && element.className=='input-group'){
        element.childNodes.forEach(function (input){
            if(input.name){
              item[input.name] = input.value
            }
        })
      }
    })
    console.log(e.target)
    console.log(item)
    order.addItem(item)
    // console.log(order)
    document.querySelector('.subtotal').innerHTML = order.summary.subtotal
    document.querySelector('.tax-rate').innerHTML = order.summary.tax
    document.querySelector('.total').innerHTML = order.summary.total
    e.target.reset()
    generateInvoice()
    // footInvoice()
    
  })
  loadProducts()
}



function init(){
    window.addEventListener('hashchange', function(){
        // console.log(location.hash)
        if (location.hash){
            loadPage(location.hash.slice(1)+".html") ;
         }
         else {
             loadPage("index.html")
          };
    })

    function loadPage(projectFile){
        const content = document.querySelector('.container-projects')
          fetch(`/projects/${projectFile}`)
          .then(function (response){
              return response.text()
          })
          .then(function (page){
              content.innerHTML = page
              switch (projectFile) {
                case "classAttendance.html":
                    classAttendance()
                    break;
                case "calculator.html":
                    calculator()
                    break; 
                case "sum.html":
                    sum()
                    break;
                case "convert.html":
                    currencyConverter()
                    break;       
                case "toDo.html":
                    toDoTask()
                    break;
                case "invoice.html":
                    invoiceGenerator()
                    break;                  
                default:
                    break;
              }
              
          })
      }
      loadPage("index.html")
     
  }
init()









