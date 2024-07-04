const canvas: HTMLCanvasElement	= document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;


interface Bird{
    x: number,
    y: number,
    size: number,
    color: string, 
}

let birds: Bird[] = createBirds(54000);
drawBirds();

function createBirds(_amount:number): Bird[]{
    let birds: Bird[] =[];
    for (let i: number = 0; i < _amount; i++){
        let bird: Bird = {
            x: Math.random() * 600,
            y: Math.random() * 600,
            size: Math.random() * 50 +10,
            color: `hsl(${Math.random() * 360}, 80%, 50%)`,
        }
        birds.push(bird);
    }
    return birds;
}

function drawBird(_bird: Bird): void{
    let path: Path2D = new Path2D();

    path.rect(_bird.x, _bird.y, _bird.size, _bird.size);
    ctx.fillStyle = _bird.color;
    ctx.fill(path);

}

function drawBirds(): void {
    for (let i : number = 0; i < birds.length; i++){
        let bird = birds[i];
        drawBird(bird);
    }
}

const speed: number = 1;
function updateBirds(){
    for (let i: number = 0; i < birds.length; i++){
        birds[i].x += speed;
    }
}

function animationFrame(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateBirds();
    drawBirds();
    requestAnimationFrame(animationFrame);
}

requestAnimationFrame(animationFrame);