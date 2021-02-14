import express from 'express';
const router = express.Router();

router.get('/users', (request, response) => {
  return response.send({ message: 'Tudo ok com o método GET da rota users' });
});

router.post('/users', (request, response) => {
  return response.send({ message: 'Tudo ok com o método POST da rota users' });
});

export default router;
