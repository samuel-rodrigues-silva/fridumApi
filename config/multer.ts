import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, '../public/uploads')
        },
        filename: (req, file, cb) => {
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        }
    })
};