import swaggerUi from 'swagger-jsdoc';

const swaggerDefinition = {
    openapi : '3.0.0',
    info : {
        title : 'Express API for Swagger',
        versions : '1.0.0',
        decription : 'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
        license : {
            name : 'saya',
            url : 'belumada.com'
        },
        contact : {
            name : 'Swagger JSON Place Holder',
            url : 'https://jsonplaceholder.typicode.com/',
        }
    },
    servers : [
        {
            url : 'http://localhost:5000',
            decription : 'Development server'
        }
    ]
}

const options = {
    swaggerDefinition,
    apis : ['./routes/*.js']
}

const SwaggerSpec = swaggerUi(options);

export default SwaggerSpec;