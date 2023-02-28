fn main() {
    //FLOATS
    let float_num: f32 = 3.14;
    let float_nume_2: f64 = 3.234343545;

    //TURPLE
    let tup: (i32, f64, &str) = (20, 3.12, "hello");

    println!("{}", tup.2);

    let (a, b, c) = tup;
    println!("{}", a);
    //ARRAY
    let x = [1, 5, 6, 7];
    println!("{}", x[2]);

    let y = [2; 6]; //[2,2,2,2,2,2]
    println!("{}", y[5]);
}