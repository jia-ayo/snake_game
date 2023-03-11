use snake_game::Person;
use snake_game::Animal;
use  snake_game::log_info;
use  snake_game::log_info_2;
fn main(){
    let mut person= Person::new();
    let animal = Animal("dog".to_string(), 10,"bulldog".to_string());
    ]

    person.change_age(32);
    
    log_info(person);
    log_info_2(&animal);
}



