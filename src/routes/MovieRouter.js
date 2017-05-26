
import MovieController from '../controllers/MovieController';

const router = Router();

router.get('/movies', MovieController.list);

router.get('/movies/:_id', MovieController.show);

router.post('/movies', MovieController.add);

router.put('/movies/:_id', MovieController.update);

router.delete('/movies/:_id', MovieController.remove);

export default router;
