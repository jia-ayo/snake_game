use wasm_bindgen::prelude::*;
use wee_alloc::WeeAlloc;
#[global_allocator]
static ALLOC: WeeAlloc = WeeAlloc::INIT;

#[derive(PartialEq)]
enum Direction{
    Up,
    Right,
    Down,
    Left,
}

struct SnakeCell(usize);
struct Snake {
    body: Vec<SnakeCell>,
    direction: Direction
}
impl Snake {
    fn new(spawn_index: usize) -> Snake {
        Snake {
            body: vec![SnakeCell(spawn_index)],
            direction: Direction::Down,
        }
    }
}
#[wasm_bindgen]
pub struct World {
    width: usize,
    size: usize,
    snake: Snake,
}

#[wasm_bindgen]
impl World {
    pub fn new(width: usize, snake_idx: usize) -> World {
        World {
            width,
            size: width * width,
            snake: Snake::new(snake_idx ),
        }
    }
    pub fn width(&self) -> usize {
        self.width
    }
    pub fn snake_head_idx(&self) -> usize {
        self.snake.body[0].0
    }

    pub fn update(&mut self) {
        let snake_idx = self.snake_head_idx();
      
        let (row, col) = self.index_to_cell(snake_idx);
        
        let (row, col) = match self.snake.direction{
             Direction::Right =>{
                (row, (col + 1) % self.width)
             },
             Direction::Left =>{
                (row, (col - 1) % self.width)
             },
             Direction::Up =>{
                ((row - 1) % self.width, col)
             }, 
             Direction::Down =>{
                ((row + 1) % self.width, col)
             }
        };
        let next_idx= self.cell_to_index(row, col);
        self.set_snake_head(next_idx);
        
        
        // HARD CODED SOLUTION 
        // if self.snake.direction == Direction::Right{
        //     let next_col= (col + 1) % self.width;
        //     self.snake.body[0].0 = (row * self.width) + next_col;
        // }
        // if self.snake.direction == Direction::Left{
        //     let next_col= (col - 1) % self.width;
        //     self.snake.body[0].0 = (row * self.width) + next_col;
        // }
        // if self.snake.direction == Direction::Up{
        //     let next_row= (row - 1) % self.width;
        //     self.snake.body[0].0 = (next_row * self.width) + col;
        // }
        // if self.snake.direction == Direction::Down{
        //     let next_row = (row + 1) % self.width;
        //     self.snake.body[0].0 = (next_row * self.width) + col;
        // }

    }

    fn set_snake_head(&mut self, idx: usize){
        self.snake.body[0].0 = idx;
    }

    fn index_to_cell(&self, idx:usize)->(usize, usize){
        (idx / self.width, idx % self.width)
    }

    fn cell_to_index(&self, row: usize, col: usize)->usize{
        (row * self.width) + col
    }
}

//wasm-pack build --target web