fn main(){
    let a = 10;
    let b = &a;
    let c = &b;
   
   // ** => dereferenceing a reference of a reference
   println!("{}", a == **c); 
    
}

