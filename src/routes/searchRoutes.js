const express = require("express");
const {body, param, validationResult} = require("express-validator");
const mongoose = require("mongoose");
const searchController = require("../controllers/searchController");

const validationErrorCatcher = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const transformedErrors = errors.array().map((error) => ({
      errorType: error.type || "validation",
      message: error.msg,
    }));
    return res.status(400).json({status: "fail", errors: transformedErrors});
  }
  return next();
};

const router = express.Router();

router.post(
  "/messages/:chatId",
  [
    param("chatId")
      .exists()
      .withMessage("ChatId field is required")
      .isString()
      .withMessage("ChatId field should be a string")
      .notEmpty()
      .withMessage("ChatId field should not be empty")
      .custom((value) => {
        if (!mongoose.Types.ObjectId.isValid(value)) {
          throw new Error("ChatId is not a valid ObjectId");
        }
        return true;
      }),

    body("searchText")
      .exists()
      .withMessage("Search Text field is required")
      .isString()
      .withMessage("Search Text field should be a string")
      .withMessage("Media Type must be one of text, image, video, or link"),

    body("mediaType")
      .optional()
      .isString()
      .withMessage("Media Type field should be a string")
      .isIn(["text", "image", "video", "link"]),

    body("limit")
      .optional()
      .isInt({min: 1})
      .withMessage("Limit Field should be a postitive integer"),

    body("skip")
      .optional()
      .isInt({min: 0})
      .withMessage("Skip field should be a non-negative integer"),
  ],
  validationErrorCatcher,
  searchController.searchForMatchedContents
);

router.post(
  "/messages",
  [
    body("searchText")
      .exists()
      .withMessage("Search Text field is required")
      .isString()
      .withMessage("Search Text field should be a string")
      .withMessage("Media Type must be one of text, image, video, or link"),

    body("mediaType")
      .optional()
      .isString()
      .withMessage("Media Type field should be a string")
      .isIn(["text", "image", "video", "link"]),

    body("limit")
      .optional()
      .isInt({min: 1})
      .withMessage("Limit Field should be a postitive integer"),

    body("skip")
      .optional()
      .isInt({min: 0})
      .withMessage("Skip field should be a non-negative integer"),
  ],
  validationErrorCatcher,
  searchController.searchForMatchedContents
);

router.route("/global-search").get(searchController.globalSearch);

module.exports = router;
