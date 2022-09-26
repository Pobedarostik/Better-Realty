(() => {
  const refs = {
    modal: document.querySelector('[data-modal]'),
    openModalBtn: document.querySelector('[data-modal-open]'),

    btnSubmit: document.querySelector('.buttonJS'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.btnSubmit.addEventListener('click', submit);

  function submit(e) {
    e.preventDefault();
    console.log('submit');
    toggleModal();
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// // const array = [4, 2, 5, 1, 4];
// function grain(arr) {
//   // let first = [];
//   // let second = [];
//   let number = 0;
//   let numIndex = 0;

//   if (arr.length <= 2) {
//     console.log(`length less ${arr.length}`);
//     return number;
//   }

//   // for (let i = 0; i < arr.length; i += 2) {
//   //   first.push(arr[i]);
//   // }
//   // for (let k = 1; k < arr.length; k += 2) {
//   //   second.push(arr[k]);
//   // }
//   arr.map((el, index, array) => {
//     // console.log(`el = ${array[numIndex]},  array[index + 2] = ${array[numIndex + 2]}`);
//     // console.log(array[numIndex + 3]);
//     // if (array[numIndex] > array[numIndex + 3] && array[numIndex + 1] === 0) {
//     //   array.reverse();
//     //   console.log(array[numIndex]);
//     //   number += array[numIndex] * 2 - array[numIndex + 1];
//     //   numIndex = +3;
//     // }
//     if (array[numIndex] < array[numIndex + 3] && array[numIndex + 1] === 0) {
//       number += array[numIndex] * 2 - array[numIndex + 2];
//       numIndex = +3;
//     }

//     if (array[numIndex] < array[numIndex + 2] && numIndex <= array.length) {
//       console.log(
//         `array[numIndex] = ${array[numIndex]}, array[index + 2] = ${
//           array[numIndex + 2]
//         } array[numIndex + 1] = ${array[numIndex + 1]}`,
//       );

//       number += array[numIndex] - array[numIndex + 1];
//       console.log(`number = ${number}`);
//       numIndex += 2;
//       // console.log(
//       //   `array[numIndex] = ${array[numIndex]}, array[index + 2] = ${
//       //     array[numIndex + 2]
//       //   } array[numIndex + 1] = ${array[numIndex + 1]}`,
//       // );
//     }
//     if (array[numIndex] > array[numIndex + 2] && numIndex <= array.length) {
//       console.log(
//         `array[numIndex] = ${array[numIndex]}, array[index + 2] = ${
//           array[numIndex + 2]
//         }, array[numIndex + 1] = ${array[numIndex + 1]}`,
//       );

//       number += array[numIndex + 2] - array[numIndex + 1];
//       numIndex += 2;

//       // console.log(numIndex <= array.length);
//     }
//   });
//   return number;
//   console.log(number);
// }

// console.log(`кінцевий результат - ${grain(array)}`);

// const array = [4, 0, 1, 3];
// const array = [4, 1, 3];
// const array = [2, 1, 5, 2, 7, 4, 10];
// const array = [2, 0, 1, 5, 2, 7];
// const array = [2, 4, 2];
// // const array = [7, 4];
// // const array = [];

// function degree(arr) {
//   let result = [];
//   let numIndex = 0;

//   for (let index = 0; index < arr.length; index++) {
//     if (arr[0] > arr[numIndex + 1]) {
//       console.log(`${arr[0]} -${arr[numIndex + 1]} = ${arr[0] - arr[numIndex + 1]}`);
//       let num = arr[0] - arr[numIndex + 1];
//       numIndex += 1;
//       result.push(num);
//     } else {
//       console.log(
//         `${arr[numIndex + 1]} -${arr[numIndex + 2]} = ${arr[numIndex + 1] - arr[numIndex + 2]}`,
//       );
//       let num = arr[numIndex + 1] - arr[numIndex + 2];
//       numIndex += 1;
//       result.push(num);
//     }
//   }

//   return result;
// }

// console.log(degree(array));
