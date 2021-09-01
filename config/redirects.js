module.exports = [
  {
    source: '/login', // se acessar /login
    destination: '/app/login', // transfere para o /app/login que é o correto
    permanent: true, // e considera como 301 ou 308, ou seja, transfere permanentemente.
  },
];
