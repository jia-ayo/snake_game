fn main(){
    let  message = String::from("Hello");
    let message_2 = extend_message(message);
    println!("{}", message_2)
}

fn extend_message(mut a: String)->String{
    a.push_str(" world");
    a 
}