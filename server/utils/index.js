const { sort } = require('../config');
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

const sortParams = ({
    sortBy = sort.sortBy.default,
    direction = sort.direction.default,
    fields
}) =>{
    const allowList = {
        sortBy:[
        ...sort.sortBy.fields,
        ...Object.getOwnPropertyNames(fields)],
        direction: sort.direction.options
            
    }
    return {
        sortBy : allowList.sortBy.includes(sortBy)?sortBy : sort.sortBy.default,
        direction : allowList.direction.includes(direction)?sortBy:sort.sortBy.default
    }
}

module.exports = {
    paginationParams,
    sortParams
}