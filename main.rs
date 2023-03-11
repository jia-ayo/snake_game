use snake_game::learning_rust::{Person, Animal, log_info, log_info_2};

//use snake_game::*;
fn main(){
    let mut person= Person::new();
    let animal = Animal("dog".to_string(), 10,"bulldog".to_string());

    person.change_age(32);
    
    log_info(person);
    log_info_2(&animal);
}



