fn main(){
    //String => has a pointer, length and capacity which allows there to increase the capacity
    let mut message = String::from("Hello");
    //str => has a pointer, length without a capacity which does not allow increase in capacity
    let name = "Flip";


    //String
    message.push_str(" world");
    
    //str so you cant add more capacity/words
    //name.push_str(" Jerga");
    
}

