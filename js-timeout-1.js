const x = () => { 
  console.log('a'); 
  setTimeout(() => console.log('a'), 0);
  console.log('c'); 
}; 

x();
