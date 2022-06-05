import Router  from '@koa/router';
import { PrismaClient } from '@prisma/client';

export const router = new Router();
const prisma = new PrismaClient();

router.get('/tweets', async ctx => {
    const tweets = await prisma.tweet.findMany();
    ctx.body = tweets;
});

router.post('/tweets', async ctx => {
    const tweet = {
        userId: 'cl3yu37eu0009hgyfzw34ylqk',
        text: ctx.request.body.text
    };

    const doc = await prisma.tweet.create({
        data: tweet
    });

    ctx.body = doc;
});

router.delete('/tweets', async ctx => {
    const doc = await prisma.tweet.delete({
        where: {
            id: ctx.request.body.id
        }
    });

    ctx.body = doc;
});

router.put('/tweets', async ctx => {
    
})


