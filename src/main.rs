#[derive(Debug)]
enum PersonId{
    Passport(u32),
    IdentityCard(u32, u32, u32)
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
            id: PersonId::Passport(8877),
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
        PersonId::IdentityCard(233, 444, 456)
    );
    
    
    println!("{:?}", person.id);
    println!("{:?}", person_2.id);

    check_person_id(person.id);
    //check_person_id(person_2.id);
}

fn check_person_id(id: PersonId){
    if let  PersonId::Passport(num)=id{
        println!("It matching Passport {}", num)
    }else {
        println!("It doesn't match!")
    }
    match id{
        PersonId::IdentityCard(x, y, z)=>{
            println!("ID Card: first value: {}", x);
            
        },
        PersonId::Passport(x)=>{
            println!("Passport - {}", x )
        }
    }
}
