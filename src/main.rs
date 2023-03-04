fn main(){
    let  message = String::from("Hello");
    let message_2: &String =  &message;

    //message_2 is not owner of data
    //message_2 is "borrowing" a reference to message
    

    println!("{}", message);
    println!("{}", message_2);
}

// message and message_2 going
// message_2 is not dropped because it doesnt hve ownership of what it refers to
//message is dropped
