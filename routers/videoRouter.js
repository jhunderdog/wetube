import express from "express";
import routes from "../routes";
import { videos, upload, videoDetail, editVideo, deleteVideo, getUpload, postUpload } from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.get(routes.videos, (req, res) => res.render('Videos'))
videoRouter.get(routes.upload, getUpload)
videoRouter.post(routes.upload, postUpload)
videoRouter.get(routes.videoDetail(), videoDetail)
videoRouter.get(routes.editVideo, (req, res) => res.render('Edit Video'))
videoRouter.get(routes.deleteVideo, (req, res) => res.render('Delete Video'))

export default videoRouter;
