import express from 'express';
import accomplishmentRoutes from '../../../../modules/Accomplishments/infra/http/routes/accomplishments.routes';
import chatRoutes from '../../../../modules/Chat/infra/http/routes/Chat.routes';
import chatMessageRoutes from '../../../../modules/ChatMessage/infra/http/routes/ChatMessage.routes';
import evaluationRoutes from '../../../../modules/Evaluation/infra/http/routes/Evaluation.routes';
import focusAreaRoutes from '../../../../modules/FocusArea/infra/http/routes/FocusArea.routes';
import followRoutes from '../../../../modules/Follow/infra/http/routes/Follow.routes';
import locationRoutes from '../../../../modules/Location/infra/http/routes/Location.routes';
import meetingRoutes from '../../../../modules/Meeting/infra/http/routes/Meeting.routes';
import occupationRoutes from '../../../../modules/Occupation/infra/http/routes/Occupation.routes';
import postRoutes from '../../../../modules/Post/infra/http/routes/Post.routes';
import profileRoutes from '../../../../modules/Profile/infra/http/routes/Profile.routes';
import roleRoutes from '../../../../modules/Role/infra/http/routes/Role.routes';
import serviceRoutes from '../../../../modules/Service/infra/http/routes/Service.routes';
import sessionRoutes from '../../../../modules/Session/infra/http/routes/session.routes';
import starredRoutes from '../../../../modules/Starred/infra/http/routes/Starred.routes';
import userRoutes from '../../../../modules/User/infra/http/routes/User.routes';

const routes = express.Router();

routes.use('/accomplishment', accomplishmentRoutes)
routes.use('/chat', chatRoutes)
routes.use('/chatmessage', chatMessageRoutes)
routes.use('/evaluation', evaluationRoutes)
routes.use('/focusarea', focusAreaRoutes)
routes.use('/follow', followRoutes)
routes.use('/location', locationRoutes)
routes.use('/meeting', meetingRoutes)
routes.use('/occupation', occupationRoutes)
routes.use('/post', postRoutes)
routes.use('/profile', profileRoutes)
routes.use('/role', roleRoutes)
routes.use('/service', serviceRoutes)
routes.use('/session', sessionRoutes)
routes.use('/starred', starredRoutes)
routes.use('/user', userRoutes)

export default routes;