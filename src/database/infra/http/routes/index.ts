import express from 'express';
import accomplishmentRouter from '../../../../modules/Accomplishments/infra/http/routes/accomplishments.routes';
import chatRouter from '../../../../modules/Chat/infra/http/routes/Chat.routes';
import chatMessageRouter from '../../../../modules/ChatMessage/infra/http/routes/ChatMessage.routes';
import evaluationRouter from '../../../../modules/Evaluation/infra/http/routes/Evaluation.routes';
import focusAreaRouter from '../../../../modules/FocusArea/infra/http/routes/FocusArea.routes';
import followRouter from '../../../../modules/Follow/infra/http/routes/Follow.routes';
import locationRouter from '../../../../modules/Location/infra/http/routes/Location.routes';
import meetingRouter from '../../../../modules/Meeting/infra/http/routes/Meeting.routes';
import occupationRouter from '../../../../modules/Occupation/infra/http/routes/Occupation.routes';
import postRouter from '../../../../modules/Post/infra/http/routes/Post.routes';
import profileRouter from '../../../../modules/Profile/infra/http/routes/Profile.routes';
import serviceRouter from '../../../../modules/Service/infra/http/routes/Service.routes';
import sessionRouter from '../../../../modules/Session/infra/http/routes/session.routes';
import starredRouter from '../../../../modules/Starred/infra/http/routes/Starred.routes';
import userRouter from '../../../../modules/User/infra/http/routes/User.routes';
import languageRouter from './../../../../modules/Language/infra/http/routes/Language.routes';

const routes = express.Router();

routes.use('/accomplishment', accomplishmentRouter)
routes.use('/chat', chatRouter)
routes.use('/chatmessage', chatMessageRouter)
routes.use('/evaluation', evaluationRouter)
routes.use('/focusarea', focusAreaRouter)
routes.use('/follow', followRouter)
routes.use('/location', locationRouter)
routes.use('/meeting', meetingRouter)
routes.use('/occupation', occupationRouter)
routes.use('/post', postRouter)
routes.use('/profile', profileRouter)
routes.use('/language', languageRouter)
routes.use('/service', serviceRouter)
routes.use('/session', sessionRouter)
routes.use('/starred', starredRouter)
routes.use('/user', userRouter)

export default routes;