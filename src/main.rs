struct Person{
    name: String,//fields
    last_name: String,
    age: u32
}
impl Person {
    //associated functiion
    fn new() -> Person{
        Person { 
            name: "default".to_string(), 
            last_name: "default".to_string(), 
            age: 0 
        }
    }

    fn from(name:String,last_name:String, age:u32)->Person{
        Person { 
            name, 
            last_name,
            age 
        }
    }

    fn change_age(&mut self, new_age:u32){
        self.age = new_age;

    }
}
fn main(){
    let mut person= Person::new();
    let person_2 = Person::from(
        String::from("joshua"),
        String::from("joshua"),
        30
    );
    
    person.change_age(32); 
    
    println!("{} {} is {}", person.last_name, person.name, person.age);
    println!("{} {} is {}", person_2.last_name, person_2.name, person_2.age)
}
