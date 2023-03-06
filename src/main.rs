fn main(){
    let mut message = String::from("Hello");
    let message_2= &mut message;
   
   // * => dereferenceing 
    (*message_2).push_str(" world");


    
    
    println!("{}", message_2);
}

