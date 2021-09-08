let canvas = document.getElementById('canvas')
canvas.width = window.innerWidth * 0.7;
canvas.height = window.innerHeight * 0.9;
let context = canvas.getContext("2d");

let robot = new Image();
robot.src = "sprites/robot/spritesheet1.png"

let frameCounter = 0;
let spriteWidth = 398;
let spriteHeight = canvas.height
let gameFrame = 0;
let frameSpeed = 2;

            function animate() {
                context.clearRect(0, 0, canvas.width, canvas.height);


            // drawImage(image object, x-coordinate, y-coordinate, width, height)
            //drawImage(robot, x-coord, y-coord, width, height, x-coord, y-coord, width, height)
            //context.drawImage(robot, 0, 0, canvas.width, canvas.height);
             context.drawImage(robot, frameCounter*spriteWidth, 0, spriteWidth, robot.height, 0, 0, canvas.width*0.7, canvas.height*0.7) 
            
            if (gameFrame % frameSpeed == 0) {
                frameCounter++;
            
                if (frameCounter > 15) {
                    frameCounter = 0;
                }
            }

            gameFrame++;
            requestAnimationFrame(animate);
            }
                    animate();


