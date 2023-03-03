fn main(){
    let  message = String::from("Hello");
    let message_2 =  extend_message(message);
    
    let age = 30;
    extend_age(age);
    println!("{}", age);

    println!("{}", message_2)
}

fn extend_message(mut a: String)->String{
    a.push_str(" world");
    a 
}

fn extend_age(mut a: u32) -> u32{
    a += 100;
    a
}