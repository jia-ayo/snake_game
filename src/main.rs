struct Person{
    name: String,//fields
    last_name: String,
    age: u32
}
impl Person {
    //associated functiion
    fn some_function(){
        println!("some function")
    }

    //method
    //first is always self which reprecent the instance of the method
    //method is been called on 
    //within an impl block, the type self is an alias for the current type
    fn display_age(&self){
        println!("current age: {}", self.age)
    }
}
fn main(){
    Person::some_function();

    let person= Person{
        name: "jia".to_string(),
        last_name: "ayo".to_string(),
        age:20
    };
    let person_2= Person{
        name: "tia".to_string(),
        last_name: "chin".to_string(),
        age:24
    };
    person.display_age();
    person_2.display_age();
    println!("{} {} is {}", person.last_name, person.name, person.age)
}

