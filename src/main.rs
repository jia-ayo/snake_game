struct Person{
    name: String,
    last_name: String,
    age: u32
}
fn main(){
    let person= Person{
        name: "jia".to_string(),
        last_name: "ayo".to_string(),
        age:20
    };
    println!("{} {} is {}", person.last_name, person.name, person.age)
}

