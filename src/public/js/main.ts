
//write javascript here
const colors = ['yellow', 'red', 'pink', 'black','blue','green','whitesmoke','cyan','brown'];
const changeColor = () => {
   let p: HTMLParagraphElement = document.querySelector('p');
   console.log(p);
   let random =  Math.random() * colors.length;
   random = Math.floor(random);
   console.log(random);
   p.style.backgroundColor = colors[random];

}
