import express from "express";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.videos, (req, res) => res.redner('Videos'))
videoRouter.get(routes.upload, (req, res) => res.redner('Upload'))
videoRouter.get(routes.videoDetail, (req, res) => res.redner('Video Detail'))
videoRouter.get(routes.editVideo, (req, res) => res.redner('Edit Video'))
videoRouter.get(routes.deleteVideo, (req, res) => res.redner('Delete Video'))

export default videoRouter;
