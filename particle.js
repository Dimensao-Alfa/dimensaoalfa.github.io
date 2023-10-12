var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(ctx);

//ctx.fillStyle = 'white';
const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height );
gradient.addColorStop( 0, 'white' );
gradient.addColorStop(0.5, 'magenta' );
gradient.addColorStop( 1, 'blue' );
ctx.filStyle = gradient;
ctx.strokeStyle = 'white';

class Particle {
    constructor(effect) {
        this.effect = effect;
        this.radius = Math.random()*10 + 2;
        this.x = this.radius + Math.random()*( this.effect.width - this.radius*2 );
        this.y = this.radius + Math.random()*( this.effect.height - this.radius*2 );
        this.vx = 1*Math.random() + 0.1;
        this.vy = 2*Math.random() + 0.08;

    }

    draw( context ) {
        context.fillStyle = 'hsl('+this.x*0.5 + ', 100%, 50%)';
        context.beginPath();
        context.arc( this.x, this.y, this.radius, 0, Math.PI*2 );
        context.fill();
        //context.stroke();
    }

    update(){
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        if ( this.x > this.effect.width || this.x < 0 ) this.vx *= -1; // flip.
        if ( this.y > this.effect.height || this.y < 0 ) this.vy *= -1 // vertical flip
    }

}

class Effect { 
    constructor( canvas ){
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.particles = [];
        this.numberOfParticles = 200;
        this.createParticles();

    }

    createParticles(){
        for (let i = 0; i < this.numberOfParticles; i++ ) {
            this.particles.push( new Particle( this ) );
        }
    }

    handleparticles( context ){
        this.particles.forEach( particle => {
            particle.draw( context );
            particle.update();
        });
        this.connectParticles( context );
    }

    connectParticles( context ) {
        const maxDistance = 150;
        for (let a = 0; a < this.particles.length; a++ ){
            for (let b = a; b < this.particles.length; b++) {
                const dx = this.particles[a].x - this.particles[b].x;
                const dy = this.particles[a].y - this.particles[b].y;

                const distance = Math.hypot(dx,dy);
                if (distance < maxDistance ) {
                    context.save();
                    const opacity = 1 - (distance/maxDistance)
                    context.globalAlpha = opacity;
                    context.beginPath();
                    context.moveTo(this.particles[a].x, this.particles[a].y );
                    context.lineTo(this.particles[b].x, this.particles[b].y );
                    context.stroke();
                    context.restore();
                }

            } 
        }
    }
}

const effect = new Effect( canvas );

function animate(){
    ctx.clearRect( 0, 0, canvas.width, canvas.height );
    effect.handleparticles( ctx );
    requestAnimationFrame( animate );
}

animate();