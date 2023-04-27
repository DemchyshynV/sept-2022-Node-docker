import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { userMiddleware } from "../middlewares/user.middleware";

const router = Router();

router.get("/", userController.getAll);
router.post("/", userMiddleware.isValidCreate, userController.create);

router.get(
  "/:userId",
  userMiddleware.isIdValid,
  userMiddleware.getByIdOrThrow,
  userController.getById
);
router.put(
  "/:userId",
  userMiddleware.isIdValid,
  userMiddleware.isValidUpdate,
  userMiddleware.getByIdOrThrow,
  userController.update
);
router.delete(
  "/:userId",
  userMiddleware.isIdValid,
  userMiddleware.getByIdOrThrow,
  userController.delete
);

export const userRouter = router;
