import { Decimal } from 'decimal.js';

// Convert Decimal to number before returning or assigning
const totalPrice: number = new Decimal(cartData.total_price).toNumber();
