import { Router } from 'express';
import { deleteItem, getItem, createItem, getItems, updateItem } from '../controllers/item.controller';
import { logMiddleware } from '../middleware/log.middleware';

const router = Router();

router.get('/', getItems);

router.get('/:id', logMiddleware, getItem);

router.post('/', createItem);

router.put('/:id', updateItem);

router.delete('/:id', deleteItem);

export { router };
