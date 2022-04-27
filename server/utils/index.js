const config = require ('../config')

const {pagination} = config;

const paginationParams = ({
    limit = pagination.limit ,
     page = pagination.page, 
     skip = pagination.skip

})=>({
    
        limit: parseInt(limit,10),
        page: skip ? 0 :parseInt(page, 10),
        skip:skip ? parseInt(skip,10):skip = (page -1)*limit,
})

module.exports = {
    paginationParams
}