"use strict";
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
class SkyBackground {
    drawSky(ctx, canvas) {
        const sky = ctx.createLinearGradient(0, 0, 0, canvas.height * 0.6);
        sky.addColorStop(0, "#87CEEB");
        sky.addColorStop(1, "#87CEFA");
        ctx.fillStyle = sky;
        ctx.fillRect(0, 0, canvas.width, canvas.height * 0.6);
    }
}
class GrassBackground {
    drawGrass(ctx, canvas) {
        ctx.fillStyle = "#bcaa8f";
        ctx.fillRect(0, canvas.height * 0.6, canvas.width, canvas.height * 0.4);
    }
}
class HorizonBackground {
    drawHorizon(ctx, canvas) {
        const horizon = ctx.createLinearGradient(0, canvas.height * 0.6, 0, canvas.height);
        horizon.addColorStop(0, "#bcaa8f");
        horizon.addColorStop(1, "#87CEFA");
        ctx.fillStyle = horizon;
        ctx.fillRect(0, canvas.height * 0.6, canvas.width, canvas.height * 0.4);
    }
}
const skyBackground = new SkyBackground();
const grassBackground = new GrassBackground();
const horizonBackground = new HorizonBackground();
skyBackground.drawSky(ctx, canvas);
grassBackground.drawGrass(ctx, canvas);
horizonBackground.drawHorizon(ctx, canvas);
