exports.list = (req, res) =>{
    const {query = {}} = req;

    res.json({
        data:[],
        included:query,
    });
}
exports.create = (req, res) =>{
    const {body = {}} = req;
    res.json({
        data:body,
    });
}
exports.read = (req, res) =>{
    const {params = {}}= req;
    const{id} = params;
    res.json({
        id
    });
}
exports.update = (req, res) =>{
    res.json({});
}
exports.delete = (req, res) =>{
    res.json({});
}