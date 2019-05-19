import express from "express";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.videos, (req, res) => res.render('Videos'))
videoRouter.get(routes.upload, (req, res) => res.render('Upload'))
videoRouter.get(routes.videoDetail, (req, res) => res.render('Video Detail'))
videoRouter.get(routes.editVideo, (req, res) => res.render('Edit Video'))
videoRouter.get(routes.deleteVideo, (req, res) => res.render('Delete Video'))

export default videoRouter;
