




  //   function checkConstant() {
  //       let value = +prompt("Введите число");
  //       if (value < 10) {
  //       console.log("константа меньше 10");
  //       } else {
  //       console.log("константа не меньше 10");
  //       }
  //   }
    
  //   // Пример вызова функции
  //   checkConstant(); // Выведет "константа меньше 10"

    
    

  //   function ShowAlert(x) {

  //       alert(x)

  //   }
  // ShowAlert("Привет, Мир")
  



  // function js() {

  //   console.log("JavaScript");

  // }
  // js()




  // let text = "text lorem";

  // function checkLorem() {

  //   let text = "this is text have are lorem";

  //   if(text.includes("lorem")){
  //       console.log("У вас ошибка в тексте");
  //   }else{
  //       console.log(`Содержимое переменной: ${text}`);
  //   }


  // }
  // checkLorem()

    // Создание объекта man с информацией о человеке
  // let man = {
  //   name: "John",
  //   surname: "Doe",
  //   age: 30,
  //   height: 180,
  //   username: "johndoe123",
  //   password: "qwerty",
  //   Balance: 1000
  // };

  // // Добавление свойства с информацией об адресе
  // man.address = "123 Main Street, City";


  // // Проверка пароля
  // let enteredPassword = "qwerty";
  // if (enteredPassword === man.password) {
  //   console.log(`Добро пожаловать, ${man.name} ${man.surname}. Ваш логин: ${man.username}`);
  // } else {
  //   console.log(`Указанный пароль ${enteredPassword} не правильный. Попробуйте еще раз.`);
  // }


  //   // Переписать на цикл while
  // let num = 0;
  // while (num < 3) {
  //   console.log(`4ucno: ${num}`);
  //   num++;
  // }

  // // Вывод чисел от 1 до 10 с помощью цикла
  // for (let i = 1; i <= 10; i++) {
  //   console.log(i);
  // }



  // let numbers = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];
  // numbers.forEach(number => {
  //   if (number % 2 !== 0) {
  //     console.log(number);
  //   }
  // });


  //   let words = ["lorem ipsum", "javascript", "php", "css", "react", "git", "html", "mysql"];

  //   let filteredWords = words.filter(word => word.length <= 4);

  //     console.log(filteredWords);



  //   let numbers_1 = [1, -3, 5, 6, -7, 8, 9, -11];

  //   let negativeNumbers = numbers_1.filter(number => number < 0);

  //     console.log(negativeNumbers);



  //   let numbers_2 = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];

  //   let evenNumbers = numbers_2.filter(number => number % 2 === 0);

  //      console.log(evenNumbers);



  //   let words_1 = ["lorem ipsum", "javascript", "php", "css", "react", "git", "html", "mysql"];

  //   let filteredWords_1 = words_1.filter(word => word.length !== 3);

  //     console.log(filteredWords_1);
       


  //   let numbers_3 = [5, 6, 7, 8, 9];

  //   let squares = numbers_3.map(number => number ** 2);

  //     console.log(squares);

  
  //   let objects = [{a: 10, b: 5}, {a: 20, b: 22}, {a: 131, b:55}];

  //   let sums = objects.map(object => object.a + object.b);

  //     console.log(sums);


  //   let numbers_4 = [-13, 0, 12, 1662, -0.32, -102, -2];

  //   let negativeSum = numbers_4.filter(number => number < 0).reduce((acc, number) => acc + number, 0);

  //     console.log(negativeSum);


  //   let objects_1 = [{x: 10, y: "lorem"}, {x: 21, y: "lorem"}, {x: -17, y: "lorem"}, {x: 156, y: "lorem"}];

  //   let sumX = objects_1.reduce((acc, object) => acc + object.x, 0);
    
  //     console.log(sumX);





  let arr_1 = [101, 202, 303, 404, 505];
  let arr_2 = [606, 707, 808, 909];
  let superArr = [...arr_1, ...arr_2];
  // Результат: superArr = [101, 202, 303, 404, 505, 606, 707, 808, 909]

  let minNumber = Math.min(...superArr);
  
    console.log(minNumber);

  let obj = { width: 300, height: 550 };
  let newObj = {
    ...obj,
    area() {
      return this.width * this.height;
    }
  };
  
  console.log(newObj);
  
 
  function sum(...args) {
    return args.reduce((total, current) => total + current, 0);
  }