fn main(){
    c();
    d();
    f();
}
fn a(){
    println!("calling a");
    d()
}
fn b(){
    println!("calling b")
}

fn c(){
    println!("calling c")
}

fn d(){
    println!("calling d");
    a()
}

fn e(){
    println!("calling e")
}

fn f(){
    println!("calling f");
    b()
}

//xxd -g1 main