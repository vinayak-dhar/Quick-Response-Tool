import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Sales Insight Automator API",
      version: "1.0.0",
      description: "API for analyzing sales files and generating AI insights"
    },
    servers: [
      {
        url: "http://localhost:5000"
      }
    ]
  },

  apis: ["./routes/*.js"] // scan route files
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;