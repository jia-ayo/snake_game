#[derive(Debug)]
enum PersonId{
    Passport(String),
    IdentityCard(String)
}
struct Person{
    name: String,//fields
    last_name: String,
    age: u32,
    id: PersonId
}
impl Person {
    //associated functiion
    fn new() -> Person{
        Person { 
            name: "default".to_string(), 
            last_name: "default".to_string(), 
            age: 0,
            id: PersonId::Passport("xs455556687".to_string()),
        }
    }

    fn from(name:String,last_name:String, age:u32, id: PersonId)->Person{
        Person { 
            name, 
            last_name,
            age,
            id
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
        30,
        PersonId::IdentityCard("xs390000000".to_string())
    );
    
    println!("{:?}", person.id);
    println!("{:?}", person_2.id);
}
