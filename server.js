const express = require('express');
const appRoutes = require('./src/FoodDeliveryApp/routes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerSpec');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/v1/fooddeliveryapp", appRoutes);

app.listen(port, () => console.log(`app listening on the  ${port}`));