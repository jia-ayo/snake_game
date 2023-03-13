mod another_lip;
use another_lip::another_mod;
fn outsider(){
    another_mod::another_fn();
    println!("outside fn!!")
}


pub mod  learning_rust{

    // mod top_level{
    //     pub fn hi_there(){
    //         println!("hi there");
    //     }
    //     pub mod low_level{
    //         pub fn hello_world(){
    //             println!("hello world")
    //         }
    //     }
    // }
    pub trait Log{
        fn display_info(&self);
        fn alert_something(&self){
            println!("Default implementation!!!!!!")
        }
    }
    #[derive(Debug)]
    pub enum PersonId{
        Passport(u32),
        IdentityCard(u32, u32, u32)
    }
    pub struct Person{
        name: String,//fields
        last_name: String,
        age: u32,
         id: PersonId
    }

    pub struct Animal( pub String, pub u32,pub String);

    impl Log for Animal {
        fn display_info(&self) {
            println!("{}", self.0);
        }

        fn alert_something(&self) {
            println!("Animal implentation!!!!")
        }
    }

    impl Log for Person{
        fn display_info(&self){
            //crate::outsider();
            //supr going outside of current module
            super::outsider();
            println!("{} {} {} {:?}", self.name, self.last_name, self.age, self.id)
        }
    }

    impl Person {
        //associated functiion
        pub fn new() -> Person{
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

        pub fn name(&self) ->&String{
            &self.name
        }

        pub fn change_age(&mut self, new_age:u32){
            self.age = new_age;

        }
    }


    //impl makes the compiler determine type at the compile time
    //it will create multiple versions of the function, depending on 
    //how many types Log traits implementing (Person, Animal)
    pub fn log_info(val: impl Log){
        val.alert_something();
    }

    //dyn is short for dynamic, and says that function shouldperform dynamic dispatch
    //decission of exactely which function to call at the runtime
    pub fn log_info_2(val: &dyn Log){
        val.alert_something();
    }
}