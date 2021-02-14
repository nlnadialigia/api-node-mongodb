const env = process.env.NODE_ENV || 'dev';

const config = () => {
  switch (env) {
    case 'dev':
      return {
        bd_string: 'mongodb+srv://nl-node-api:R0cR1PgKvH568ktN@clusterapi.jetaq.mongodb.net/dbname?retryWrites=true&w=majority',
        jwt_pass: 'bxNjb#8QdU9f',
        jwt_expires: '1d'
      };

    case 'hml':
      return {
        bd_string: 'mongodb+srv://nl-node-api:R0cR1PgKvH568ktN@clusterapi.jetaq.mongodb.net/dbname?retryWrites=true&w=majority',
        jwt_pass: 'rKv18T^$IEyg',
        jwt_expires: '7d'
      };

    case 'prod':
      return {
        bd_string: 'mongodb+srv://nl-node-api:R0cR1PgKvH568ktN@clusterapi.jetaq.mongodb.net/dbname?retryWrites=true&w=majority',
        jwt_pass: 'H@P%r5JZ$AY7&$zuJRt4nWYVfh@*nHQ',
        jwt_expires: '30d'
      };
  }
};

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

export default config();
