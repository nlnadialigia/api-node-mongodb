const env = process.env.NODE_ENV || 'dev';

const config = () => {
  switch (env) {
    case 'dev':
      return {
        bd_string: 'mongodb+srv://nl-node-api:R0cR1PgKvH568ktN@clusterapi.jetaq.mongodb.net/dbname?retryWrites=true&w=majority'
      };

    case 'hml':
      return {
        bd_string: 'mongodb+srv://nl-node-api:R0cR1PgKvH568ktN@clusterapi.jetaq.mongodb.net/dbname?retryWrites=true&w=majority'
      };

    case 'prod':
      return {
        bd_string: 'mongodb+srv://nl-node-api:R0cR1PgKvH568ktN@clusterapi.jetaq.mongodb.net/dbname?retryWrites=true&w=majority'
      };
  }
};

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

export default config();
