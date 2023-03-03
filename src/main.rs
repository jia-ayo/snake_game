fn main(){
   let message = String::from("Hello");//message comming into the scope
   print_message(message);//message is moved into print messsage function
   //message is no longer valide
}
//message is going out of the scope
//but nothing more will happen because it was moved into print_message

fn print_message(a: String) {//a comes into the scope
    println!("{}", a);
    let c = a;//c is coming into the scope and a is moved into c 
    //a is no longer valid
}
//a is going out of the scope, but nothing more will happen because it was moved
//c is going out of the scope and "drop"
//is called wich clears the memory from the heap