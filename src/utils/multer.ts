import * as multer from 'multer'
import * as path from 'path'

export default multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname)
        if(!['.png', '.jpg', '.jpeg'].includes(ext)) {
            cb(new Error(`\`${ext}\` file type is not supported`))
            return
        }
        cb(null, true)
    }
})