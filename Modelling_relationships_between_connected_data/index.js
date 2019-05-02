//Trade off between query performance vs consistency

//using references (normalization) -> Consistency (2 queries)
let author = {
    name: 'Randy'
}

let course = {
    author: 'id'
}

//using embedded documents (denormalization) -> Performance (1 query)
//inconsistent changes in name if in multiple places
let course = {
    author: {
        name: 'Randy'

    }
}

//hybrid
let author = {
    name: 'Randy'
    //50 other properties
}

let course = {
    author: {
        id: 'ref',
        name: 'Randy'
    }
}