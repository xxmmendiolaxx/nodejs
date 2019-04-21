import express, {Router, Request, Response} from "express";
import { CustomerController } from "../controller/customerController";

const router = express();
const _cc = new CustomerController();

router.get('/id', _cc.getCustomer());

router.post('', _cc.addCustomer());

router.patch('', _cc.updateCustomer());

export const customer = router;
