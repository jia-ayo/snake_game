fn main(){
    let mut message = String::from("Hello");

    //this creates a new instance in the heap 
    let message_3 = message.clone();

    message.clear();

    println!("{}", message);
    println!("{}", message_3);
}

