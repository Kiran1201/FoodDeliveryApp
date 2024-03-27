
/**
 * @swagger
 * components:
 *   schemas:
 *     DeliveryRequest:
 *       type: object
 *       properties:
 *         zone:
 *           type: string
 *           description: The delivery zone (e.g., 'central', 'suburb').
 *         organization_id:
 *           type: integer
 *           description: The ID of the organization.
 *         total_distance:
 *           type: integer
 *           description: The total distance for delivery in kilometers.
 *         item_type:
 *           type: string
 *           enum: [perishable, non-perishable]
 *           description: The type of item ('perishable' or 'non-perishable').
 *       required:
 *         - zone
 *         - organization_id
 *         - total_distance
 *         - item_type
 *
 *     DeliveryResponse:
 *       type: object
 *       properties:
 *         total_price:
 *           type: number
 *           description: The total delivery cost in euros.
 */

const { Router } = require("express");
const controller = require("./controller");

const router = Router();


/**
 * @swagger
 * /api/v1/fooddeliveryapp/calculate-cost:
 *   post:
 *     summary: Calculate delivery cost
 *     description: Calculate the total delivery cost based on various factors such as zone, organization, distance, and item type.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DeliveryRequest'
 *     responses:
 *       200:
 *         description: Successful response with the total delivery cost
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DeliveryResponse'
 */
router.post("/calculate-cost", controller.calculateDeliveryCost);

module.exports = router;