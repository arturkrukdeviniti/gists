const x = () => { 
  console.log(„a”); 
  setTimeout(() => console.log(„b”), 0);
  console.log(„c”) 
}; 

x();
