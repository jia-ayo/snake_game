fn main(){
    let mut message = String::from("Hello");
    let message_2: &mut String =  &mut message;

    //message_2 is not owner of data
    //message_2 is "borrowing" a reference to message
    
    message_2.push_str(" world");
    
    println!("{}", message_2);
    println!("{}", message);
}

// message and message_2 going
// message_2 is not dropped because it doesnt hve ownership of what it refers to
//message is dropped
